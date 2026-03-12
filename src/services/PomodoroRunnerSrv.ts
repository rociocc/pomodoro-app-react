import type { Task } from "../types/Task"

export class PomodoroRunnerSrv {

  private tasks: Task[]
  private index = 0
  private timer?: number

  constructor(tasks: Task[]) {
    this.tasks = [...tasks].sort((a, b) => a.order - b.order)
  }

  start(
    onTaskStart: (task: Task) => void,
    onTaskComplete: (task: Task) => void,
    onProjectComplete: () => void
  ) {

    const runNext = () => {

      if (this.index >= this.tasks.length) {
        onProjectComplete()
        return
      }

      const task = this.tasks[this.index]

      onTaskStart(task)

      const duration = task.durationMinutes * 60000

      this.timer = window.setTimeout(() => {

        onTaskComplete(task)

        this.index++

        runNext()

      }, duration)

    }

    runNext()

  }

  stop() {
    if (this.timer) clearTimeout(this.timer)
  }

}