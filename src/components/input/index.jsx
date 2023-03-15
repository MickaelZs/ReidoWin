import {Container, Input} from './style.js'
export default function InputBoxc(props) {

  const {label, isBackground, isCurrency, isProfit} = props;
  return (
    <Container> 
      <span> {label} </span>
      <Input 
        type={isCurrency ? 'text' : 'number'} 
        style={{backgroundColor: isBackground ? "#149A00" : '', color: isProfit ? "#FFF" : ''}} 
        disabled={isProfit}
        value={isCurrency && 'BRL'}
      />
    </Container>
  )
}