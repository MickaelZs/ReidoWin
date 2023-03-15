import {Container, Input} from './style.js'
export default function InputBoxc(props) {

  const {label, isBackground, isCurrency, isProfit, index} = props;

  function limitDecimalPlaces(e, count) {
    if (e.target.value.indexOf('.') == -1) { return; }
    if ((e.target.value.length - e.target.value.indexOf('.')) > count) {
      e.target.value = parseFloat(e.target.value).toFixed(count);
    }
  }
  
  return (
    <Container> 
      <span> {index <= 0 && label} </span>
      <Input 
        type={isCurrency ? 'text' : 'number'} 
        style={{backgroundColor: isBackground && "#149A00", color: isProfit ? "#FFF" : isCurrency && "#149A00", fontWeight: isCurrency && 800}} 
        disabled={isProfit || isCurrency}
        value={isCurrency && 'BRL$'}
        step="0.01"
        min="0"
        onInput={e => limitDecimalPlaces(e, 2)}
      />
    </Container>
  )
}