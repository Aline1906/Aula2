//media de um aluno, no qual se a média for maior ou 7 imprime que foi aprovado. se média maior que 5
//e menor que 7, aluno estará em recuperação e sem media for menor que 5, aluno é reprovado.

let nota1 = 10
let nota2 = 3
let nota3 = 5

let media = (nota1 + nota2 + nota3) / 3

if(media >=7){
    console.log("Aprovado")
} else if(media >=5 <7 ){
    console.log("Recuperação")
} else{
    console.log("Reprovado")
}