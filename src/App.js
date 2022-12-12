import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/stylesheets/style.scss"
import LoginSignup from "./pages/Login-SignUp/LoginSignup"; 
function App() { 
  return (   
    <div className="App">
      <nav>
        <h1 className="logo"> ProjecTiles </h1>
        <ul>
          <li> Overview </li>
          <li> Kanban </li>
          <li> List View </li>
          {/* Add conditional for if the user is signed up or logged in; OR JUST BLOCK ACCESS IF YOU'RE NOT LOGGED IN, That's a log simpler yo */}
        </ul>
      </nav>
      <div className="content pt-3">
        <LoginSignup/>
      </div> 
    </div> 
  );
}

export default App;
