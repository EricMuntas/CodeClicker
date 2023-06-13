var buyUpgradeSound = new Audio("assets/audio/buy2.mp3");
class Upgrade {

  constructor(name, price, multiplicador, type, image, bought, id) {
    this.name = name;
    this.price = price;
    this.multiplicador = multiplicador;
    this.type = type; // click, {building}, bug
    this.image = image;
    this.bought = bought;
    this.id = id;
  }

}

function setDiv(upgrade) {
  
  itemsBought++;
 // localStorage.setItem("itemsBought", itemsBought);


  var upgradeDiv = document.createElement("div");


  upgradeDiv.innerHTML =
    `
  <div style="display: flex; align-items: center;">
  <img src="./assets/upgradeicons/${upgrade.image}" width="60px" height="60px" style="margin-right: 10px;">
  <div>
    <p style="font-weight: bold; color: white; font-size: 30px;">${upgrade.name}</p>
    <p id="${upgrade.name}price" style="width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${formatNumber(upgrade.price)} codelines</p>
  </div>
  </div>
  `;

  upgradeDiv.classList.add("item");
  upgradeDiv.classList.add("itemcontainer");
  upgradeDiv.classList.add(`${upgrade.id}Upgrade`);
  menuupgrades.appendChild(upgradeDiv);
  upgradeDiv.addEventListener("click", function () {
    buyUpgrade(upgradeDiv, upgrade);
  });
  $(`.${upgrade.id}Upgrade`).hide();
  $(`.${upgrade.id}Upgrade`).fadeIn();


  if (clicks >= upgrade.price) {
    addStylesUpgradeBuyAble(upgrade);
  }
  if (clicks < upgrade.price) {
    addStylesUpgradeNotBuyAble(upgrade);
  }

  // upgradeDiv.innerHTML = upgrade.name + " / " + upgrade.price;

  //addStylesUpgrade();

}



function buyUpgrade(upgradeDiv, upgrade) {

  if (clicks >= upgrade.price) {
    buyUpgradeSound.volume = 0.2;
    buyUpgradeSound.play();
    upgrade.bought = true;
    upgradeDiv.remove();
    quantityOnScreen--;
    clicks = clicks - upgrade.price;
    localStorage.setItem("codelines", clicks);
    arrayBoughtUpgrades.push(upgrade);
    localStorage.setItem("arrayBoughtUpgrades",JSON.stringify(arrayBoughtUpgrades));
    console.log(arrayBoughtUpgrades);
    /*
    itemStorage++;
    
   localStorage.setItem("itemStorage", itemStorage);
  */




    if (upgrade.type == "click") {

      multiplicador = multiplicador * upgrade.multiplicador;
      localStorage.setItem("multiplicadorClick", multiplicador);
      updateClick();
    }
     
    if (upgrade.type == "bug") {
      debuggerEfect = 4;
      localStorage.setItem("debuggerEfect", debuggerEfect);
      
    }


    arrayBuildings.forEach(building => {
      if (upgrade.type == building.name){
        building.multiplicador = building.multiplicador * upgrade.multiplicador;
        building.clickPerSec = ((building.baseClicks * building.quantityBought)* building.multiplicador);
        localStorage.setItem(`${building.name}`,  JSON.stringify(building));
        updateClick();
      }
    });
/*
    if (upgrade.type == "HTML") {   
      html.multiplicador = html.multiplicador * upgrade.multiplicador;
      html.clickPerSec = ((html.baseClicks * html.quantityBought)* html.multiplicador);
      localStorage.setItem(`HTML`,  JSON.stringify(html));
      updateClick();
    }
    else if (upgrade.type == "JS") {
      js.multiplicador = js.multiplicador * upgrade.multiplicador;
      js.clickPerSec = ((js.baseClicks * js.quantityBought)* js.multiplicador);
      updateClick();
    }

    else if (upgrade.type == "Python") {
      python.multiplicador = python.multiplicador * upgrade.multiplicador;
      python.clickPerSec = ((python.baseClicks * python.quantityBought)* python.multiplicador);
      updateClick();
    }
    else if (upgrade.type == "PHP") {
      php.multiplicador = php.multiplicador * upgrade.multiplicador;
      php.clickPerSec = ((php.baseClicks * php.quantityBought)* php.multiplicador);
      updateClick();
    }
    else if (upgrade.type == "Java") {
      java.multiplicador = java.multiplicador * upgrade.multiplicador;
      java.clickPerSec = ((java.baseClicks * java.quantityBought)* java.multiplicador);
      updateClick();
    }
    else if (upgrade.type == "CSharp") {
      csharp.multiplicador = csharp.multiplicador * upgrade.multiplicador;
      csharp.clickPerSec = ((csharp.baseClicks * csharp.quantityBought)* csharp.multiplicador);
      updateClick();
    }
    else if (upgrade.type == "AI") {
      ai.multiplicador = ai.multiplicador * upgrade.multiplicador;
      ai.clickPerSec = ((ai.baseClicks * ai.quantityBought)* ai.multiplicador);
      updateClick();
    }
*/

  }




}



function addStylesUpgradeBuyAble(upgrade) {
  $(`.${upgrade.id}Upgrade`).css("background-color", "#1E1F1C");

  $(`.${upgrade.id}Upgrade`).hover(
    function () {

      $(this).css('background-color', '#3E3D32');
    },
    function () {
      $(this).css('background-color', '#1E1F1C');
    }
  );
}
function addStylesUpgradeNotBuyAble(upgrade) {
  $(`.${upgrade.id}Upgrade`).css("background-color", "#320102");

  $(`.${upgrade.id}Upgrade`).hover(
    function () {

      $(this).css('background-color', '#450103');
    },
    function () {
      $(this).css('background-color', '#320102');
    }
  );
}
