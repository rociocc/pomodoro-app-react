
import './App.css'
import { ProjectProvider } from './context/ProjectProvider'
import AppRoutes from './routes'

function App() {
  

  return (
    <>
    <ProjectProvider>
      <AppRoutes />
    </ProjectProvider>
    </>
  )
}

export default App

// COMPONENT => Functions that return UI
// Components name start with capital letter