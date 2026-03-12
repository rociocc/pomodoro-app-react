import { useNavigate } from "react-router-dom"
import ProjectEditor from "../components/project/ProjectEditor"
import { useProjectActions } from "../context/useProjectActions"
import type { Project } from "../types/Project"

export default function ProjectEditorPage(){

  const navigate = useNavigate()

  const { createProject } = useProjectActions()

  function handleSave(project: Project){

    createProject(project)

    navigate("/")
  }

  function handleCancel(){

    navigate("/")
  }

  return(

    <ProjectEditor
      onSave={handleSave}
      onCancel={handleCancel}
    />

  )

}