const dolar_today = 4.82;

$.getJSON("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL",function(data){
  $('.box1 p#cotacao').html('D\u00f3lar hoje: R$'+data.USDBRL.high+'');
  dolar_today = parseFloat(data.USDBRL.high).innerHTML;
}); 


function calculateTotal(){
  var dolar_a = document.getElementById('dolar_amount').value;
  var total_reais = 0;
  var total_reais = dolar_today * dolar_a;
  console.log(dolar_today);
  $(".box1 p#real").html(' R$ '+total_reais.toFixed(2));
};
