import { useEffect, useState } from "react";
import "./App.css";
import {getProfiles} from "./lib/getProfiles";
import Profile from "./components/Profile";

function App() {
  const [profiles, setprofiles] = useState([]);
  
  return (
  <>
    <section>
      {profiles.map((profile) => (
        <Profile key={profile.id} profile={profile}/>
      ))}
    </section>
  </>
  );
}

export default App;