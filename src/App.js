import './App.css';
import { useState, useEffect } from 'react'
import Amount from './components/Amount';
import UserContext from './context/AppContext';
import Bill from './components/Bill';


function App() {

  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [num, setNum] = useState(0)
  const [totalPer, setTotalPer] = useState(0)

  useEffect(()=> {
    setTotalPer(Math.round(bill/num+(bill/num*tip/100)))
  }, [bill, tip, num])

  return (
    <UserContext.Provider value={{
        bill: bill,
        tip: tip,
        num:num,
        totalPer: totalPer,
        setTotalPer: setTotalPer,
        setTip: setTip,
        setNum: setNum,
        setBill: setBill
      }}>
      <div className="app">
        <Bill />
        <Amount /> 
      </div>
    </UserContext.Provider>
  );
}

export default App;
