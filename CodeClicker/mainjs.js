


var clickMeButton; // Botó per clicar
var clicks = 0; // Clics actuals
var multiplicador = 1;
var linesWritten;
var navbar;
var footer;
var menuestructuras;
var menuupgrades;
var arrayBuildings = [];
var arrayUpgrades = [];
var arrayBoughtUpgrades = [];
var lletraClickada;
var newCommand = [];
var newCommandString;
var commandLine;
//var username = "Gordinxi"; // userCredentials.user.email
var username = localStorage.getItem("username");; // userCredentials.user.email
var route = `PS C:\\Users\\${username}\\CodeClicker> `;
var newMessage;
var gamemenu;
var leaderboardmenu;
var mostrarPantallaClics;
var leaderboard;
var arrayTopPlayers = [];
var codeConsole;
var bugTimer = 180000; // 300000 = 5min //180000 = 3min/////////// 5000
var bugKillCount = 0;
var freezeClicks = [];
var codePerSecond = 0;
var tabChangeSound = new Audio("assets/audio/tabchange.mp3");
var debuggerEfect;
window.addEventListener("load", onLoad);


function onLoad() {
    //username = localStorage.getItem("username");
    

    showGame();
    navbar = document.getElementById("navbar");
    footer = document.getElementById("footer");
    menuestructuras = document.getElementById("menuestructuras");
    menuupgrades = document.getElementById("menuupgrades");
    clickMeButton = document.getElementById("clickme");
    clickMeButton.addEventListener("click", clicking);
    linesWritten = document.getElementById("lineswritten");

    leaderboardmenu = document.getElementById("leaderboardmenu");
    leaderboardmenu.addEventListener("click", showLeaderboard);

    gamemenu = document.getElementById("gamemenu");
    gamemenu.addEventListener("click", showGame);
    codeConsole = document.getElementById("innerconsole");

    leaderboard = document.getElementById("leaderboard");
    console.log("clicks:" + clicks);

    if (isNaN(clicks = parseInt(localStorage.getItem("codelines")))) {
        clicks = 0;
      
    } else {
        clicks = parseInt(localStorage.getItem("codelines"));
    }

    if (isNaN(multiplicador = parseInt(localStorage.getItem("multiplicadorClick")))) {
        multiplicador = 1;
      
    } else {
        multiplicador = parseInt(localStorage.getItem("multiplicadorClick"));
    }

    if (isNaN(debuggerEfect = parseInt(localStorage.getItem("debuggerEfect")))) {
        debuggerEfect = 5;
      
    } else {
        debuggerEfect = parseInt(localStorage.getItem("debuggerEfect"));
    }

    




    if (isNaN( bugKillCount = parseInt(localStorage.getItem("bugKillCount")))) {
        bugKillCount = 0;
    } else {
        bugKillCount = parseInt(localStorage.getItem("bugKillCount"));
    }
 arrayBoughtUpgrades = JSON.parse(localStorage.getItem("arrayBoughtUpgrades"));
    if (!arrayBoughtUpgrades) {
        // Si no hay un array almacenado, crear uno nuevo
        arrayBoughtUpgrades = [];
      }
  
   
    

    //arrayBoughtUpgrades =  JSON.parse(localStorage.getItem(arrayBoughtUpgrades));
    console.log("PARSEAO; " + arrayBoughtUpgrades);
   // localStorage.setItem("arrayBoughtUpgrades",JSON.stringify(arrayBoughtUpgrades));

   // building = JSON.parse(localStorage.getItem(`${building.name}`));
    updateClick();

    updateUpgrades();
    updateBuildings();
    observarClicks();

    openConsole();


    setInterval(() => {

        freezeClicks = [];

        /*****************BUG*******************/

        var bug = document.createElement("img");
        bug.src = "assets/bug/bug.png";
        bug.classList.add("bug");
        bug.id = "bug";
        console.log(window.innerWidth);
        var randomX = Math.random() * ((window.innerWidth - 50) - bug.offsetWidth);
        var randomY = Math.random() * ((window.innerHeight - 50) - bug.offsetHeight);


        bug.style.left = randomX + 'px';
        bug.style.top = randomY + 'px';

        var randomRotation = Math.random() * 360;
        bug.style.transform = 'rotate(' + randomRotation + 'deg)';


        document.body.appendChild(bug);
        freezeClicks.push(clicks);
        bug.addEventListener("click", function () {

            /*****************BUG DEATH SOUND*******************/

            var deathSound = new Audio("assets/audio/death.mp3");
            deathSound.volume = 0.1;
            deathSound.play();
            bug.remove();
            bugKillCount++;
            localStorage.setItem("bugKillCount", bugKillCount);
            console.log("BUUUG" + localStorage.getItem("bugKillCount"));
            /*****************BUG BLOOD SPLASH*******************/

            var bloodSplash = document.createElement("img");

            var numeroAleatorioS = Math.floor(Math.random() * 3) + 1;
            bloodSplash.src = `assets/bug/blood${numeroAleatorioS}.png`;
            bloodSplash.classList.add("bug");
            bloodSplash.classList.add("splash");
            bloodSplash.style.left = randomX + 'px';
            bloodSplash.style.top = randomY + 'px';
            bloodSplash.style.transform = 'rotate(' + randomRotation + 'deg)';



            document.body.appendChild(bloodSplash);

            $(".splash").fadeOut(1000);


            var gainsBug = document.createElement("div");
            gainsBug.className = "badge";
            gainsBug.innerText = "+" + multiplicador;

            gainsBug.style.left = randomX + "px";
            gainsBug.style.top = randomY + "px";

            var numeroAleatorio = Math.floor(Math.random() * 6) + 1;

            /**************** GANANCIAS O PERDIDAS *******************/
            if (numeroAleatorio < debuggerEfect) {

                clicks = Math.floor(clicks / 2);
                gainsBug.innerText = "-" + clicks;
                gainsBug.style.color = "red";
               localStorage.setItem("codelines", clicks);
            } else {

                clicks = clicks * 2;
                gainsBug.innerText = "+" + (clicks / 2);
                gainsBug.style.color = "#8AE22B";
                localStorage.setItem("codelines", clicks);
            }

            document.body.appendChild(gainsBug);

            /*****************ELIMINAR IMG*******************/
            setInterval(() => {
                bloodSplash.remove();
                gainsBug.remove();
            }, 2000);

        });



    }, bugTimer); // Temps


}

