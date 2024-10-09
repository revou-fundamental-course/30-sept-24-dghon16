function convertCelciusToFahrenheit() {
  var c = document.getElementById("input-suhu").value;
  var f = c * (9 / 5) + 32;
  document.getElementById("hasil-suhu").value = f;
}
