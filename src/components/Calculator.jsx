import { Display } from "./Display"
import { Keyboard } from "./Keyboard"
import { useState } from "react"
import {calculatorLogic} from '../helpers/logic'


let memory = '';
let lastOperator = '';
let operationFlag = false;


export const Calculator = () => {

  const [input, setInput] = useState('');
  const [displayData, setDisplayData] = useState('')
  
  

  const onInputData = (data) =>{
   
    switch (data) {
      case '+':
          if(!operationFlag){
            memory = parseInt(input);
            lastOperator = '+'
            operationFlag = true
            
          }
          else if(operationFlag){
            if(input == ''){
              memory += 0
              lastOperator = '+'
            }
            else{
              memory =  calculatorLogic(memory, parseInt(input), lastOperator);
              lastOperator = '+';
            }
          
          }
          setInput('');
          setDisplayData(displayData + '+')
      break;

      case '-':
        if(!operationFlag){
          memory = parseInt(input);
          lastOperator = '-'
          operationFlag = true
          
        }
        else if(operationFlag){
          if(input == ''){
            memory -= 0
            lastOperator = '-'
          }
          else{
            memory =  calculatorLogic(memory, parseInt(input), lastOperator);
            lastOperator = '-';
          }
        
        }
        setInput('');
        setDisplayData(displayData + '-')
      break;

      case 'x':
        if(!operationFlag){
          memory = parseInt(input);
          lastOperator = 'x'
          operationFlag = true
          
        }
        else if(operationFlag){
          if(input == ''){
            memory *= 1
            lastOperator = 'x'
          }
          else{
            memory =  calculatorLogic(memory, parseInt(input), lastOperator);
            lastOperator = 'x';
          }
        
        }
        setInput('');
        setDisplayData(displayData + 'x')
      break;

      case '/':
        if(!operationFlag){
          memory = parseInt(input);
          lastOperator = '/'
          operationFlag = true
          
        }
        else if(operationFlag){
          if(input == ''){
            memory /= 1
            lastOperator = '/'
          }
          else{
            memory =  calculatorLogic(memory, parseInt(input), lastOperator);
            lastOperator = '/';
          }
        
        }
        setInput('');
        setDisplayData(displayData + '/')
      break;
      

      case '=':
        memory = calculatorLogic(memory, parseInt(input), lastOperator);
        setDisplayData(memory);
        setInput('');
        
      break;  

      case 'C':
        memory = 0;
        setDisplayData('');
        setInput('');
        
      break;


      default:
        setInput(input + data)
        setDisplayData(displayData + data)
      break;
    }
      
          
      
  }


  return (
    <>
      <div className="calculator-container" >
          <Display displayData ={displayData} />
          <Keyboard onPressButton = {(value) => onInputData(value)}/>
      </div>
    </>
    
  )
}
