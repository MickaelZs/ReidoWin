
import FormBet from "../../components/bet"
import { Container } from "./styled"

export default function Calculadora (){
    return(
        <Container>
            <div className="box-content">
            <FormBet index={0}/>
            <FormBet index={1}/>
            <FormBet index={2}/>
            </div>
        </Container>

    )
}