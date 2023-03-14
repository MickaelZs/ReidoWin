import { Container } from "./styled"

export default function Input (){
    // let tem = ["Probabilidade","Valor da apostar","Currency","Lucro"];
    return(
        <Container>
            <div className="b">
                <div className="a">
                <div>
                    <h2>Probabilidade</h2>
                    <input type="number" />
                </div>

                <div>
                    <h2>Valor da apostar</h2>
                    <input type="number" />
                </div>
                </div>

                <div>
                <div>
                    <h2>Currency</h2>
                    <input  placeholder="BRL" />
                </div>

                <div>
                    <h2>Lucro</h2>
                    <input type="number"/> 
                </div>
                </div>
            </div>
            {/* {tem.map(item=>
            <div className="a">
                <h1>{item}</h1>
                <input type="number" />
            </div>
            )} */}
        </Container>
    )
}