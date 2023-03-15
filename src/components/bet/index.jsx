import { Container } from "./styled"
import Input from "../input"
import { Trash } from "../../assets/images";

export default function InputBoz (props){
    const {index} = props;
    return(
        <Container>
           <div class="form">
            <div className="index-trash">
                <span> #0{index}</span>
                {index > 1 && (
                    <img src={Trash}/>
                )
                }
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