function updateClick() {

    if (!document.getElementById("bug")) {
        //afegir
        linesWritten.innerHTML = formatNumber(clicks);
        var setEmail = localStorage.getItem("email");









    } else {
        clicks = freezeClicks[0];
        linesWritten.innerHTML = formatNumber(clicks);


    }
}



function observarClicks() {
    var anteriorValueClicks = clicks;

    setInterval(function () {
        if (clicks !== anteriorValueClicks) {
            anteriorValueClicks = clicks;
            arrayBuildings.forEach(building => {

                if (clicks >= building.price) {
                    addStylesBuildingBuyAble(building);
                } else {

                    addStylesBuildingNotBuyAble(building);
                }

            });

            arrayUpgrades.forEach(upgrade => {

                if (clicks >= upgrade.price) {
                    addStylesUpgradeBuyAble(upgrade);
                } else {
                    addStylesUpgradeNotBuyAble(upgrade);
                }
            });

            updateUpgrades();
            updateBuildings();
            updateClick();
        }
    }, 100);
}




function clicking() {

    /****************CLICKS***********************/
    clicks = (clicks + multiplicador);

    localStorage.setItem("codelines", clicks);




    //console.log(clicks);
    var mostrarPantallaClics = document.createElement("div");
    mostrarPantallaClics.className = "badge";
    mostrarPantallaClics.innerText = "+" + multiplicador;
    var buttonRect = clickMeButton.getBoundingClientRect();

    var badgeSize = 30; // Tamaño del badge
    var badgeX = Math.random() * (buttonRect.width - badgeSize);
    var badgeY = Math.random() * (buttonRect.height - badgeSize);

    mostrarPantallaClics.style.left = badgeX + "px";
    mostrarPantallaClics.style.top = badgeY + "px";



    clickMeButton.appendChild(mostrarPantallaClics);
    clickMeButton.classList.add('clicked');

    setTimeout(function () {
        clickMeButton.classList.remove('clicked');
    }, 100);

    // Eliminar elements perquè no es quedin a la pàgina
    setTimeout(function () {
        mostrarPantallaClics.remove();
    }, 3000);

    var random = Math.floor(Math.random() * 3) + 1;
    var audio = new Audio(`assets/audio/keyboard${random}.mp3`);
    if (random == 1) {
        audio.volume = 0.3;
    } else {
        audio.volume = 0.1;
    }
    audio.play();

}






