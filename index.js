function reqListener () {
    var getPrice = document.getElementById("getBitcoinHtml");
    var myObj = this.responseText;
    var json = JSON.parse(myObj);
    var getTime = json.time['updated'];
    var usdPrice = json.bpi.USD['rate'];
    var gbpPrice = json.bpi.GBP['rate'];
    var eurPrice = json.bpi.EUR['rate'];
    getPrice.innerHTML = usdPrice + " USD <br>" + gbpPrice + " GBP <br>" + eurPrice + " EUR" + "<br> Dernière mise à jour: " + getTime;
}

setInterval(function () {
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "https://api.coindesk.com/v1/bpi/currentprice.json", true);
    oReq.send();
}, 60000);
