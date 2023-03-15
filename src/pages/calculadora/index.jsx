
import { useEffect, useState } from "react"
import FormBett from "../../components/bet"
import InputBoxc from "../../components/input";
import { Container } from "./styled"

export default function Calculadora (){
    const [countForms, setCountForms] = useState([{index: 0, FormBett, values: {prob: undefined, aposta: undefined, lucro: undefined}}]);
    const [odds, setOdds] = useState();
    
    const [valorTotal, setValorTotal] = useState(0)
    function handleAddForm() {
        if(countForms.length < 4)
            setCountForms(oldForm => [...oldForm, {index: countForms.length, FormBett, values: {prob: undefined,aposta: undefined, lucro: undefined}}])
    }

		function newStateForms(indexForm, valueAlter) {
			setCountForms(prevState => {
				const newArray = prevState.map((obj, index) => {
					if (index === indexForm) {
						const modifiedNestedObj = {
							...obj.values, 
							...valueAlter 
						};
						return { ...obj, values: modifiedNestedObj };
					}
					return obj; 
				});
				return newArray;
			});

			console.log(countForms)
		}
		
		

		useEffect(() => {
			console.log(countForms.map((obj) => {return obj.values.prob}))
		})


    useEffect(() => {
        console.log(valorTotal)
    }, [valorTotal])

    function removeItem(index) {
        const newItems = [...countForms];
        setCountForms(newItems.filter(item => item.index !== index));
    }

    function calcularSurebet(odds, valorTotalApostado) {
			const somaOdds = odds.reduce((acc, odd) => parseFloat(acc) + parseFloat(odd), 0);
			const fatores = odds.map((odd) => somaOdds / odd);
			const valorApostadoPorResultado = fatores.map((fator) => ((fator / fatores.reduce((acc, fator) => acc + fator, 0)) * valorTotalApostado));
			const valorApostadoTotal = valorApostadoPorResultado.reduce((acc, valor) => acc + valor, 0);
			const lucroPorOdd = odds.map((odd, index) => (valorApostadoPorResultado[index] * odd) - valorApostadoTotal);

		
			countForms.reduce((acc, obj, index) => {
				return acc.then(() => {
					return new Promise((resolve) => {
						newStateForms(index, { aposta: valorApostadoPorResultado[index].toFixed(2), lucro: lucroPorOdd[index].toFixed(2) });
						setTimeout(resolve, 0); // Garante que o estado será atualizado antes de continuar para o próximo objeto
					});
				});
			}, Promise.resolve());
			
			return { lucroPorOdd, valorApostadoPorResultado };
		}
		

		function handleCalculate() {
			calcularSurebet(countForms.map((obj) => {return obj.values.prob}), valorTotal);
		}
		
		
    

    return(
        <Container>
            <div className="box-content">
            {countForms.map((FormBet, index) => <FormBet.FormBett index={index} length={countForms.length} onDeleteItem={removeItem} onChangeForm={newStateForms} values={FormBet.values}/>)}
            <div className="boxActions">
                <InputBoxc label="Digite o valor" index={0} onHandleInput={setValorTotal}/>
                <div className="boxButtons">
                    <button className="AddForm" onClick={() => handleAddForm()}> Adicionar Aposta: </button>
                    <button className="resolve" onClick={() => handleCalculate()}> Calcular </button>
                </div>
            </div>
            </div>
        </Container>
    )
}