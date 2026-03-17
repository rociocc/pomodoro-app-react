import { useProjectState } from "../context/useProjectState"
import { useProjectActions } from "../context/useProjectActions"
import { useState } from "react"
import type { Project } from "../types/Project"
import ProjectList from "./ProjectList"
import ProjectEditor from "../components/project/ProjectEditor"

export default function ProjectsPage(){

  const {projects} = useProjectState()
  const { createProject } = useProjectActions()

  const [editing, setEditing] = useState(false)

  function handleCreate(project: Project) {
    createProject(project)
    setEditing(false)
  }

  return(
    <div>

      <h1>Pomodoro Projects from Watch</h1>

      <button onClick={() => setEditing(true)}>
        New Project
      </button>

      {editing && (
        <ProjectEditor
          onSave={handleCreate}
          onCancel={() => setEditing(false)}
        />
      )}

      <ProjectList projects={projects} />

    </div>
  )
}