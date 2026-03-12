import { useParams } from "react-router-dom"
import { usePomodoro } from "../hooks/usePomodoro"
import TimerDisplay from "../components/timer/TimerDisplay"
import { useProjectState } from "../context/useProjectState"

export default function ProjectRunner(){

  const {id} = useParams()
  const {projects} = useProjectState()

  const project = projects.find(p=>p.id===id)

  const {currentTask,start} = usePomodoro(project?.tasks ?? [])

  if(!project) return <div>Project not found</div>

  return(

    <div>

      <h1>{project.name}</h1>

      <TimerDisplay task={currentTask}/>

      <button onClick={start}>
        Start
      </button>

    </div>
  )
}