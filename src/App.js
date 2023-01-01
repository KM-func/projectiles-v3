import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/stylesheets/style.scss"
import LogIn from "./pages/Login-SignUp/LogIn"; 
import SignUp from "./pages/Login-SignUp/SignUp"
import Overview from "./pages/Overview/Overview"
import { Routes, Route, Link } from "react-router-dom";
import { ProjectsProvider } from './ProjectsContext';

function App() { 
  return (   
    <ProjectsProvider>
    <div className="App">
      
      <nav>
        <h1 className="logo"> <Link to="/" >ProjecTiles</Link> </h1>
        <ul>
          <li> <Link to="/overview" > Overview </Link> </li>
          <li> Kanban </li>
          <li> List View </li>
          {/* Add conditional for if the user is signed up or logged in; OR JUST BLOCK ACCESS IF YOU'RE NOT LOGGED IN, That's a log simpler yo */}
        </ul>
      </nav>
      <div className="content pt-3">
        <Routes>
          <Route exact path="/" element={<SignUp/>} />
          <Route exact path="/signup" element={<SignUp/>} />  
          <Route exact path="/login" element={<LogIn/>} /> 
          <Route exact path="/overview" element={<Overview/>} /> 
        </Routes>
      </div> 
    </div> 
    </ProjectsProvider>
  );
}

export default App;
