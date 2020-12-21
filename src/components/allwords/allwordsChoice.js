import React from 'react'
import { Link } from 'react-router-dom'
import { VerticalRightOutlined } from '@ant-design/icons'
import JapKanjiData from '../../store/japKanji'

function AllwordChoice(){
  
  const myStyle={marginTop: 50}
  const myStyle2={marginTop: 60, marginBottom: 0, fontSize: 22}

   const JapData =  JapKanjiData

   //lvl récup l'index max de la bdd
   const lvl = JapData[JapData.length - 1].level 
   //slice va soustraire la table de base avec celle filtré avec la valeur de lvl pour donner un array de 'lvl' valeur
   const slice =  JapData.slice(JapData.length - lvl)

  return(
      <div className='pagination'>
        <Link to='/game/translate' className='btnNav' style={{color: 'grey'}}><VerticalRightOutlined /></Link>
        { slice.map( (data, index) => (
              <Link key={index} to={`/game/translate/${index+1}`}><button style={myStyle}>Lesson {index + 1}</button></Link>
        ))}
      </div>
    )
}

export default AllwordChoice