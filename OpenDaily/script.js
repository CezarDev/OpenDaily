document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#botao').addEventListener('click', function () {
        event.preventDefault();
        verificaCampos();
    })
})

function verificaCampos(){
    let horario = document.getElementById("hora").value;
    let link = document.getElementById("link").value;

    if (horario && link) trataHorario(horario, link);
    else exibeMensagemAlerta();
}

function trataHorario(horario, link) {
    try {
        let horaReuniao   = parseInt(horario.substring(0,2));
        let minutoReuniao = parseInt(horario.substring(3,5));

        let data = new Date()
        horaReuniao -= data.getHours();
        minutoReuniao -= data.getMinutes();

        minutoReuniao += (horaReuniao * 60);
        let milissegundos = minutoReuniao * 60000;
        milissegundos -= data.getSeconds() * 1000;

        exibeMensagemDeSucesso(horaReuniao,minutoReuniao);
        agendaReuniao(milissegundos, link);
    }
    catch (error) {
        console.log(error.message);
    }


    //document.querySelector('.U26fgb').click() audio
    // document.querySelector('.uArJ5e').click() entrar na sala
    //return window.open(url, '_blank');
}

function agendaReuniao(intervalo, link){
    setTimeout(function () {
        window.open(link, '_self');
    }, intervalo);
}

function abreLink(link){
   // let link = document.getElementById("link").value;
    //alert("Chegou a hora ");
     //return window.open(link, '_self');
}

function exibeMensagemDeSucesso(horaReuniao, minutoReuniao){
    alert("Reunião agendada com sucesso! " +
        "\nFaltam " + horaReuniao +":" + minutoReuniao + " Para sua Reunião");
}

function exibeMensagemAlerta(){
    alert("Preencha os campos corretamente ! ");
}

function reproduzLembrete() {
    let lembrete = new Audio('audio/lembrete.mp3');
    lembrete.play();
}