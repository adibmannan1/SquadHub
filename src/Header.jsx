import React from 'react'

const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className='container'>
      <div className='row justify-content-center mt-3 mb-4'>
        <div className='col-8'>
          <div>
            <div className='d-flex align-items-center gap-4'>
              <img src="/logo.png" alt="" style={{ width: '70px' }} />
              <h3 className='fw-bold'>Team Member Allocation</h3>
            </div>
            <div>
              <nav>
                
              </nav>
            </div>
          </div>
          <div className='mt-4'>
            <h3 className='team-info'>{selectedTeam} has {teamMemberCount} members</h3>
            <p className='mb-0 text-muted' style={{ fontSize: '0.8rem' }}>Tap to select/unselect a member</p>
          </div>
        </div>
      </div>
      </header>
  )
}

export default Header