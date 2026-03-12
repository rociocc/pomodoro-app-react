import { useContext } from "react"
import { ProjectActionsContext } from "./ProjectActionsContext"

export function useProjectActions() {

  const context = useContext(ProjectActionsContext)

  if (!context) {
    throw new Error("useProjectActions must be used inside ProjectProvider")
  }

  return context
}