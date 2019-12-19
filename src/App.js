import React, { useState } from "react";
import Team from "./components/Team";
import MemberForm from "./components/MemberForm";
import "./App.css";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Truly, Yours",
      email: "yours@truly.com",
      role: "Tyrant"
    }
  ]);
  console.log(`This is App.js members state `, teamMembers);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };
  return (
    <div className="App">
      <h1>My Team</h1>
      <MemberForm addNewMember={addNewMember} />
      <Team teamMembers={teamMembers} />
    </div>
  );
}

export default App;
