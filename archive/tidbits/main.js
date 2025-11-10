function flipCoin () {
    var coin = Math.random()*2;
    coin = coin < 1 ? "Heads" : "Tails";
    document.getElementById("flip").innerHTML =
    '<p class="subtitle has-text-centered">' + coin + '</p>';
    setTimeout(function(){ document.getElementById("flip").innerHTML =
    '<a class="subtitle has-text-centered" onclick="flipCoin()">Flip a coin</a>' }, 1200);
}

function checkBirthday() {
    var d = new Date();
    console.log("You'll have to wait till March. ¯\_(ツ)_/¯")
    if (d.getDate() === 16 && d.getMonth() === 3) {
        document.getElementById("birthday").innerHTML =
        '<p class="subtitle has-text-centered" onclick="checkBirthday()">Yep</p>'
        setTimeout(function(){ document.getElementById("birthday").innerHTML =
        '<a class="subtitle has-text-centered" onclick="checkBirthday()">Is it Sean\'s birthday?</a>' }, 1200);
    }
    else {
        document.getElementById("birthday").innerHTML =
        '<p class="subtitle has-text-centered" onclick="checkBirthday()">Nope</p>'
        setTimeout(function(){ document.getElementById("birthday").innerHTML =
        '<a class="subtitle has-text-centered" onclick="checkBirthday()">Is it Sean\'s birthday?</a>' }, 1200);
    }
}

function toggleVideo() {
    var x = document.getElementById("crane");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    if (document.getElementById("cranetoggle").innerHTML === 'A Crane Flies') {
        document.getElementById("cranetoggle").innerHTML = 'close'
    }
    else {
        document.getElementById("cranetoggle").innerHTML = 'A Crane Flies'
    }
}
