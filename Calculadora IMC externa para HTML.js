const imc = (peso,altura) => peso / (altura * altura);
const situação = (valor_imc) => {
    if (valor_imc < 18.5) 
        return "quer uma sexta básica ou quer morrer de fome?(Abaixo do peso)";
    else if(valor_imc<25)
        return "parabéns não fez mais que a obrigação(Peso normal)";
    else if(valor_imc<30)
        return "você ta quase imenso, mas ainda da tempo de se salvar(Levemenete acima do peso)";
    else if(valor_imc<35)
        return "você ta Roliço, talvez viva mais que o esperado(Obesidade grau I)";
    else if(valor_imc<40)
        return "você ta sendo condundido com um balão de ar quente, talvez viva mais esse ano(Obesidade grau II)";
    else
        return "você superou o maior planeta do sistema solar, pode se despedir da familia, se tiver uma(Obesidade grau III)";
};
function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Preencha peso e altura corretamente, seu monstro!");
        return;
}
    const valor_imc = imc(peso, altura);
     alert("Seu IMC é: " + valor_imc.toFixed(2) + ": " + situação(valor_imc));
}