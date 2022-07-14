const peopleCounter = document.getElementById("people");
const speciesCounter = document.getElementById("species");
const planetsCounter = document.getElementById("planets");
const starshipsCounter = document.getElementById("starships");

fillCounters();
fillTable();

function fillCounters() {
  Promise.all([
    swapiGet("people/"),
    swapiGet("species/"),
    swapiGet("planets/"),
    swapiGet("starships/")
  ]).then(function (results) {
    console.log(results);
    peopleCounter.innerHTML = results[0].data.count;
    speciesCounter.innerHTML = results[1].data.count;
    planetsCounter.innerHTML = results[2].data.count;
    starshipsCounter.innerHTML = results[3].data.count;
  });
}

async function fillTable() {
  const response = await swapiGet("films/");
  console.log(response);
}

function swapiGet(param) {
  return axois.get(`https://swapi.dev/api/${param}`);
}
