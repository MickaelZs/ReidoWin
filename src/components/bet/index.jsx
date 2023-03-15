import { Container } from "./styled"
import Input from "../input"
import { Trash } from "../../assets/images";

export default function FormBet (props){
    const {index} = props;
    return(
        <Container>
           <div class="form">
            <div className="index-trash">
                <span> #0{index + 1}</span>
                {index > 0 && (
                    <img src={Trash}/>
                    )
                }
            </div>
            <div class="input-group">
                <Input label="Probalidade" index={index}/>
                <Input label="Valor da aposta" index={index}/>
                <Input label="Currency" isCurrency index={index}/>
                <Input label="Lucro" isBackground isProfit index={index}/>
            </div>
        </div>
        </Container>
    )
}