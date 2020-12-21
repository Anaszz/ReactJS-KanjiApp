import React, { useState, useEffect } from 'react'

import GameLife from '../gameLife'
import { useSelector, useDispatch } from 'react-redux'
import { CloseCircleOutlined, VerticalRightOutlined } from '@ant-design/icons'
import { decrement } from '../../store/actions'
import { Link } from 'react-router-dom'
import JapKanjiData from '../../store/japKanji'
import japKanjiData from '../../store/japKanji'

const myStyle={marginTop: 40, fontSize: 55}
const myStyle2={marginTop: 5, marginBottom: 0, fontSize: 22}
 
function KanjiGame({ match }){
   const [hide, setHide] = useState(true)
   const [number, setNumber] = useState(0)
   const counter = useSelector(state => state.counter) //on récupère le counter du store 
   const dispatch = useDispatch()

   const wordId = match.params.id
   console.log(wordId)

   const japKanji = JapKanjiData.filter(d => d.family == 'kanji')
   const filtredData = match.params.id ? japKanji.filter(d => d.level == wordId) : null
    console.log(filtredData)

   //const r =  Math.floor(Math.random() * (filtredData.length + 1));  console.log(r)


   //function to pass to next question
   const add = () => {
      if(number < filtredData.length)
       setNumber(number+1)
    }
   
   //unhide response 
   const unhide = () => {
      setHide(!hide)}
    const isTrue = () => {
      setHide(!hide)
      add() }
    const isFalse = () => {
      dispatch(decrement())
      setHide(!hide)
      add()}
      
   return(
        <div>
      { number < filtredData.length && counter > 0  ?   
        <div className='questionGame'>
           <Link to='/game/kanji' className='btnNav' style={{color: 'grey'}}><VerticalRightOutlined /></Link>        
           <GameLife/>
           <h1 style={myStyle}>{filtredData[number].name}</h1>
           { !hide ?
            <div>
             <p style={myStyle2} >{filtredData[number].prononciation}</p>
             <p style={myStyle2} >{filtredData[number].translation}</p>
             <div className='btnGame2'>
                <button onClick={isTrue} style={{height: 50, width: '49%'}}>TRUE</button>
                <button onClick={isFalse} style={{height: 50, width: '49%'}}>FALSE</button>
             </div>
           </div> : <button onClick={unhide} className='btnGame'>Show answer</button>}
           </div> : 
           <div>
            <CloseCircleOutlined />
            <p>GAME OVER</p>
            <a href='/game/kanji'>return to menu</a>
         </div>
           }
        </div>
      
    )
}

export default KanjiGame