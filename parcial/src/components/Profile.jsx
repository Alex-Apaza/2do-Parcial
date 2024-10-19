import React from "react";
import Medio from './Medio'
import Superior from './Superior'
import Inferior from './Inferior'

const Profile = () => {
  return (
    <section className="contenedor">
      <Superior />
      <Medio />
      <Inferior />
    </section>
  );
};

export default Profile;
