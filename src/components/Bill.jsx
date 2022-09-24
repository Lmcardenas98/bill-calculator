import BillInput from "./BillInput"
import Tip from "./Tip"
import useContext from "../hooks/useContext"
import dolar from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'


export default function Bill(){

    const {setNum, setBill} = useContext()


    return (
     <div className="bill-container">
        <div className="bill-imput-container">
            <p className='labbel'>Bill</p>
            <div className="bill-input">
                <img src={dolar} alt="dolar" />
                <input type='Number' onChange={(event)=>setBill(event.target.value)} />
            </div>
        </div>
        <Tip />
        <div className="bill-imput-container">
            <p className='labbel'>Number of Person</p>
            <div className="bill-input">
                <img src={person} alt="dolar" />
                <input type='Number' onChange={(event)=>setNum(event.target.value)} />
            </div>
        </div>
    </div>
    )
}