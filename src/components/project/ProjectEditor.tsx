import { useState } from "react"
import type { Project } from "../../types/Project"
import type { Task } from "../../types/Task"
import TaskTable from "./TaskTable"


export interface ProjectEditorProps {
  onSave: (project: Project) => void
  onCancel: () => void
}

export default function ProjectEditor({ onSave, onCancel }: ProjectEditorProps) {

  const [projectName, setProjectName] = useState("")
  const [tasks, setTasks] = useState<Task[]>([])

  function handleAddTask() {

    const newTask: Task = {
      id: crypto.randomUUID(),
      name: "New Task",
      durationMinutes: 25,
      order: tasks.length
    }

    setTasks(prev => [...prev, newTask])
  }

  function handleTasksChange(updatedTasks: Task[]) {

    setTasks(updatedTasks)

  }

  function handleSave() {

    const project: Project = {
      id: crypto.randomUUID(),
      name: projectName,
      tasks: tasks.sort((a, b) => a.order - b.order)
    }

    onSave(project)
  }

  return (

    <div>

      <h2>Create Project</h2>

      <div>

        <label>Project Name</label>

        <input
          value={projectName}
          onChange={e => setProjectName(e.target.value)}
        />

      </div>

      <div>

        <button onClick={handleAddTask}>
          Add Task
        </button>

      </div>

      <TaskTable
        tasks={tasks}
        onTasksChange={handleTasksChange}
      />

      <div style={{ marginTop: "20px" }}>

        <button onClick={handleSave}>
          Save Project
        </button>

        <button onClick={onCancel}>
          Cancel
        </button>

      </div>

    </div>

  )

}