import { createContext } from "react"
import type { Project } from "../types/Project"

export interface ProjectActions {
  createProject: (project: Project) => void
  updateProject: (project: Project) => void
  setActiveProject: (id: string) => void
}

export const ProjectActionsContext =
  createContext<ProjectActions | undefined>(undefined)