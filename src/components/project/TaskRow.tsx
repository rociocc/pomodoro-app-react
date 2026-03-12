import type { Task } from "../../types/Task"

interface TaskRowProps {
  task: Task
  onChange: (task: Task) => void
}

export default function TaskRow({ task, onChange }: TaskRowProps) {

  return (
    <tr>

      <td>
        <input
          value={task.name}
          onChange={e =>
            onChange({ ...task, name: e.target.value })
          }
        />
      </td>

      <td>
        <input
          type="number"
          value={task.durationMinutes}
          onChange={e =>
            onChange({
              ...task,
              durationMinutes: Number(e.target.value)
            })
          }
        />
      </td>

    </tr>
  )
}