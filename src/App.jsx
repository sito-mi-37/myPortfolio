import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Jefe from "./pages/Jefe";
import Missing from "./components/Missing";
import JefeHome from "./components/JefeHome";
import JefeProjects from "./features/project/JefeProjects";
import JefeSkills from "./features/skill/JefeSkills";
import NewProject from "./features/project/NewProject";
import NewSkill from "./components/NewSkill";
import ProjectPage from "./features/project/ProjectPage";
import EditProject from "./features/project/EditProject";
import MessagePage from "./components/MessagePage";
import Login from "./features/auth/Login";
import RequireAuth from "./features/auth/RequireAuth";
import PersistLogin from "./features/auth/PersistLogin";
import Prefetch from "./features/auth/Prefetch";
import { ROLES } from "./config/roles";
import useTitle from "./hooks/useTitle";

function App() {
  useTitle('Akujiobi-Nelson')
  return (
    <Routes>
      <Route element={<Prefetch />}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* protected routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
              <Route path="/jefe" element={<Jefe />}>
                <Route index element={<JefeHome />} />
                <Route path="projects" element={<JefeProjects />} />
                <Route path="projects/:id" element={<ProjectPage />} />
                <Route path="newproject" element={<NewProject />} />
                <Route path="editproject/:id" element={<EditProject />} />
                <Route path="skills" element={<JefeSkills />} />
                <Route path="newskill" element={<NewSkill />} />
                <Route path="message/:id" element={<MessagePage />} />
              </Route>
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
