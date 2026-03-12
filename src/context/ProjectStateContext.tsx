import { createContext } from "react"
import type { Project } from "../types/Project"

export interface ProjectState {
  projects: Project[]
  activeProjectId?: string
}

export const ProjectStateContext =
  createContext<ProjectState | undefined>(undefined)