import React from 'react'
import useContext from '../hooks/useContext'

export default function BillInput(props) {

    const {setBill} = useContext()

  return (
    <div className="bill-imput-container">
        <p className='labbel'>{props.name}</p>
        <div className="bill-input">
            <img src={props.image} alt="dolar" />
            <input type='Number' onChange={(event)=>setBill(event.target.value)} />
        </div>
    </div>
  )
}
