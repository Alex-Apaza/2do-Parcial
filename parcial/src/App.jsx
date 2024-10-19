import { useEffect, useState } from "react";
import "./App.css";
import "./Superior.css";
import "./Medio.css";
import Profile from "./components/Profile";
import Superior from './components/Superior';
import Medio from './components/Medio';
import Inferior from './components/Inferior';

function App() {
  const [profiles, setprofiles] = useState([]);
  
  return (
  <>
    <section>
      {profiles.map((profile) => (
        <Profile key={profile.id} profile={profile}/>
      ))}
      <Superior />
      <Medio/>
      <Inferior/>
    </section>
  </>
  );
}

export default App;