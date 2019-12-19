import React, { useState } from "react";

const MemberForm = props => {
    console.log("This is our props ", props);
    const [ teamMember, setTeamMember ] = useState ({
        name: "",
        email: "",
        role: ""
    });

    const handleChanges = e => {
        setTeamMember({
            ...teamMember,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({ name: "", email: "", role: ""})
    };

    return (
        <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChanges}
        name="name"
        value={teamMember.name}
        />
        <label htmlFor="email">Email</label>
        <input 
        id="email"
        type="text"
        placeholder="Email"
        onChange={handleChanges}
        name="email"
        value={teamMember.email}
        />
        <label htmlFor="roleInput">Role</label>
        <input 
        id="role"
        type="text"
        placeholder="Role"
        onChange={handleChanges}
        name="role"
        value={teamMember.role}
        />
        <button type="submit">Add Team Member</button>
        </form>
    );
}

export default MemberForm;