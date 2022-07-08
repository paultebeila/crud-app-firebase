import React, { useState, useEffect } from 'react';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import { db } from "./firebase-config";

import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
 
function App() {
  //global variables
  //states for
  const [name1, setName1] = useState("");
  const [lastname1, setLastname1] = useState("");
  const [email1, setEmail1] = useState("");

  //state for all employees
  const [employees, setEmployees] = useState([]);

  //database reference object
  const employeesRef = collection(db, "employees");


  //function to get employees
  const getEmployees = async() => {
    let data = await getDocs(employeesRef);
    setEmployees(data.docs.map((doc)=>({...doc.data(), id: doc.id})));

  }

  //function to add employee
  const addEmployee = async() => {
    await addDoc(employeesRef, {name: name1, lastname: lastname1, email: email1})
    getEmployees();

  }

  //function to delete
  const deleteEmployee = async(id) => {
    let employee = await doc(employeesRef, id);
    await deleteDoc(employee);
    getEmployees();
  }

  //update function
  const updateEmployee = async(id) => {
    let employee = await doc(employeesRef, id);
    await updateDoc(employee, {name:name1, lastname:lastname1, email:email1});
    getEmployees();
  }

  //onload
  useEffect(()=>{
    getEmployees()
  }, [])
  return (
    <div className="App">
      <div className='home'>
        <AddEmployee  addEmployee={addEmployee} setName={setName1} setLastname={setLastname1} setEmail={setEmail1} />
        <EmployeeList employees={employees} deleteEmployee={deleteEmployee} updateEmployee={updateEmployee}/>
      </div>
    </div>
  );
}

export default App;
