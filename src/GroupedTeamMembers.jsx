import React, { useState } from 'react'

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {
  const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())

  function groupTeamMembers(){
    let teams = []
    let teamAMembers = employees.filter(employee => employee.teamName === 'Team A')
    let teamA = {team: 'Team A', members: teamAMembers,
    collapsed: selectedTeam === 'Team A'? false:true}
    teams.push(teamA)

    let teamBMembers = employees.filter(employee => employee.teamName === 'Team B')
    let teamB = {team: 'Team B', members: teamBMembers, 
    collapsed: selectedTeam === 'Team B'? false:true}
    teams.push(teamB)

    let teamCMembers = employees.filter(employee => employee.teamName === 'Team C')
    let teamC = {team: 'Team C', members: teamCMembers, 
    collapsed: selectedTeam === 'Team C'? false:true}
    teams.push(teamC)

    let teamDMembers = employees.filter(employee => employee.teamName === 'Team D')
    let teamD = {team: 'Team D', members: teamDMembers, 
    collapsed: selectedTeam === 'Team D'? false:true}
    teams.push(teamD)

    return teams
  }

  function collapseHandler(event){
    let transformedGroupedEmployees = groupedEmployees.map(groupedEmployee=>
      groupedEmployee.team===event.currentTarget.id? {...groupedEmployee, collapsed: !groupedEmployee.collapsed} : {...groupedEmployee, collapsed: true})
    setGroupedEmployees(transformedGroupedEmployees)
    setTeam(event.currentTarget.id)
    }

  return (
    <main className='custom-container'>
      {groupedEmployees.map(groupedEmployee=>(
          <div id={groupedEmployee.team}
          key={groupedEmployee.team} 
          style={{cursor: 'pointer'}}
          className='team-card mt-2' onClick={collapseHandler}>
            
            <h4 className='mb-0'
            >
              {groupedEmployee.team}
            </h4>

            <div id={'collapse_' + groupedEmployee.team} 
            className={groupedEmployee.collapsed === false? 
            'member-container' : 'member-container collapse'}>
             {groupedEmployee.members.map(member=>(
                <div className='custom-member-card' key={member.fullName}>
                  <img src={member.image} alt={member.fullName} className='custom-image'/>
                  <div className='member-card-content'>
                    <h5>
                      <span>{member.fullName}</span>
                    </h5>
                    <p>{member.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </main>
  )
}

export default GroupedTeamMembers