const CREDENCIAIS_PROFESSOR = {
    email : "prof@gmail.com",
    senha : "12345678"
}

const CREDENCIAIS_ALUNO = {
    email : "ana@gmail.com",
    senha : "12345678"
}

document.getElementById("loginForm").addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    const erro = document.getElementById("erro")

    if (email === CREDENCIAIS_PROFESSOR.email && senha === CREDENCIAIS_PROFESSOR.senha){
        window.location.href = "../sistema/pages/professor.html"
    } else if (email === CREDENCIAIS_ALUNO.email && senha === CREDENCIAIS_ALUNO.senha) {
        window.location.href = "../sistema/pages/aluno.html"
    } else {
        erro.style.display = "block";
    }
});