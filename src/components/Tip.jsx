import React from 'react'
import useContext from '../hooks/useContext'


export default function Tip() {

        const {setTip} = useContext();
 
return (
    <div className='select-container'>
        <h2 className='labbel'>Select Tip %</h2>
        <div className='btns-container'>
            <button onClick={()=> {setTip(5)}}>5%</button>
            <button onClick={()=> {setTip(10)}}>10%</button>
            <button onClick={()=> {setTip(15)}}>15%</button>
            <button onClick={()=> {setTip(25)}}>25%</button>
            <button onClick={()=> {setTip(50)}}>50%</button>
            <button  >Custom</button>
        </div>
    </div>
  )
}
