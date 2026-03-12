import { useContext } from "react"
import { ProjectStateContext } from "./ProjectStateContext"

export function useProjectState() {

  const context = useContext(ProjectStateContext)

  if (!context) {
    throw new Error("useProjectState must be used inside ProjectProvider")
  }
  

  return context
}