/**********CONSOLE**************/

window.addEventListener(
    "keydown",
    function (e) {
        keyCode = e.keyCode;
        //console.log(keyCode);
        if ((keyCode > 46 && keyCode < 91 || keyCode > 183 || keyCode == 32)) {
            //  (keyCode >= 65 && keyCode <= 90) || keyCode == 8 || keyCode == 13 || keyCode == 191) {
            lletraClickada = e.key;
            lletraClickada.toLowerCase();

            //console.log("lletraClickada: " + lletraClickada);

            newCommand.push(lletraClickada);

        }

        if (keyCode == 8) {

            newCommand.pop();
        }

        newCommandString = newCommand.toString().replace(/,/g, '');

        //console.log(newCommandString);

        writeCommand(newCommandString);

    },
    false
);
function openConsole() {
    //commandLine = document.getElementById("command");
    var route = `PS C:\\Users\\${username}\\CodeClicker> `;
    newCommand = [];
    newMessage = document.createElement("p");
    newMessage.classList.add("command");
    newMessage.innerHTML = route;
    codeConsole.appendChild(newMessage);


}

function writeCommand(newCommandString) {

    newMessage.innerHTML = route + newCommandString;

    if (keyCode == 13) {
        showConsoleMessage(newCommandString.toLowerCase());
    }

}
function showConsoleMessage(newCommandString) {

    var response = document.createElement("div");
    
        commandConsole(response, newCommandString);
       
    codeConsole.appendChild(response);

    openConsole();

}

function showGame() {
    tabChangeSound.play();
    $(".menuestructuras").show();
    $(".explorer").show();
    $(".userworkspace").show();
    $(".container").show();
    $(".menuupgrades").show();
    $(".console").show();
    $(".explorer").show();
    $(".videocontainer").show();
    $(".leaderboard").hide();
    $("#sectionname").text(`${username}'s Workspace`);
    $(".gameicon").css("background-image", "url(assets/icons/game2.png)");
    $(".leaderboardmenuicon").css("background-image", "url(assets/icons/leaderboard1.png)");

}

/**********LEADERBOARD**************/



function showLeaderboard() {
    tabChangeSound.play();
    $(".gameicon").css("background-image", "url(assets/icons/game1.png)");
    $(".leaderboardmenuicon").css("background-image", "url(assets/icons/leaderboard2.png)");
    $(".menuestructuras").hide();
    $(".leaderboard").show();
    $("#sectionname").text("LEADERBOARD");

    
    
    // Si torna a clicar
    arrayTopPlayers.forEach(player => {
        player.remove();
    });


    arrayTopPlayers = [];

    for (let index = 0; index < 20; index++) {


        var player = document.createElement("div");

        player.innerHTML = `
      
        <div>${index + 1}.</div>
        <div>Gordinxi</div>
        <div>1 trillion</div>
     
        `;
        player.classList.add("eachplayer");
        arrayTopPlayers.push(player);
        leaderboard.appendChild(player);
        // If ${user}
        // player.classList.add("yourposition");
    }

    var yourPositionTitle = document.createElement("b");
    yourPositionTitle.innerHTML = "YOUR POSITION";
    yourPositionTitle.classList.add("topplayers");
    leaderboard.appendChild(yourPositionTitle);
    yourPositionTitle.style.marginTop = "30px";
    yourPositionTitle.style.color = "#2C94F1";
    arrayTopPlayers.push(yourPositionTitle);
    //#2C94F1 <-blue
    //#C1A712 <-yellow
    var yourPosition = document.createElement("div");
    yourPosition.style.color = "#C1A712";
    yourPosition.innerHTML = `
        <div style="color: #C1A712;">100.</div>
        <div style="color: #C1A712;">${username}</div>
        <div style="color: #C1A712;">1 million</div>
        `;
    yourPosition.classList.add("eachplayer");
    yourPosition.classList.add("yourposition");

    leaderboard.appendChild(yourPosition);

    arrayTopPlayers.push(yourPosition);

}


/*

function getUsername(name) {

var username = name;

console.log("usenrame: " + username);
return username;


}*/