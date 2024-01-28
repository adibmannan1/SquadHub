import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Employees = ({employees,selectedTeam,handleTeamSelectionChange,handleEmployeeCardClick}) => {
  return (
    <main className='container'>
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
          <div className="select-container">
            <select className='select-box' value={selectedTeam} onChange={handleTeamSelectionChange}>
              <option value="Team A">Team A</option>
              <option value="Team B">Team B</option>
              <option value="Team C">Team C</option>
              <option value="Team D">Team D</option>
            </select>
            <div className="icon-container">
              <FontAwesomeIcon icon={faCaretDown} className="arrow-down"/>
            </div>
          </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <div className="card-collection">
              {
                employees.map(employee=>(
                <div id={employee.id} key={employee.id}
                className={employee.teamName===selectedTeam? 
                  'card customCard m-3 border-0 stand-out' 
                  : 'card customCard m-3 border-0 custom-card'
                  }
                onClick={handleEmployeeCardClick}>
                    <img src={employee.image} alt="dp" 
                    className="profilePic card-img-top"/>
                    <div className="card-body">
                      <h5 className='card-title fw-bold'>{employee.fullName}</h5>
                      <p className='card-text'>{employee.designation}</p>
                    </div>
                </div>
                ))
              }
            </div>
          </div>
        </div>
    </main>
  )
}

export default Employees