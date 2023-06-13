
var itemsBought = 0; // Fa que no apareguin upgrades repetits. <- *fa referencia a si han aparegut a la pantalla, no si han siguto comprats*
var itemStorage = 0;
//name, price, multiplicador, type, image, bought

var cursor1 = new Upgrade("Old Keyboard", 50, 2, "click", "mechanicalkeyboard.png", false, "id8");
var cursor2 = new Upgrade("Laptop Keyboard", 2500, 2, "click", "mechanicalkeyboard.png", false, "id9");
var cursor3 = new Upgrade("Office Keyboard", 200000, 2, "click", "mechanicalkeyboard.png", false, "id10");
var cursor4 = new Upgrade("Gaming Keyboard", 1500000, 2, "click", "mechanicalkeyboard.png", false, "id11");
var cursor5 = new Upgrade("Golden Keyboard", 5000000, 2, "click", "mechanicalkeyboard.png", false, "id12");
var cursor6 = new Upgrade("Diamond Keyboard", 50000000, 2, "click", "mechanicalkeyboard.png", false, "id13");
var cursor7 = new Upgrade("Automated-Keyboard", 50000000, 2, "click", "mechanicalkeyboard.png", false, "id14");

var html1 = new Upgrade("CSS", 1500000, 4, "HTML", "css.png", false, "id1");
var html2 = new Upgrade("XML", 50, 2, "HTML", "xml.png", false, "id2");
var html7 = new Upgrade("HTML5", 50000000, 2, "HTML", "html.png", false, "id7");
//1, 10, 25, 50, 100

var js1 = new Upgrade("React", 50, 2, "JS", "react.png", false, "id15");
var js2 = new Upgrade("Angular", 250, 2, "JS", "angular.png", false, "id16");
var js3 = new Upgrade("Vue.js", 5000, 2, "JS", "vue.png", false, "id17");
var js4 = new Upgrade("Node.js", 50000, 2, "JS", "node.png", false, "id18");
var js5 = new Upgrade("JQuery", 5000000, 2, "JS", "jquery.png", false, "id19");


var python1 = new Upgrade("Django", 50, 2, "Python", "django.png", false, "id20");
var python2 = new Upgrade("CubicWeb", 250, 2, "Python", "cubicweb.png", false, "id21");
var python3 = new Upgrade("Bottle", 50000, 2, "Python", "bottle.png", false, "id23");
var python4 = new Upgrade("Falcon", 5000000, 2, "Python", "falcon.png", false, "id24");

var php1 = new Upgrade("Laravel", 50, 2, "PHP", "laravel.png", false, "id25");
var php2 = new Upgrade("Symfony", 250, 2, "PHP", "symfony.png", false, "id26");
var php3 = new Upgrade("CodeIgniter", 5000, 2, "PHP", "codeigniter.png", false, "id27");
var php4 = new Upgrade("CakePHP", 50000, 2, "PHP", "cakephp.png", false, "id28");
var php5 = new Upgrade("Yii", 5000000, 2, "PHP", "yii.png", false, "id29");

var java1 = new Upgrade("Spring", 50, 2, "Java", "spring.png", false, "id30");
var java2 = new Upgrade("Hibernate", 250, 2, "Java", "hibernate.png", false, "id31");
var java3 = new Upgrade("Maven", 5000, 2, "Java", "maven.png", false, "id32");
var java4 = new Upgrade("JUnit", 50000, 2, "Java", "junit.png", false, "id33");


var csharp1 = new Upgrade("Unity", 50, 2, "CSharp", "unity.png", false, "id34");
var csharp2 = new Upgrade("ASP.NET", 250, 2, "CSharp", "aspnet.png", false, "id35");
var csharp3 = new Upgrade("C", 5000, 2, "CSharp", "c.png", false, "id36");
var csharp4 = new Upgrade("C++", 50000, 2, "CSharp", "cpp.png", false, "id37");

var debug = new Upgrade("Debugger", 50000, 0, "bug", "debug.png", false, "id38");

var quantityOnScreen = 0;





