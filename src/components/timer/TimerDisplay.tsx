import type { Task } from "../../types/Task"

export default function TimerDisplay({task}:{task:Task|null}){

  if(!task) return <h2>No task running</h2>

  return(
    <div>
      <h2>Current Task</h2>
      <h3>{task.name}</h3>
      <p>{task.durationMinutes} minutes</p>
    </div>
  )
}