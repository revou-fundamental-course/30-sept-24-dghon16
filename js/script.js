// function convertCelciusToFahrenheit() {
//   var c = document.getElementById("input-suhu").value;
//   var f = c * (9 / 5) + 32;
//   document.getElementById("hasil-suhu").value = f;
// }
console.log('tersambung');

function validateForm(){
  console.log('Validasi tersambung');
  const inputSuhu = document.getElementById('input-suhu').value;

  if (inputSuhu == ''){
    alert('input anda kosong');
  } else {
    calculate(inputSuhu);
  }
}

function calculate(value){
let result = parseInt(value) * (9/5) +32;
document.getElementById('hasil-suhu').value = result;
document.getElementById('cara-kalkulasi').value = value + ' x (9/5) + 32 = ' + result;
}


function reset() {
  document.getElementById('input-suhu').value = '';
  document.getElementById('hasil-suhu').value = '';
  document.getElementById('cara-kalkulasi').value = '';

}