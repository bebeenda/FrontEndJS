window.addEventListener("DOMContentLoaded", function() {

document.write(`<p style ="color:red">Lista 2A exercícios</p>`);
document.write(`<p style ="color:red"> Vetor utilizado nos exercícios [10, 25, 30, 40]</p>`);
//Exercício A - soma das idades
//criei os vetores baseado no vídeo

let soma = 0;
var vet = [10, 25, 30, 40]
//declaro a arrow function antes do foreach
//arrow pode ser vazia, mas no caso aqui não
const somar = (elemento) => {
    soma = soma + elemento;
}

vet.forEach(somar);

document.write(`<p>A soma das idades = ${(soma)}</p>`);


//Exercício B - Média aritmética simples das idades
//usarei o reduce para realizar a soma e fazer a média das idades

const sum = vet.reduce((total, elemento) => {
    return total = total + elemento;
}, 0)
const mediaIdade =  sum / vet.length;  

document.write(`<p>A média aritmética das idades = ${(mediaIdade)}</p>`);


//Exercício C - A maior idade
//usarei o reduce para retornar o maior valor, pois na sintaxe, o acumulador irá salvar o primeiro numero do vet e assim por diante, dai comparo quais dos números são maiores ou não
const maiorNumero = vet.reduce((maior, elemento) =>{
    //precisa realizar uma comparação para encontrar o maior número
    return maior > elemento ? maior : elemento
    //se o acumulador for o maior número será retornado ele, se não retornará o elemento

}, vet[0]); //para começar a comparar pelo primeiro elemento do vetor

document.write(`<p>A maior idade = ${(maiorNumero)}</p>`);


//Exercício D - As idades impares
// usarei o filter para encontrar as idades impares
//"cria" vetor novo a partir do filtro colocado, não altera o vetor original
const impares = vet.filter(elemento => elemento % 2 != 0);
document.write(`<p>As idades ímpares = ${(impares)}</p>`);


//Exercício E - Verificação de maior idade
//usarei o every pois a mesma ja retorna true or false

const maiorIdade = vet.every(elemento => elemento >= 18)
document.write(`<p>Verificar se todos são maiores de idade = ${(maiorIdade)}</p>`);


//Exercício F - Verificar se todas as idades são maiores ou iguais a um valor informado
let valor = parseInt(prompt("Informe o número que deseja verificar"));
//faço o prompt para solicitar do usuário, depois comparo com os elementos que já constam no meu vetor e trado o resultado
const verificarMaiorIdade = vet.every(elemento => elemento >= valor)

document.write(`<p>Verificar se todas as idades são maiores ou iguais a um valor informado = ${(verificarMaiorIdade)}</p>`);


//Exercício G- Exibir todas as idades maiores ou iguais a determinada idade
//usarei filter 

const conferirIdades = vet.filter(elemento => elemento >= 20)
document.write(`<p>Exibir todas as idades maiores ou iguais a determinada idade (idade setada 20) = ${(conferirIdades)}</p>`);


//Exercício H - Média das idades de pessoas maiores ou iguais a determinada idade


const mIdades = conferirIdades.reduce((total, elemento) => {
    return total = total + elemento;

}, 0)
const mediaIdades =  mIdades / conferirIdades.length;  

document.write(`<p>A média das idades das pessoas com idades maiores ou iguais a determinada idade (idade setada 20) = ${(mediaIdades.toFixed(2))}</p>`);

})