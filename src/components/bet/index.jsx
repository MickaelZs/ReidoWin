import { Container } from "./styled"
import Input from "../input"
import { Trash } from "../../assets/images";
import { useEffect, useState } from "react";

export default function FormBet (props){
    const {length, index, onDeleteItem, values, onChangeForm} = props;

    const [probabilidade, setProbabilidade ] = useState();
    const [aposta, setAposta ] = useState();
    const [currency, setCurrency ] = useState();
    const [lucro, setLucro ] = useState();


    useEffect(() => {
        console.log(probabilidade)
        console.log(aposta)
        console.log(currency)
        console.log(lucro)
        
    
    }, [probabilidade, aposta, currency, lucro])

    function onChanceFormHandle(setFunc, value, valuesObj) {
        setFunc(value)
        onChangeForm(index, valuesObj)
    }
    return( 
        <Container>
           <div class="form">
            <div className="index-trash">
                <span> #0{index + 1}</span>
                {index === length - 1 && length !== 1 &&(
                    
                    <img src={Trash} alt="" onClick={() => onDeleteItem(index)}/>
                    )
                }
            </div>
            <div class="input-group">
                <Input label="Probalidade" index={index} onHandleInput={(value) => onChanceFormHandle(setProbabilidade, value, {prob: value})}/>
                <Input label="Valor da aposta" index={index} onHandleInput={(value) => onChanceFormHandle(setAposta, value, {aposta: value})} value={values?.aposta}/>
                <Input label="Currency" isCurrency index={index} onHandleInput={(value) => setCurrency(value)} value={values?.currency}/>
                <Input label="Lucro" isBackground isProfit index={index} onHandleInput={(value) => onChanceFormHandle(setLucro, value, {lucro: value})} value={values?.lucro}/>
            </div>
        </div>
        </Container>
    )
}