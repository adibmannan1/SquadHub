import React from 'react'
import './App.css';
import Teams from './Teams';

const Employees = ({employees,selectedTeam,handleTeamSelectionChange,handleEmployeeCardClick}) => {
  return (
    <main className='container'>
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
          <div className="select-container">
            <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange}/>
            <div className="icon-container">
              <p><svg xmlns="http://www.w3.org/2000/svg" height="20" width="12.5" viewBox="0 0 320 512"><path fill="#000000" d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/></svg></p>
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