import { useRef, useState } from "react"
import { PomodoroRunnerSrv } from "../services/PomodoroRunnerSrv"
import { getAudioSrv } from "../services/AudioSrv"
import type { Task } from "../types/Task"

export function usePomodoroRunner(tasks: Task[]) {

  const runnerRef = useRef<PomodoroRunnerSrv | null>(null)
  const [currentTask, setCurrentTask] = useState<Task | null>(null)

  const audioSrv = getAudioSrv()

  function startRunner() {

    runnerRef.current = new PomodoroRunnerSrv(tasks)

    runnerRef.current.start(

      task => setCurrentTask(task),

      () => audioSrv.playTaskComplete(),

      () => setCurrentTask(null)

    )

  }

  function stopRunner() {

    runnerRef.current?.stop()

  }

  return {
    currentTask,
    startRunner,
    stopRunner
  }
}