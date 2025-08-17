function somar(){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    document.getElementById("resultado_ex1").innerText = "Resultado: " + (numero1 + numero2);
}

function verificar_idade(){
    let idade = Number(document.getElementById("idade").value);
    if (idade >= 18){
        document.getElementById("resultado_ex2").innerText = "Maior de idade";
    }
    else{
        document.getElementById("resultado_ex2").innerText = "Menor de idade";
    } 
}

function contar_caracteres() {
    let texto = document.getElementById("texto").value;
    document.getElementById("resultado_ex3").innerText = "O texto tem: " + texto.length + " caracteres.";
}

function conferir_parImpar() {
    let numero = Number(document.getElementById("numero4").value);
    if (numero % 2 == 0) {
        document.getElementById("resultado_ex4").innerText = "O número é par";
    }
    else {
        document.getElementById("resultado_ex4").innerText = "O número é impar";
    }
}

function deixar_maiusculo() {
    let texto = document.getElementById("texto5").value;
    document.getElementById("resultado_ex5").innerText = texto.toUpperCase();
}

function comparar_maiorMenor() {
    let numero1 = Number(document.getElementById("numero5").value);
    let numero2 = Number(document.getElementById("numero6").value);
    if (numero1 > numero2) {
        document.getElementById("resultado6").innerText = numero1 + " é o maior."
    }
    else if (numero2 > numero1) {
        document.getElementById("resultado6").innerText = numero2 + " é o maior.";
    }
    else {
        document.getElementById("resultado6").innerText = "Os dois números são iguais";
    }
}

function gerar_tabuada() {
    let numero = Number(document.getElementById("numero7").value);
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
      resultado += numero + " x " + i + " = " + (i * numero) + "<br>";
    }
    document.getElementById("resultado_ex7").innerHTML = resultado;
}

function contador() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + "<br/>";
    }
    document.getElementById("resultado_ex8").innerHTML = resultado;
}

function calcular_media() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("nota2").value);
    let nota3 = Number(document.getElementById("nota3").value);
    let media = (nota1 + nota2+ nota3) / 3;
    if (media >= 6) {
        document.getElementById("resultado_ex9").innerText = "Você foi aprovado com a media: " + media.toFixed(2);
    }
    else {
        document.getElementById("resultado_ex9").innerText = "Você foi reprovado com a media: " + media.toFixed(2);
    }
}

function conversor_temperatura() {
    let temperatura = Number(document.getElementById("temperatura").value)
    let resposta = ((temperatura * 9/5) + 32);
    document.getElementById("resultado_ex10").innerText = resposta;
}

function dizer_diaSemana() {
    let numero = Number(document.getElementById("numero11").value);
    if (numero == 1) {
        document.getElementById("resultado_ex11").innerText = "Domingo."
    }
    else if (numero == 2) {
        document.getElementById("resultado_ex11").innerText = "Segunda-Feira."
    }
    else if (numero == 3) {
        document.getElementById("resultado_ex11").innerText = "Terça-Feira."
    }
    else if (numero == 4) {
        document.getElementById("resultado_ex11").innerText = "Quarta-Feira."
    }
    else if (numero == 5) {
        document.getElementById("resultado_ex11").innerText = "Quinta-Feira."
    }
    else if (numero == 6) {
        document.getElementById("resultado_ex11").innerText = "Sexta-Feira."
    }
    else if (numero == 7) {
        document.getElementById("resultado_ex11").innerText = "Sabado."
    }
    else {
        document.getElementById("resultado_ex11").innerText = "Número inválido."
    }
}

function conferir_senha() {
    let senha = Number(document.getElementById("senha").value)
    if (senha == 1234) {
        document.getElementById("resultado_ex12").innerText = "Acesso permitido!"
    }
    else {
        document.getElementById("resultado_ex12").innerText = "Senha incorreta."
    }
}

function contagem_regressiva() {
    let resultado = "";
    for (let i = 10; i >= 1; i--) {
        resultado += i + " ";
    }
    document.getElementById("resultado_ex13").innerHTML = resultado;
}