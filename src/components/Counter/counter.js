import { useState } from "react"

function Counter(){
    const [initialValue,setValue] = useState(1)
    const Add = ()=>{
        setValue(initialValue+1)
    }
    const Minus = ()=>{
        setValue(initialValue-1)
    }
    // styling
    const buttonStyle = {
        padding: "10px 20px",
        margin: "10px",
        fontSize: "16px",
        backgroundColor: "#f44336",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      };
    
      const valueStyle = {
        padding: "10px 20px",
        fontSize: "20px",
        border: "2px solid #ccc",
        borderRadius: "5px",
        margin: "10px",
        width: "50px",
        textAlign: "center",
        backgroundColor:'#e7e7e7'
      };
    return(
        <div>
        <button style={buttonStyle} onClick={Add}>Plus</button>
        <span style={valueStyle}>{initialValue}</span>
        <button style={buttonStyle} onClick={Minus}>Minus</button>
        </div>
    )
}
export default Counter