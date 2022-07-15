import React from "react";
import '../css/addEmpl.css'

const AddEmployee = ({ setName, setLastname, setEmail, addEmployee}) => {
    return (
        <div className="AddEmployee">
            <h1>Add employee</h1>
            <div className="input-control">
                <label htmlFor="name"></label>
                <input type="text" placeholder="Name..." id="name" onChange={e => setName(e.target.value)} />
            </div>

            <div className="input-control">
                <label htmlFor="lastname"></label>
                <input type="text" placeholder="Lastname..." id="lastname" onChange={e => setLastname(e.target.value)} />
            </div>

            <div className="input-control">
                <label htmlFor="email"></label>
                <input type="text" placeholder="Email..." id="email" onChange={e => setEmail(e.target.value)} />
            </div>

            <button onClick={addEmployee}>Add Employee</button>
        </div>
    )
}

export default AddEmployee;

