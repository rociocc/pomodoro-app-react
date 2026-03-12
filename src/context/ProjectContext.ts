import { createContext } from "react"
import type { Project } from "../types/Project"

export interface ProjectContextState {
  projects: Project[]
  addProject: (project: Project) => void
  updateProject: (project: Project) => void
  deleteProject: (projectId: string) => void
  getProjectById: (id: string) => Project | undefined
}

export const ProjectContext =
  createContext<ProjectContextState | undefined>(undefined)