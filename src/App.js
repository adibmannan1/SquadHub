import './App.css';
import Employees from './Employees';
import Header from './Header'
import Footer from './Footer'
import { useState } from 'react'
import portrait1 from './images/portrait 1.jpg';
import portrait2 from './images/portrait 2.jpg';
import portrait3 from './images/portrait 3.jpg';
import portrait5 from './images/portrait 5.jpg';
import portrait6 from './images/portrait 6.jpg';
import portrait7 from './images/portrait 7.jpg';
import portrait8 from './images/portrait 8.jpg';
import portrait9 from './images/portrait 9.jpg';
import portrait10 from './images/portrait 10.jpg';
import styles from './CustomStyles.module.css';

function App() {
  const [selectedTeam, setTeam] = useState('Team A')
  const [employees, setEmployees] = useState(
  [{  id: 1,
      fullName: "Sam Reynolds",
      designation: "Machine Learning Engineer",
      gender: "male",
      teamName: "Team A",
      image: portrait2
    },
    {
      id: 2,
      fullName: "Nickey Minaj",
      designation: "Node Developer",
      gender: "female",
      teamName: "Team A",
      image: portrait1
    },
    {
      id: 3,
      fullName: "Boby Jenny",
      designation: "JavaScript Developer",
      gender: "female",
      teamName: "Team A",
      image: portrait3
    },
    {
      id: 4,
      fullName: "Michael Richard",
      designation: "React Developer",
      gender: "male",
      teamName: "Team B",
      image: portrait5
    },
    {
      id: 5,
      fullName: "Sarah Jojo",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "Team B",
      image: portrait7
    },
    {
      id: 6,
      fullName: "James Bond",
      designation: "React Developer",
      gender: "male",
      teamName: "Team C",
      image: portrait6
    },
    {
      id: 7,
      fullName: "Mike Pattrick",
      designation: "API Developer",
      gender: "male",
      teamName: "Team C",
      image: portrait8
    },
    {
      id: 8,
      fullName: "Jamy Castra",
      designation: "C++ Developer",
      gender: "female",
      teamName: "Team C",
      image: portrait9
    },
    {
      id: 9,
      fullName: "Florentino Kez",
      designation: "Cloud Developer",
      gender: "female",
      teamName: "Team D",
      image: portrait10
    }]
    )

    function handleTeamSelectionChange(event){
      setTeam(event.target.value)
    }
    function handleEmployeeCardClick(event){
      const trasformedEmployees = employees.map(employee=>(
        employee.id === parseInt(event.currentTarget.id)? 
        employee.teamName === selectedTeam? 
        {...employee, teamName: ''} : {...employee, teamName: selectedTeam} : employee))
      setEmployees(trasformedEmployees)
    }
  return (
    <div className="App">
      <Header selectedTeam={selectedTeam} 
      teamMemberCount={employees.filter((employee)=>employee.teamName === selectedTeam).length}/>
      <Employees employees={employees} selectedTeam={selectedTeam} 
      handleTeamSelectionChange={handleTeamSelectionChange} 
      handleEmployeeCardClick={handleEmployeeCardClick}/>
      <Footer/>
    </div>
  );
}

export default App;
