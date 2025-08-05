/**************************************************************************
 * Objetivo: Arquivo responsavel por calcular e validar medias escoares
 * Autor: Joao
 * Data:05/08/2025
 * Versao: 1.0
 *************************************************************************/

//Funçao para calcular media escolar
function calcularMedia (valor1, valor2, valor3, valor4) {
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    let media = (nota1 + nota2 + nota3 + nota4) / 4

    return Number(media).toFixed(1)

}

//funçao para retornar o status da media escolar (APROVADO, EXAME, REPROVADO)
function validarStatusMedia (valorMedia) {
    let media = Number(valorMedia)

    let statusAluno

    if(media < 5 && media >= 0){
        statusAluno = 'REPROVADO'
    }else if(media >= 5 && media < 7){
        statusAluno = 'EXAME'
    }else if(media <=10){
        statusAluno = 'APROVADO'
    }

    if(statusAluno != undefined){
        return statusAluno
    } else{
        return false
    }


}

//console.log(validarStatusMedia('11'))

//let mediaAluno = calcularMedia('8', '10', '9.6', '8.9')
//console.log(mediaAluno)
//console.log(validarStatusMedia(mediaAluno))

//permite tornar public uma funçao, variavel, constante, objeto
module.exports = {
    calcularMedia,
    validarStatusMedia
}