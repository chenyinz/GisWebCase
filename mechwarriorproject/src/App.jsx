import { useState } from 'react'
import './App.css'
import NavBar from "./NavBar";
import MainMit from "./MainMit";
function App() {
  const [accounts, setAccounts] = useState(0);

  return (
    <div className="overlay">
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMit accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="moving-background"></div>
    </div>
  );
}


export default App;
