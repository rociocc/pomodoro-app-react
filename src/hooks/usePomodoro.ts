import { useRef, useState, useEffect } from "react"
import { PomodoroRunnerSrv } from "../services/PomodoroRunnerSrv"
import { getAudioSrv } from "../services/AudioSrv"
import type { Task } from "../types/Task"

export function usePomodoro(tasks: Task[]) {

  const runnerRef = useRef<PomodoroRunnerSrv | null>(null)
  const audioSrvRef = useRef(getAudioSrv())

  const [currentTask, setCurrentTask] = useState<Task | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  function start() {

    if (isRunning) return

    runnerRef.current = new PomodoroRunnerSrv(tasks)

    runnerRef.current.start(

      (task) => {
        setCurrentTask(task)
        setIsRunning(true)
      },

      () => {
        audioSrvRef.current.playTaskComplete()
      },

      () => {
        setCurrentTask(null)
        setIsRunning(false)
      }

    )

  }

  function stop() {

    runnerRef.current?.stop()

    setCurrentTask(null)
    setIsRunning(false)

  }

  // cleanup if component unmounts
  useEffect(() => {

    return () => {
      runnerRef.current?.stop()
    }

  }, [])

  return {
    currentTask,
    isRunning,
    start,
    stop
  }

}