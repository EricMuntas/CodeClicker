
var buyAble = false;
var aux = 0;
var buySoundEffect = new Audio("assets/audio/buy.mp3");
class Building {

  constructor(name, price, baseClicks,clickPerSec, multiplicador ,quantityBought, image, message) {
    this.name = name;
    this.price = price;
    this.baseClicks = baseClicks;
    this.clickPerSec = clickPerSec;
    this.multiplicador = multiplicador;
    this.quantityBought = quantityBought;
    this.image = image;
    this.message = message;
    this.buildingWorking = false;
  }

}

function setDivBuilding(building) {

  buildingsBought++;
  var buildingDiv = document.createElement("div");

  buildingDiv.innerHTML = 
  `
  <div style="display: flex; align-items: center;">
  <img src="./assets/buildingicons/${building.image}" width="60px" height="60px" style="margin-right: 10px;">
  <div>
    <p style="font-weight: bold; color: white; font-size: 30px;">${building.name}</p>
    <p id="${building.name}price" style="width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${formatNumber(building.price)} codelines</p>
  </div>
  <p id="${building.name}quantity" style="font-weight: bold; font-size: 50px; margin-left: 70px; width: 70px; text-align: center; overflow: hidden; white-space: nowrap;">${building.quantityBought}</p>
  </div>
  `;

  buildingDiv.classList.add("item");
  buildingDiv.classList.add("itemcontainer");
  buildingDiv.classList.add(`${building.name}Building`);
  menuestructuras.appendChild(buildingDiv);
  buildingDiv.addEventListener("click", function () {
    buyBuilding(buildingDiv, building);
  });
  $(`.${building.name}Building`).hide();
  $(`.${building.name}Building`).fadeIn();

 
  updateBuildingText(buildingDiv, building);

  if (clicks >= building.price) {
    addStylesBuildingBuyAble(building);
  }
  if (clicks < building.price) {
    addStylesBuildingNotBuyAble(building);
  }

}

function buyBuilding(buildingDiv, building) {

  if (clicks >= building.price) {


    building.quantityBought++;
    clicks = clicks - building.price;

    building.price = building.price + Math.floor(building.price / 2);

    localStorage.setItem("codelines", clicks);
    
    updateClick();
    updateBuildingText(buildingDiv, building);
    updateUpgrades();
    buySoundEffect.volume = 0.1;
    buySoundEffect.play();

    if (building.buildingWorking == false) {

      startWorking(building);
      building.clickPerSec = ((building.baseClicks * building.quantityBought)* building.multiplicador);

    } else {
      building.clickPerSec = ((building.baseClicks * building.quantityBought)* building.multiplicador);
 

    }

   localStorage.setItem(`${building.name}`,  JSON.stringify(building));
    console.log(localStorage.getItem(`${building.name}`));
  }

}

function updateBuildingText(buildingDiv, building) {

 var quantityBoughtUpdate = document.getElementById(`${building.name}quantity`);
 if (building.quantityBought < 100) {
 quantityBoughtUpdate.textContent = building.quantityBought;
 } else {
  quantityBoughtUpdate.textContent = "*";
 }

 var buildingPriceUpdate = document.getElementById(`${building.name}price`);
 buildingPriceUpdate.textContent = formatNumber(building.price) + " codelines";

}

function startWorking(building) {

  setInterval(function () {
    clicks = clicks + ((building.baseClicks * building.quantityBought)* building.multiplicador);
    localStorage.setItem("codelines", clicks);
   // clicks = clicks + (building.clickPerSec * building.multiplicador);
    updateClick();
    building.buildingWorking = true;


    

  }, 1000);

}

function addStylesBuildingBuyAble(building) {

  $(`.${building.name}Building`).css("background-color", "#1E1F1C");
     
  $(`.${building.name}Building`).hover(
    function () {
 
      $(this).css('background-color', '#3E3D32');
    },
    function () {
      $(this).css('background-color', '#1E1F1C');
    }
  );
}
 
function addStylesBuildingNotBuyAble(building) {

  $(`.${building.name}Building`).css("background-color", "#320102");
    
      $(`.${building.name}Building`).hover(
        function () {
          
          $(this).css('background-color', '#450103');
        },
        function () {
          $(this).css('background-color', '#320102');
        }
      );
}
 
