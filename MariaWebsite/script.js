

var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var sol = document.getElementById("solana");
var doge = document.getElementById("dogecoin");
var usdt = document.getElementById("tether");
var ada = document.getElementById("cardano");
var trx = document.getElementById("tron");
var link = document.getElementById("chainlink");
var dot = document.getElementById("polkadot");
var ltc = document.getElementById("litecoin");



var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Csolana%2Cdogecoin%2Ctether%2Ccardano%2Ctron%2Cchainlink%2Cpolkadot%2Clitecoin&vs_currencies=usd%2Ccad",
    "method": "GET",
    "headers": {}
}


$.ajax(settings).done(function (response){


  
    btc.innerHTML = response.bitcoin.cad;
    eth.innerHTML = response.ethereum.cad;
    sol.innerHTML = response.solana.cad;
    doge.innerHTML = response.dogecoin.cad;
    usdt.innerHTML = response.tether.cad;
    ada.innerHTML = response.cardano.cad;
    trx.innerHTML = response.tron.cad;
    link.innerHTML = response.chainlink.cad;
    dot.innerHTML = response.polkadot.cad;
    ltc.innerHTML = response.litecoin.cad;
   

} );



  function toggleColor(element) {
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    } else {
        element.classList.add('active');
    }
}


