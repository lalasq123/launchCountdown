const tempo = () =>{
    const dataCompleta = new Date("nov, 20 2022 00:00:00").getTime(); /*meu aniversario*/
    const hoje = new Date().getTime(); /*data de hoje*/
    
  
    const diferenca = dataCompleta - hoje;

    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    let diaTempo = Math.floor(diferenca / dias);
    let horaTempo = Math.floor((diferenca % dias) / horas);
    let minutoTempo = Math.floor((diferenca % horas) / minutos);
    let segundoTempo = Math.floor((diferenca % minutos) / segundos);
    
     horaTempo = horaTempo < 10 ? "0" + horaTempo : horaTempo;
     minutoTempo = minutoTempo < 10 ? "0" + minutoTempo : minutoTempo;
     segundoTempo = segundoTempo < 10 ? "0" + segundoTempo : segundoTempo;

     
    document.getElementById("dias").innerHTML = diaTempo;
    document.getElementById("horas").innerHTML = horaTempo;
    document.getElementById("minutos").innerHTML = minutoTempo;
    document.getElementById("segundos").innerHTML = segundoTempo;
  }

setInterval(tempo, 1000);