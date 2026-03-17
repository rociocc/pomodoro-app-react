
import './App.css'
import { ProjectProvider } from './context/ProjectProvider'
import AppRoutes from './routes'

const REACT_APP_VERSION = import.meta.env.VITE_REACT_APP_VERSION


function App() {
  

  return (
    <>
    <div>{ REACT_APP_VERSION }</div>
    <ProjectProvider>
      <AppRoutes />
    </ProjectProvider>
    </>
  )
}

export default App

// COMPONENT => Functions that return UI
// Components name start with capital letter