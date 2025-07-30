/**************************************************************************************
 * Objetivo: Criar um app para ao calculo de medidas Escolares
 * Autor: Joao
 * Data: 30/07
 * Versao: 1.0
 **************************************************************************************/
//Import da biblioteca para permitir a entrada de dados pelo terminal
var readline = require('readline')

//Criando uma interface de entrada e saida de dados no terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*
 * Criando Variaveis
 * VAR -> Permite criar um espaço em memoria (Variavel) que pode ser alterada
 *              na programaçao. Obs: Metodo antigo de criar variaveis
 * 
 * LET ->Permite criar um espaço em memoria (Variavel) que pode ser alterada
 *                na programaçao. Essas Variaveis "Morrem" ao termino do bloco
 *                Obs: Deve-Se utilizar apenas dentro de bloco { },
 *                Por exemplo. IF, Function, Loop, etc
 * 
 * CONST -> Permite criar um espaço em memoria (constante) que nao pode ser alterada na programaçao.
 *                A CONST pode ser utilizada em qualquer parte do codigo. 
 *                Obs: E uma boa preatica se possivel usar letras MAIUSCULAS
 * 
 * toUpperCase() -> converte a string para MAISCULO
 * toLowerCase() -> converte a string para minusculo
 * 
 * Conversão de tipos de Dados
 * String()     -> converte um objeto ou variavel para o tipo de dados String
 * Number()     -> converte uma variavel para numero, podendoser int ou flout conforme necessidade
 * parseInt()   -> converte uma variavel para numero inteiro
 * parseFloat() -> converte uma variavel para numero decimal
 * Boolean()    -> converte uma variavel para valor boleano (true/falsea)
 * Object()     -> converte uma variavel para um objeto (array, jeon, classe)
 * 
 * Operadores de Comperaçao
 *  == Validaçao para comparar a igualdade de conteudos
 *  != Validaçao para comparar a diferença entre conteudos
 *  < validaçao para verificar o menor valor
 *  > Validaçao para verificar o maior valor
 *  <= Validaçao para verificar a igualdade e o menor valor
 *  >= Validaçao para verificar a igualdade e o maior valor
 *  === Validaçao para comparar a igualdade de conteudos e a igualdade de tipos de dados
 *  !==  Validaçao para comparar a diferença de conteudos e a igualdade de tipos de dados
 *  !=! Validaçao para comparar a diferença de conteudos e a diferença de tipos de dados
 * 
 *  Operadores Logicos
 *  E   And  &&
 *  OU  OR   ||
 *  NAO NOT  |
 */

//Entrada de dados do Nome
entradaDeDados.question('Digite o nome do aluno: ', function(nome){

    let nomeAluno = String(nome).toUpperCase()

    //entrada de dados da nota1
    entradaDeDados.question('Digite a nota 1: ', function(valor1){
        let nota1 = valor1

        //entrada de dados da nota2
        entradaDeDados.question('Digite a nota 2: ', function(valor2) {
            let nota2 = valor2

            //entrada de dados da nota3
            entradaDeDados.question('Digite a nota 3: ', function(valor3) {
                let nota3 = valor3

                //entrada de dados da nota4
                entradaDeDados.question('Digite a nota 4: ', function(valor4) {
                    let nota4 = valor4

                        if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                            console.log("ERRO: Nao foi possivel calcular a media, pois existem campos que nao foram preenchidos")
                        }else if(nota1 < 0 || nota1 >10 && nota2 < 0 || nota2 > 10 && nota3 < 0 || nota3 > 10 && nota4 < 0 || nota4 > 10){
                            console.log('ERRO: Nao e possivel receber valores menores que 0 ou valores maiores que 10S')
                        }else{
                            let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) /4
                            let statusAluno


                            if(media < 5){
                                statusAluno = 'REPROVADO'
                            }else if(media >= 5 && media < 7){
                                statusAluno = 'EXAME'
                            }else if(media >=7 && media <=10){
                                statusAluno = 'APROVADO'
                            }

                          console.log(`o aluno ${nomeAluno} teve a media ${media.toFixed(1)} e esta ${statusAluno}`)
                        }

                })//Fecha a entrada da nota4
            })//Fecha a entrada da nota3
        })//Fecha a entrada da Nota2
    })//Fecha a entrada da Nota1
})//Fecha a entrada do Nome