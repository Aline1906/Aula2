//para descobrir se uma pessoa é maior ou menor de idade, fazemos uma conta simples. subtraimos o ano atual
//da data do seu nascimento. se maior que 18 anos, você é maior de idade, se menor, você é menor de idade.

let anoNascimento = 2012
let anoAtual = 2021

let suaIdade = anoAtual - anoNascimento

if(suaIdade >18){
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}