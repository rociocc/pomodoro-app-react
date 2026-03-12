import { Routes,Route } from "react-router-dom"
import ProjectsPage from "./pages/ProjectsPage"
import ProjectRunner from "./pages/ProjectRunner"
import ProjectEditor from "./pages/ProjectEditorPage"

export default function AppRoutes(){

  return(

    <Routes>

      <Route path="/" element={<ProjectsPage/>}/>

      <Route path="/new" element={<ProjectEditor/>}/>

      <Route path="/run/:id" element={<ProjectRunner/>}/>

    </Routes>

  )
}