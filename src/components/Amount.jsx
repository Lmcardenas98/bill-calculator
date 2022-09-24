
import useContext from "../hooks/useContext";

export default function Amount() {
    
    const {setTotalPer, totalPer} = useContext()
    
    return (
        <div className="amount-container">
            <div className="separatos">
                <div className="tip-amount-container">
                    <div className="amount-text">
                        <h2>Tip Amount</h2>
                        <p>/ person</p>
                    </div>
                    <div className="amount-value">
                        <p>${Math.round(totalPer*0.15)}</p>
                    </div>
                </div>
                <div className="tip-amount-container">
                    <div className="amount-text">
                        <h2>Total Amount</h2>
                        <p>/ person</p>
                    </div>
                    <div className="amount-value">
                        <p>${totalPer}</p>
                    </div>
                </div>
            </div>
            <button className="reset-btn" onClick={()=>setTotalPer(0)}>RESET</button>
        </div>
    );
}
