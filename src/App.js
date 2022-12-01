import "./assets/stylesheets/style.scss"

function App() { 
  return (  
    <div className="App">
      <nav>
        <h1> ProjecTiles </h1>
        <ul>
          <li> MM </li>
          <li> ASD </li>
          <li> ASDASD </li>
          {/* Add conditional for if the user is signed up or logged in; OR JUST BLOCK ACCESS IF YOU'RE NOT LOGGED IN, That's a log simpler yo */}
        </ul>
      </nav>
      <div className="content">

      </div> 
    </div> 
  );
}

export default App;
