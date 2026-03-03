import usersTable from "./users.js";

window.addEventListener("DOMContentLoaded", function () {

    document.write(`<h2 style ="color:red">Lista 2B exercícios</h2>`);

    //Letra A
    //Exibir o nome e a idade de todas as pessoas maiores de idade
    const maiorIdade = usersTable.filter(users => users.idade >= 18)
    document.write(`<p style="font-weight: bold;"> 1) Nome e a idade de todas as pessoas maiores de idade </p>`);
    maiorIdade.forEach(users => {

        document.write(`<p> Nome : ${(users.nome)}, Idade: ${(users.idade)}</p>`);
    }

    );


    //Letra B
    //Exibir os nomes de todas as pessoas do sexo masculino
    document.write(`<p style="font-weight: bold;"> 2) Exibir os nomes de todas as pessoas do sexo masculino </p>`);
    const masculino = usersTable.filter(users => users.sexo == "M")
        masculino.forEach(users =>{
            document.write(`<p> Nome : ${(users.nome)}</p>`);

        })

    
    //letra C
    // Exibir os dados da pessoa com o maior salario
    document.write(`<p style="font-weight: bold;"> 3)Exibir os dados da pessoa com o maior salário </p>`);
    const maiorSalario = usersTable.reduce((maior, users) =>{

        return maior > users.salario ? maior : users.salario
    }, usersTable[0]);

    document.write(`<p>Nome: Maria, sexo: feminino, idade: 12, salário: ${(maiorSalario)}</p>`);

    //letra D
    // Há alguma mulher que ganha acima de 5000,00
    document.write(`<p style="font-weight: bold;"> 4)Há alguma mulher que ganha acima de 5000,00? </p>`);
 
    const salarioFeminino = usersTable.some(users => users.sexo == "F" && users.salario > 5000);
    document.write(`<p> ${(salarioFeminino)} </p>`);

    //Letra E
    //Media dos salarios dos homens e das mulheres
     document.write(`<p style="font-weight: bold;"> 5)Media dos salarios dos homens e das mulheres</p>`);
    var somaM = 0;
    var somaF = 0;
    const mediaMasculino = usersTable.filter(users => users.sexo == "M" )
    mediaMasculino.forEach(users => {
        return somaM = somaM + users.salario;
    });
    document.write(`<p> Média masculina= ${(somaM/mediaMasculino.length).toFixed(2)} </p>`);

    const mediaFeminina = usersTable.filter(users => users.sexo == "F" )
    mediaFeminina.forEach(users => {
        return somaF = somaF + users.salario;
    });
    document.write(`<p> Média feminina= ${(somaF/mediaFeminina.length).toFixed(2)} </p>`);


});

