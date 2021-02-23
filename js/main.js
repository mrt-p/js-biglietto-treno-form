// dichiariamo la nostra variabile bottone
var bottoneGenera = document.getElementById('genera');
console.log(bottoneGenera);

// generiamo un evento al click sul bottoneGenera

bottoneGenera.addEventListener('click',
  function () {
  // al click succederà questo

  // registro il valore dell'input nomecognome
  var nomecognome = document.getElementById('nomecognome').value;
  console.log(nomecognome);

  // registro il numero di km da percorrere
  var km = document.getElementById('km').value;
  console.log(km);

  // registro la fascia d'età del passeggero
  var eta = document.getElementById('eta').value;
  console.log(eta);

  // calcolo il prezzo del BIGLIETTO

  var prezzoKm = 0.21;

  var costoBiglietto = prezzoKm * km;
  console.log('costoBiglietto');

  var offerta = 'Biglietto Standard';
  var euro = '€';

  if (eta == 'minorenne') {
    costoBiglietto = [costoBiglietto - (costoBiglietto * 0.2)] + euro;
    offerta = 'Sconto Minorenne'
  }
  else if (eta == 'over65') {
    costoBiglietto = [costoBiglietto - (costoBiglietto * 0.4)] + euro;
    offerta = 'Sconto Silver'
  }

  // generiamo un numero random per la carrozza e per il codice passeggero
  var numeroCarrozza = Math.floor(Math.random()*10) + 1; //num da 1 a 9
  var codicePasseggero = Math.floor(Math.random() * (100000 - 90000) + 90000);
  // numero codice passeggero

  // stampiamo sul buglietto
  document.getElementById('nome').innerHTML = nomecognome;
  document.getElementById('sconto').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = numeroCarrozza;
  document.getElementById('codice').innerHTML = codicePasseggero;
  document.getElementById('costo').innerHTML = costoBiglietto;

  document.getElementById('biglietto').className = 'creazione_biglietto';
}
)

// bottone Annulla
var bottoneAnnulla = document.getElementById('annulla');

bottoneAnnulla.addEventListener('click',
  function () {
    // far sparire il biglietto
    document.getElementById('biglietto').className = 'hidden';

  // svuotare tutto
  document.getElementById('nomecognome').value = '';
  document.getElementById('km').value = '';
  document.getElementById('eta').value = '';

  document.getElementById('nome').innerHTML = '';
  document.getElementById('sconto').innerHTML = '';
  document.getElementById('carrozza').innerHTML = '';
  document.getElementById('codice').innerHTML = '';
  document.getElementById('costo').innerHTML = '';
}
)
