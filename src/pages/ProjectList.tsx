import type { Project } from "../types/Project"
import { useNavigate } from "react-router-dom"

interface ProjectListProps {
  projects: Project[]
}

export default function ProjectList({ projects }: ProjectListProps) {

  const navigate = useNavigate()

  return (
    <div>

      <h2>Projects</h2>

      {projects.map(p => (
        <div key={p.id}>

          <strong>{p.name}</strong>

          <button
            onClick={() => navigate(`/run/${p.id}`)}
          >
            Start
          </button>

        </div>
      ))}

    </div>
  )
}