import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrement } from '../store/actions';
import { HeartFilled, VerticalRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function GameLife(){

  const counter = useSelector(state => state.counter) //on récupère le counter du store 
  const dispatch = useDispatch()

  const myStyle = [{color: 'red', margin:'0 5px 0 0 ', fontSize: 24}, {color: 'red', margin:'0 5px 0 0 ', fontSize: 24}, {color: 'red', margin:'0 25px 0 0 ', fontSize: 24} ]

  if(counter <3)
        myStyle[2].color = 'grey' 
  if(counter <2)
        myStyle[1].color = 'grey' 
  if(counter <1){
        myStyle[0].color = 'grey'
  }
        
   return(
        <div className='lifeGame'>
          <div style={{display: 'flex'}}>
           <p style={myStyle[0]}><HeartFilled /></p>
           <p style={myStyle[1]}><HeartFilled /></p>
           <p style={myStyle[2]}><HeartFilled /></p>
           </div>
        </div>
    )
}

export default GameLife