const copyright = document.getElementById('copyright');
const currentTime = new Date();
const currentYear = currentTime.getFullYear();

copyright.innerHTML = `&copy;${currentYear} Quest Riders. <a href="https://www.etsy.com/shop/QuestRaiders">Visit us on Etsy </a> or try our <a href="walk.html">demo game</a>.`

// Custom alert:

function showCustomAlert() {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');
    document.getElementById('overlay').style.visibility = "visible";
    document.getElementById('customAlert').style.visibility = "visible";
    document.getElementById('alertMessage').innerHTML = `For the moment, we only sell our games on the <b>Etsy</b> platform. This makes the transactions safer for you and for us. <br><br>
    When you press the buy button, you will be redirected to our <b>Etsy</b> page. There, you will find the links for the download after making the purchase. <br><br>If you don't have an <b>Etsy</b> account, you will get an e-mail with the receipt and the download link; if you have an account, you'll see a link named <i>“View your files” </i>taking you straight to the <b>Downloads Page</b>.`
    }

function closeAlert() {
    document.getElementById('customAlert').style.visibility = "hidden";
    document.getElementById('overlay').style.visibility = "hidden";
}
