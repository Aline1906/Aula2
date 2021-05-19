//Solicite o preço de uma mercadoria e o percentual de desconto de 20%. 
// Exiba no console o valor do desconto e o preço a pagar.

let precoMercadoria = 150  // minha entrada
const desconto = precoMercadoria * (20/100)   // meu valor de desconto. optei por usar uma constante por entender que um desconto não é variável.

let valorDeVenda = precoMercadoria - desconto // a conta, de fato

console.log(valorDeVenda , desconto) // o que será impresso após o processamento

