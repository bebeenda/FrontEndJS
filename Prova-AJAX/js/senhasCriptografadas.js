import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

window.addEventListener("DOMContentLoaded", () => {

    const btnVerificar = document.getElementById("btnVerificar");
    btnVerificar.addEventListener("click", validarUsuario);

    async function validarUsuario() {

        const usuario = document.getElementById("cxUsuario").value;
        const senha = document.getElementById("senhaUser").value;

        const url = "https://bebeenda.github.io/FrontEndJS/API/Prova/senhas2.json";

        try {
            const resposta = await fetch(url);

            if (!resposta.ok) {
                throw new Error("Erro na requisição");
            }

            const usuarios = await resposta.json();

            compararSenhas(usuarios, usuario, senha);

        } catch (error) {
            console.log(error.message);
        }
    }

    const compararSenhas = (json, usuario, senha) => {
    var verifica = false;
            json.forEach(item => {
                // comparação com o json onde se encontra as senhas criptografadas
            if (item.username == usuario && bcrypt.compareSync(senha, item.password)) 
            {
                verifica = true;
            }
    });
    // aqui realizo as verificações das senhas
    if (verifica) {
        alert("Senha Válida");
    } else {
        alert("Senha Inválida");
    }
}

    const criptografaSenha = (senhaPlana) => {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(senhaPlana, salt);
        return hash;
    }
});