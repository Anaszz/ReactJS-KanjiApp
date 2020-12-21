import React from 'react'
import { Link } from 'react-router-dom'

function Pagination(){

    const myStyle={marginTop: 50}
    const myStyle2={marginTop: 60, marginBottom: 0, fontSize: 22}

    return(
        <div className='pagination'>
            <Link to='/game'><button style={myStyle}>Start</button></Link>
            <Link to='/lessons'><button style={myStyle}>lessons</button></Link>
        </div>
    )
}

export default Pagination