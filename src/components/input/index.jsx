import { Container } from "./styled"

export default function Input (){
    // let tem = ["Probabilidade","Valor da apostar","Currency","Lucro"];
    return(
        <Container>
           <div class="form">
            <form action="#">

                <div class="input-group">
                  
                    <div class="input-box">
                        <label for="firstname">Probabilidade</label>
                        <input id="firstname" type="number" name="firstname"  required/>
                    </div>

                    <div class="input-box">
                        <label for="lastname">Valor da apostar</label>
                        <input id="lastname" type="number" name="apostar" required/>
                    </div>
                   

                    <div class="input-box">
                        <label for="number">Currency</label>
                        <input type="number"  placeholder="BRL" name="currency" required/>
                    </div>

                    <div class="input-box">
                        <label for="password">Lucro</label>
                        <input id="password"  name="lucro"  required/>
                    </div>



                </div>
                </form>
        </div>
        </Container>
    )
}