import { useState, type ReactNode } from "react"
import type { Project } from "../types/Project"
import { ProjectStateContext } from "./ProjectStateContext"
import { ProjectActionsContext } from "./ProjectActionsContext"

interface ProjectProviderProps {
  children: ReactNode
}

export function ProjectProvider({ children }: ProjectProviderProps) {

  const [projects, setProjects] = useState<Project[]>([])
  const [activeProjectId, setActiveProjectId] = useState<string>()

  function createProject(project: Project) {
    setProjects(prev => [...prev, project])
  }

  function updateProject(project: Project) {
    setProjects(prev =>
      prev.map(p => (p.id === project.id ? project : p))
    )
  }

  // function deleteProject(projectId: string) {
  //   setProjects(prev => prev.filter(p => p.id !== projectId))
  // }

  // function getProjectById(id: string) {
  //   return projects.find(p => p.id === id)
  // }

  const setActiveProject = (id: string) => {
    setActiveProjectId(id)
  }

  return (
    <ProjectStateContext.Provider
      value={{ projects, activeProjectId }}
    >
      <ProjectActionsContext.Provider
        value={{ createProject, updateProject, setActiveProject }}
      >
        {children}
      </ProjectActionsContext.Provider>
    </ProjectStateContext.Provider>
  )
}