function updateUpgrades() {

  //*******************************HTML************************************* */
  if (typeof html !== "undefined") {
    if (html.quantityBought > 0 && quantityOnScreen < 5 && document.querySelectorAll(`.${cursor1.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${cursor1.name}`))) {
      setDiv(cursor1);
      arrayUpgrades.push(cursor1);
      quantityOnScreen++;
    }
    if (html.quantityBought >= 10 && quantityOnScreen < 5 && document.querySelectorAll(`.${cursor2.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${cursor2.name}`))) {
      setDiv(cursor2);
      arrayUpgrades.push(cursor2);
      quantityOnScreen++;
    }
    
    if (html.quantityBought > 0 && quantityOnScreen < 5 && document.querySelectorAll(`.${html2.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${html2.name}`))) {
      setDiv(html2);
      arrayUpgrades.push(html2);
      quantityOnScreen++;
    }

    if (html.quantityBought >= 25 && quantityOnScreen < 5 && document.querySelectorAll(`.${html1.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${html1.name}`))) {
      setDiv(html1);
      arrayUpgrades.push(html1);
      quantityOnScreen++;
    }

    if (html.quantityBought >= 25 && quantityOnScreen < 5 && document.querySelectorAll(`.${cursor4.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${cursor4.name}`))) {
      setDiv(cursor4);
      arrayUpgrades.push(cursor4);
      quantityOnScreen++;
    }

    if (html.quantityBought >= 100 && quantityOnScreen < 5 && document.querySelectorAll(`.${html7.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${html7.name}`))) {
      setDiv(html7);
      arrayUpgrades.push(html7);
      quantityOnScreen++;
    }
  
  }



  if (typeof js !== "undefined") {
 
    if (js.quantityBought > 0 && quantityOnScreen < 5 && document.querySelectorAll(`.${js1.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${js1.name}`))) {
      setDiv(js1);
      arrayUpgrades.push(js1);
      quantityOnScreen++;
    }
    if (js.quantityBought >= 25 && quantityOnScreen < 5 && document.querySelectorAll(`.${js2.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${js2.name}`))) {
      setDiv(js2);
      arrayUpgrades.push(js2);
      quantityOnScreen++;
    }
    if (js.quantityBought >= 50 && quantityOnScreen < 5 && document.querySelectorAll(`.${js3.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${js3.name}`))) {
      setDiv(js3);
      arrayUpgrades.push(js3);
      quantityOnScreen++;
    }
    if (js.quantityBought >= 75 && quantityOnScreen < 5 && document.querySelectorAll(`.${js4.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${js4.name}`))) {
      setDiv(js4);
      arrayUpgrades.push(js4);
      quantityOnScreen++;
    }
    if (js.quantityBought >= 100 && quantityOnScreen < 5 && document.querySelectorAll(`.${js5.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${js5.name}`))) {
      setDiv(js5);
      arrayUpgrades.push(js5);
      quantityOnScreen++;
    }
  }

  if (typeof python !== "undefined") {
    if (python.quantityBought >= 25 && quantityOnScreen < 5 && document.querySelectorAll(`.${python1.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${python1.name}`))) {
      setDiv(python1);
      arrayUpgrades.push(python1);
      quantityOnScreen++;
    }
    if (python.quantityBought >= 50 && quantityOnScreen < 5 && document.querySelectorAll(`.${python2.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${python2.name}`))) {
      setDiv(python2);
      arrayUpgrades.push(python2);
      quantityOnScreen++;
    }
    if (python.quantityBought >= 75 && quantityOnScreen < 5 && document.querySelectorAll(`.${python3.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${python3.name}`))) {
      setDiv(python3);
      arrayUpgrades.push(python3);
      quantityOnScreen++;
    }
    if (python.quantityBought >= 100 && quantityOnScreen < 5 && document.querySelectorAll(`.${python4.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${python4.name}`))) {
      setDiv(python4);
      arrayUpgrades.push(python4);
      quantityOnScreen++;
    }
  }
  if (typeof php !== "undefined") {

    if (php.quantityBought >= 5 && quantityOnScreen < 5 && document.querySelectorAll(`.${cursor3.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${cursor3.name}`))) {
      setDiv(cursor3);
      arrayUpgrades.push(cursor3);
      quantityOnScreen++;
    }
    if (php.quantityBought >= 10 && quantityOnScreen < 5 && document.querySelectorAll(`.${php1.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${php1.name}`))) {
      setDiv(php1);
      arrayUpgrades.push(php1);
      quantityOnScreen++;
    }
    if (php.quantityBought >= 25 && quantityOnScreen < 5 && document.querySelectorAll(`.${php2.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${php2.name}`))) {
      setDiv(php2);
      arrayUpgrades.push(php2);
      quantityOnScreen++;
    }
    if (php.quantityBought >= 50 && quantityOnScreen < 5 && document.querySelectorAll(`.${php3.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${php3.name}`))) {
      setDiv(php3);
      arrayUpgrades.push(php3);
      quantityOnScreen++;
    }
    if (php.quantityBought >= 75 && quantityOnScreen < 5 && document.querySelectorAll(`.${php4.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${php4.name}`))) {
      setDiv(php4);
      arrayUpgrades.push(php4);
      quantityOnScreen++;
    }
    if (php.quantityBought >= 100 && quantityOnScreen < 5 && document.querySelectorAll(`.${php5.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${php5.name}`))) {
      setDiv(php5);
      arrayUpgrades.push(php5);
      quantityOnScreen++;
    }
  }

  if (typeof java !== "undefined") {
    if (java.quantityBought >= 25 && quantityOnScreen < 5 && document.querySelectorAll(`.${java1.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${java1.name}`))) {
      setDiv(java1);
      arrayUpgrades.push(java1);
      quantityOnScreen++;
    }
    if (java.quantityBought >= 50 && quantityOnScreen < 5 && document.querySelectorAll(`.${java2.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${java2.name}`))) {
      setDiv(java2);
      arrayUpgrades.push(java2);
      quantityOnScreen++;
    }
    if (java.quantityBought >= 75 && quantityOnScreen < 5 && document.querySelectorAll(`.${java3.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${java3.name}`))) {
      setDiv(java3);
      arrayUpgrades.push(java3);
      quantityOnScreen++;
    }
    if (java.quantityBought >= 100 && quantityOnScreen < 5 && document.querySelectorAll(`.${java4.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${java4.name}`))) {
      setDiv(java4);
      arrayUpgrades.push(java4);
      quantityOnScreen++;
    }
  }
  if (typeof csharp !== "undefined") {
    if (csharp.quantityBought >= 25 && quantityOnScreen < 5 && document.querySelectorAll(`.${csharp1.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${csharp1.name}`))) {
      setDiv(csharp1);
      arrayUpgrades.push(csharp1);
      quantityOnScreen++;
    }
    if (java.quantityBought >= 50 && quantityOnScreen < 5 && document.querySelectorAll(`.${csharp2.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${csharp2.name}`))) {
      setDiv(csharp2);
      arrayUpgrades.push(csharp2);
      quantityOnScreen++;
    }
    if (java.quantityBought >= 75 && quantityOnScreen < 5 && document.querySelectorAll(`.${csharp3.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${csharp3.name}`))) {
      setDiv(csharp3);
      arrayUpgrades.push(csharp3);
      quantityOnScreen++;
    }
    if (java.quantityBought >= 100 && quantityOnScreen < 5 && document.querySelectorAll(`.${csharp4.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${csharp4.name}`))) {
      setDiv(csharp4);
      arrayUpgrades.push(csharp4);
      quantityOnScreen++;
    }
  }
  if (typeof ai !== "undefined") {

  }
  if (bugKillCount >= 10  && quantityOnScreen < 5 && document.querySelectorAll(`.${debug.id}Upgrade`).length == 0 && !(arrayBoughtUpgrades.some(item => item.name === `${debug.name}`))) {

    setDiv(debug);
    arrayUpgrades.push(debug);
    quantityOnScreen++;

  }
 
}

