
import { useState } from "react";
import Input from "../input";
import { Container } from "./styled";

export default function Card() {

    const [inputs, setInputs] = useState([]);

  const Entrada = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const AddInput = () => {
    const newInputs = [...inputs, ''];
    setInputs(newInputs);
  };


  return (
    <Container>
      <div className="box">
        <div className="card">
        
          <div>
            <h2>#01</h2>
          </div>
          <Input />
          <div>
          {inputs.map((input, index) => (
        <Input
          key={index}
          name={`input-${index}`}
          value={input}
          onChange={(event) => Entrada(index, event)}
         
        /> ))} </div>
          <div className="a">
          <div class="group">
            
              <div class="input">
                <label for="firstname">Digite um valor</label>
                <input  type="number" name="valor" required />  
              </div>

              <div className="botoes">
                <div>
                    <button className="bt-add" onClick={AddInput}>Adicionar aposta:</button>
                </div>

                <div>
                    <button className="bt-cal">Calcular</button>
                </div>
              </div>


              </div>
          </div>
        </div>
      </div>
      <div>
        {/* <button type="button">NOS MANDE UM DIRECT NO INSTAGRAM</button> */}
      </div>
    </Container>
  );
}
