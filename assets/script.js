function clockUpdate() {
    var data = new Date(); // Obtém a data e hora atual
    var hours = document.getElementById("horas");
    var minutes = document.getElementById("minutos");
    var seconds = document.getElementById("segundos");
  
    var horas = adicionarZero(data.getHours());
    var minutos = adicionarZero(data.getMinutes());
    var segundos = adicionarZero(data.getSeconds());
  
    hours.textContent = horas;
    minutes.textContent = minutos;
    seconds.textContent = segundos;
  }
  
  function adicionarZero(numero) {
    return numero < 10 ? "0" + numero : numero;
  }
  
  // Chama a função clockUpdate a cada segundo
  setInterval(clockUpdate, 1000);
  