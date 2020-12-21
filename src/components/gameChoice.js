import React from 'react'
import { Link } from 'react-router-dom'
import { VerticalRightOutlined } from '@ant-design/icons'


function GameChoice(){

    return(
        <div>
            <Link to='/' className='btnNav' style={{color: 'grey'}}><VerticalRightOutlined /></Link>
            <Link to='/game/kanji'><button>Kanji game</button></Link>
            <Link to='/game/translate'><button>translate game</button></Link>
        </div>
    )
}

export default GameChoice