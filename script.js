function exibirRecomendacao() {
    var residencia = document.querySelector('input[name="residencia"]:checked');
    var medo = document.querySelector('input[name="medo"]:checked');
    var seguranca = document.querySelector('input[name="seguranca"]:checked');
    var frequencia = document.querySelector('input[name="frequencia"]:checked');
    var iluminacao = document.querySelector('input[name="iluminacao"]:checked');

    if (!residencia || !medo || !seguranca || !frequencia || !iluminacao) {
        alert("Por favor, responda a todas as perguntas.");
        return;
    }

    var recomendacao = gerarRecomendacao(residencia.id, medo.id, seguranca.id, frequencia.id, iluminacao.id);

    var recomendacaoContainer = document.getElementById('recomendacao-container');
    recomendacaoContainer.innerHTML = "<p>" + recomendacao.replace(/\n/g, "<br>") + "</p>";

    var btnFinalizar = document.getElementById('btn-finalizar');
    btnFinalizar.style.display = 'none';

    
}
function gerarRecomendacao(residencia, medo, seguranca, frequencia, iluminacao) {
var recomendacao = "Recomendações de segurança:\n\n";

if (residencia === "apartamento" && seguranca === "nao" || residencia === "casa" && seguranca === "sim") {
recomendacao += "- Considere instalar um sistema de segurança, como um alarme ou câmeras de segurança com monitoramente 24 horas.\n";
}

if (medo >= 3) {
recomendacao += "- Se você tem medo de ser assaltado em sua residência, pode ser útil conversar com um profissional de segurança para que ele faça rondas pelas sua casa, e também para discutir suas preocupações e obter conselhos caso resida em apartamento.\n";
} 
if(medo<3){
recomendacao += "- Mesmo que você seja super tranquilo quanto a assalto, melhor ter cuidado. \n"
}

if (frequencia !== "sempre") {
recomendacao += "- Lembre-se de sempre trancar suas portas e janelas quando sair de casa.\n";
} else {
recomendacao +="- Não custa nada voltar e garantir que fechoou, né?\n"
}

if (iluminacao === "nao") {
recomendacao += "- A iluminação externa de segurança, como sensores de movimento, pode ajudar a dissuadir potenciais intrusos.\n";
}

return recomendacao;
}
