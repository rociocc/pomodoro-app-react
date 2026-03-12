import { DndContext, type DragEndEvent } from "@dnd-kit/core"
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable"
import type { Task } from "../../types/Task"
import TaskRow from "./TaskRow"


interface TaskTableProps {
  tasks: Task[]
  onTasksChange: (tasks: Task[]) => void
}

export default function TaskTable({ tasks, onTasksChange }: TaskTableProps) {

  function handleDragEnd(event: DragEndEvent) {

    const { active, over } = event

    if (!over || active.id === over.id) return

    const oldIndex = tasks.findIndex(t => t.id === active.id)
    const newIndex = tasks.findIndex(t => t.id === over.id)

    const reordered = arrayMove(tasks, oldIndex, newIndex)

    const updated = reordered.map((task, index) => ({
      ...task,
      order: index
    }))

    onTasksChange(updated)
  }

  function updateTask(task: Task) {

    const updated = tasks.map(t =>
      t.id === task.id ? task : t
    )

    onTasksChange(updated)
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>

      <SortableContext
        items={tasks.map(t => t.id)}
        strategy={verticalListSortingStrategy}
      >

        <table>

          <thead>
            <tr>
              <th>Task</th>
              <th>Minutes</th>
            </tr>
          </thead>

          <tbody>

            {tasks.map(task => (
              <TaskRow
                key={task.id}
                task={task}
                onChange={updateTask}
              />
            ))}

          </tbody>

        </table>

      </SortableContext>

    </DndContext>
  )
}