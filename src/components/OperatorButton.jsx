

export const OperatorButton = ({caracter, buttonPressed}) => {
  const getCaracter = (event)=>{
    buttonPressed(event.target.value)
}

  return (
    <button className="btn operator-btn" value = {caracter} onClick = {getCaracter}>{caracter}</button>
  )
}
