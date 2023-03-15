import { Container } from "./styled"
import Input from "../input"

export default function InputBoz (props){
    const {index} = props;
    return(
        <Container>
           <div class="form">
            <div className="index-trash">
                <span> #0{index}</span>
                <img src="../../../assets/images/trash.svg"/>
            </div>
            <div class="input-group">
                <Input label="Probalidade"/>
                <Input label="Valor da aposta"/>
                <Input label="Currency" isCurrency/>
                <Input label="Lucro" isBackground isProfit/>
            </div>
        </div>
        </Container>
    )
}