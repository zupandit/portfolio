import React from 'react'
import { FaGithubSquare } from 'react-icons/fa'

function Contributions() {
  return (
    <div className='Container' style={{marginTop: '5rem'}}>
        <div className="SectionTitle" style={{display: 'flex', alignItems:"center", flexWrap: 'wrap'}}>My Contributions&nbsp;{<FaGithubSquare/>} </div>
        <div className="BigCard" style={{padding: '0 10px 10px 10px'}}>
        <img alt="snake eating my contributions" src="https://raw.githubusercontent.com/salesp07/salesp07/output/github-contribution-grid-snake.svg" />
        </div>
    </div>
  )
}

export default Contributions