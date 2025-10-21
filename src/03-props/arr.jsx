import React from 'react'
import Project from './project';

const App1 = () => {
    const arr=[10,20,30,40];

  return (
    <div className='parent'>
        {arr.map(function(elem){
            //return  <h1> {elem}</h1>
           return <Project/>
        })}
    </div>
  )
  }


export default App1;