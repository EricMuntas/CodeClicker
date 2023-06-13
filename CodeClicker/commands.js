function commandConsole(response, newCommandString) {
  if (newCommandString == "help") {
    response.innerHTML = `
<p>>>>Comands</p>
<p>CLEAR -> Clears the terminal.</p>
<p>STATUS -> Gives info of the current code.</p>
<p>USERINFO -> Gives information of player. </p>
<p>INSTALL {UPGRADES} -> Buys the named upgrade.</p>
<p>VIEW {PLUGIN}-> Gives information of the named plugin.</p>
<p>RESTART -> Restarts the player with previous confirmation. </p>
<br>
`;

  }
  else if (newCommandString == "userinfo") {
    response.innerHTML = `
<p>>>>USERNAME -> ${username} </p>
<p>>>>EMAIL -> ${localStorage.getItem("email")} </p>
<br>
`;

  }

  else if (newCommandString.startsWith('view ')) {
    const buildingName = newCommandString.slice(5);

    for (const building of arrayBuildings) {

      if ((building.name).toLowerCase() == buildingName && building.quantityBought > 0) {
        response.innerHTML = `
            <p>>>>${building.name}<<<</p>
            <span>>>>${building.message}</span>
            <p>>>>QUANTITY -> ${building.quantityBought} </p>
            <p>>>>CPS -> ${formatNumber(building.clickPerSec)} </p>
            <p>>>>EACH -> ${building.baseClicks * building.multiplicador} CPS</p>
            <p>>>>VALUE -> ${formatNumber(building.price)} </p>
            <br>
            `;
        break;
      } else {
        response.innerHTML = `
                <p style="color: red;">'${buildingName}' not defined.</p>
            `;
      }
    }
  }

  else if (newCommandString == "status" || newCommandString == "stats") {

    arrayBuildings.forEach(building => {
      if (building.quantityBought > 0) {
        codePerSecond = codePerSecond + (building.clickPerSec);
      }
    });
    console.log(codePerSecond);

    response.innerHTML = `
<p>>>>CODELINES -> ${clicks} </p>
<p>>>>CPC -> ${multiplicador} </p>
<p>>>>CPS -> ${codePerSecond} </p>    
<p>>>>BUG KILL COUNT -> ${bugKillCount} </p>    
<br>
`;
    codePerSecond = 0;
  }
  else if (newCommandString == "clear") {

    while (codeConsole.firstChild) {
      codeConsole.removeChild(codeConsole.firstChild);
    }

  }
  else if (newCommandString.startsWith('install ')) {
    const upgradeName = newCommandString.slice(8);

    for (const upgrade of arrayUpgrades) {

      if ((upgrade.name).toLowerCase() == upgradeName) {
        response.innerHTML = `
            <p>---${upgrade.name}---</p>
            <p>>>>VALUE -> ${upgrade.price}</p>
            <p>>>>TYPE -> ${(upgrade.type).toUpperCase()}</p>
            <p>>>>MULTIPLIER -> ${upgrade.multiplicador}</p>
            `;
        break;
      }
    }
  }

  /*************RESTART****************/


  else if (newCommandString == "restart" || newCommandString == "reset" ) {

    var restart = prompt("Are sure you want to restart the game? (yes/no)");
    if (restart == "yes") {

      var nameAux = localStorage.getItem("username");
      var emailAux = localStorage.getItem("email");
      localStorage.clear();
      location.reload();
      clicks = 0;
      localStorage.setItem("username", nameAux);
      localStorage.setItem("email", emailAux);
    }
  }

  /************************************************/

  else if (newCommandString == "" || newCommandString == " ") {

  }

  else {
    response.innerHTML = `
<p style="color: red;">'${newCommandString}' is not recognized as a command.</p>
<br>
`;
  }
}