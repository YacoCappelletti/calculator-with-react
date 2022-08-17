



export const NumberButton = ({number, buttonPressed}) => {

  const getCaracter = (event)=>{
  
      buttonPressed(event.target.value)
   
  }

  return (
    <button className="btn number-btn" onClick={getCaracter} value={number}>{number}</button>
  )
}
