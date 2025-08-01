


const key = "675c5b351969f19cb6143d76ab62d947";

function colocarDadosNaTela(dados) {
    document.querySelector(".texto").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + "ºC";
    document.querySelector(".info-clima").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".vento").innerHTML = Math.floor(dados.wind.speed) + "km/h";
    document.querySelector(".img-tempo").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    
    
    
}
async function buscarCidade(cidade) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
  colocarDadosNaTela(dados)

  console.log(dados)
}



const url = `https://api.openweathermap.org/data/2.5/weather?q=São Paulo&appid=${key}&lang=pt_br&units=metric`;

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-pesquisa").value

    buscarCidade(cidade)
    
}

