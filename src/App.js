import Input from './components/Input';
import Button from './components/Button';

import {Container, Content, Row} from './styles';
import {useState} from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleClear = () =>{
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev =>`${prev ==='0' ? '' : prev}${num}`)
  }

  const handleSoma = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String (sum))
      setOperation('')
    }
  }

  const handleSub = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('-')
    }else{
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String (sum))
      setOperation('')
    }
  }

  const handleDiv = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('/')
    }else{
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String (sum))
      setOperation('')
    }
  }

  const handleMult = () =>{
    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber))
      setCurrentNumber('0')
      setOperation('*')
    }else{
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String (sum))
      setOperation('')
    }
  }

  const handleEquals = () =>{
    if(firstNumber !== '0' && currentNumber !== 0 && operation !== ''){
      switch(operation){
        case '+':
          handleSoma()
          break

          case '-':
          handleSub()
          break

          case '/':
          handleDiv()
          break

          case '*':
          handleMult()
          break
        default:
          break
      }
        
    }
  }

  return (
    <Container>
      <Content>
        <Input value ={currentNumber}/>
        <Row>
          <Button label="*" onClick={handleMult}/>
          <Button label="/" onClick={handleDiv}/>
          <Button label="C" onClick={handleClear}/>
          <Button label="."/>
        </Row>
        <Row>
          <Button label="7" onClick={()=>handleAddNumber('7')}/>
          <Button label="8" onClick={()=>handleAddNumber('8')}/>
          <Button label="9" onClick={()=>handleAddNumber('9')}/>
          <Button label="-" onClick={handleSub}/>
        </Row>
        <Row>
          <Button label="4" onClick={()=>handleAddNumber('4')}/>
          <Button label="5" onClick={()=>handleAddNumber('5')}/>
          <Button label="6" onClick={()=>handleAddNumber('6')}/>
          <Button label="+" onClick={handleSoma}/>
        </Row>
        <Row>
          <Button label="1" onClick={()=>handleAddNumber('1')}/>
          <Button label="2" onClick={()=>handleAddNumber('2')}/>
          <Button label="3" onClick={()=>handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );  
}

export default App;
