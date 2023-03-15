export function calcularSurebet(odds, valorTotalApostado) {
  const somaOdds = odds.reduce((acc, odd) => acc + odd, 0);
  const fatores = odds.map((odd) => somaOdds / odd);
  const valorApostadoPorResultado = fatores.map((fator) => (fator / fatores.reduce((acc, fator) => acc + fator, 0)) * valorTotalApostado);
  const valorApostadoTotal = valorApostadoPorResultado.reduce((acc, valor) => acc + valor, 0);

  const lucroPorOdd = odds.map((odd, index) => (valorApostadoPorResultado[index] * odd) - valorApostadoTotal);

  return { lucroPorOdd };
}

// const odds = [3.4, 3.9, 2.8];
// const valorTotalApostado = 100;
// const { lucroPorOdd } = calcularSurebet(odds, valorTotalApostado);
// console.log(lucroPorOdd); // retorna [10.163934426229509, 10.18181818181819, 10.166666666666666]