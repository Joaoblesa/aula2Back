/**************************************************************************************
 * Objetivo: Criar um app para ao calculo de medidas Escolares
 * Autor: Joao
 * Data: 30/07
 * Versao: 1.0
 **************************************************************************************/
const MESSAGE_ERROR_EMPTY = "ERRO: Não foi possível calcular a média, pois existem campos que não foram preenchidos!"
 const MESSAGE_ERROR_NAN = "ERRO: Não foi possível calcular a média, pois existem caracteres que não são números, as notas devem ser de 0 a 10."
 const MESSAGE_ERROR_OUT_OF_RANGE = "ERRO: Não foi possível calcular a média, pois existem campos que não foram preenchidos incorretamente!"

 //import da bibliteca para calcular as medias escolares
const mediaEscolar = require('./modulo/media.js')

//Import da biblioteca para permitir a entrada de dadospelo terminal
var readline = require('readline')

//Criando Interface de entrada e saída de dados do terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

/**
 * Criando variáveis
 * VAR -> Permite criar um espaço em memória (variável) que pode ser 
 *        alterada na programação. Obs: método antigo de criar variável.
 * LET -> Permite criar um espaço em memória (variável) que pode ser 
 *        alterada na programação. Nascem e morrem dentro de blocos 
 *        Obs: Deve - se utilizar apenas dentro de bloco{} , 
 *        por exemplo: if, loop, function etc...
 * CONST->Permite criar um espaço em memória (variável) que NÃO pode ser 
 *        alterada na programação. A CONST pode ser utilizada em qualquer
 *        parte do código Obs: Boa prática, se possível criar em letras MAIÚSCULAS.
 * 
 * toUpperCase() -> converte a string para MAIÚSCULO.
 * toLowerCase() -> converte a string para MINÚSCULO.
 * 
 * Convesão de tipos de dados:
 * String()   -> converter um objeto ou variável para o tipo de dados String
 * Number     -> Converte uma variávela para número, podendo ser int ou float conforme a necessidade
 * parseInt   -> Converte uma variável para número inteiro
 * parseFloat -> Converte uma variável para número decimal
 * Boolean()  -> Converte uma varável para valor boleano (true/false)
 * Object()   -> Converte uma variável para um objeto (array, json, classe)
 * 
 * Operadores de comparação
 * == Validação da igualdade de conteúdos
 * != Validação da diferença de conteúdos
 * <  Verificar o menor valor de conteúdo
 * >  Verificar o maior valor de conteúdo
 * <= Verificar a igualdade e menor valor de conteúdo
 * >= Verificar a igualdade e menor valor de conteúdo
 * ===Validação para comparar a igualdade de conteúdos e a igualdade de tipos de dados
 * !==Validação para comparar a diferença de conteúdos e a igualdade de tipos de dados
 * !=!Validação para comparar a diferença de conteúdos e a diferença de tipos de dados
 * 
 * Operadores Lógicos
 * E AND &&
 * OU OR ||
 * NÃO NOT !
 * 
 * 
 * */

//Entrada de dados do nome
entradaDeDados.question('Digite o nome do aluno:', function(nome){
    let nomeAluno = String(nome).toUpperCase()

    //Entrada de dados da nota 1
    entradaDeDados.question('Digite a nota 1:', function(valor1){
        let nota1 = valor1

        
        //Entrada de dados da nota 2
        entradaDeDados.question('Digite a nota 2:', function(valor2){
            let nota2 = valor2

            
            //Entrada de dados da nota 3
            entradaDeDados.question('Digite a nota 3:', function(valor3){
                let nota3 = valor3


                //Entrada de dados da nota 4
                entradaDeDados.question('Digite a nota 4:', function(valor4){
                    let nota4 = valor4
                    let media
                    let statusAluno


                    //Validação da entrada vazia
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log(MESSAGE_ERROR_EMPTY)


                   //Validação de valores de 0 até 10
                    }else if(Number(nota1) < 0 || Number(nota1) > 10 || 
                    Number(nota2) < 0 || Number(nota2) > 10 || 
                    Number(nota3) < 0 || Number(nota3) > 10 || 
                    Number(nota4) < 0 || Number(nota4) > 10 ){    
                        console.log(MESSAGE_ERROR_OUT_OF_RANGE)


                    //Validação para bloquear a entrada de letras
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log(MESSAGE_ERROR_NAN)

                    }else{
                            let media = mediaEscolar.calcularMedia(nota1, nota2, nota3, nota4)
                            let statusAluno = mediaEscolar.validarStatusMedia(media)

                            if(statusAluno){
                                console.log(`O aluno ${nomeAluno} teve a média: ${media} e está: ${statusAluno}`)
                            }
                    }

                })//Fecha a nota 4
            })//Fecha a nota 3
        })//Fecha a nota 2
    })//Fecha a nota 1
})//Fecha a entrada do nome