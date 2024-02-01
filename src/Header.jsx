import React from 'react'

const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className='container'>
      <div>
        <div className='d-flex align-items-center gap-4 title-container'>
          <img src="/logo.png" alt="" style={{ width: '70px' }} />
          <h3 className='fw-bold team-member-allocation-text'>Team Member Allocation</h3>
        </div>
        <div>
          <nav>
            
          </nav>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='team-info'>{selectedTeam} has {teamMemberCount} {teamMemberCount===1? 'member': 'members'}</h3>
        <p className='mb-0 text-muted' style={{ fontSize: '0.8rem' }}>
          Tap to select/unselect a member
        </p>
      </div>
      </header>
  )
}

export default Header