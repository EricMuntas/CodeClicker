var html;
var js;
var python;
var php;
var java;
var csharp;
var ai;

var buildingsBought = 0;


// HTML, JS, Python, PHP, Java, C#, AI
function updateBuildings() {
  //name, price, baseClicks,clickPerSec, multiplicador ,quantityBought, image, message
  if (clicks >= 0 && buildingsBought <= 0) {


    if (JSON.parse(localStorage.getItem(`HTML`)) != html) {
      html = JSON.parse(localStorage.getItem(`HTML`));
      startWorking(html);
    } else {

      html = new Building("HTML", 15, 1, 0, 1, 0, "html.png", "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.");

    }

    setDivBuilding(html);
    arrayBuildings.push(html);

  }


  if (clicks >= 50 && buildingsBought <= 1) {

    if (JSON.parse(localStorage.getItem(`JS`)) != js) {
      js = JSON.parse(localStorage.getItem(`JS`));
      startWorking(js);
    } else {

      js = new Building("JS", 100, 10, 0, 1, 0, "js.png", "JavaScript is one of the core technologies of the World Wide Web, alongside HTML and CSS!");

    }

    setDivBuilding(js);
    arrayBuildings.push(js);

  }

  if (clicks >= 500 && buildingsBought <= 2) {

    if (JSON.parse(localStorage.getItem(`Python`)) != python) {
      python = JSON.parse(localStorage.getItem(`Python`));
      startWorking(python);
    } else {

      python = new Building("Python", 1100, 80, 0, 1, 0, "python.png", "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule.");

    }

   
    setDivBuilding(python);
    arrayBuildings.push(python);

  }
  if (clicks >= 2000 && buildingsBought <= 3) {

    if (JSON.parse(localStorage.getItem(`PHP`)) != php) {
      php = JSON.parse(localStorage.getItem(`PHP`));
      startWorking(php);
    } else {

      php = new Building("PHP", 12000, 470, 0, 1, 0, "php.png", `Did you know that PHP was originally an abbreviation of Personal Home Page, but it now stands for the recursive initialism PHP: Hypertext Preprocessor?`);

    }
   
    setDivBuilding(php);
    arrayBuildings.push(php);

  }
  if (clicks >= 50000 && buildingsBought <= 4) {

    if (JSON.parse(localStorage.getItem(`Java`)) != java) {
      java = JSON.parse(localStorage.getItem(`Java`));
      startWorking(java);
    } else {

      java = new Building("Java", 130000, 2600, 0, 1, 0, "java.png", "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.");

    }

    setDivBuilding(java);
    arrayBuildings.push(java);

  }
  if (clicks >= 600000 && buildingsBought <= 5) {

    if (JSON.parse(localStorage.getItem(`CSharp`)) != csharp) {
      csharp = JSON.parse(localStorage.getItem(`CSharp`));
      startWorking(csharp);
    } else {

      csharp = new Building("CSharp", 1400000, 14000, 0, 1, 0, "csharp.png", "C# is a general-purpose high-level programming language supporting multiple paradigms.");

    }



    setDivBuilding(csharp);
    arrayBuildings.push(csharp);

  }
  if (clicks >= 5000000 && buildingsBought <= 6) {

    if (JSON.parse(localStorage.getItem(`AI`)) != ai) {
      ai = JSON.parse(localStorage.getItem(`AI`));
      startWorking(ai);
    } else {

      ai = new Building("AI", 20000000, 78000, 0, 1, 0, "chatgpt.png", "<i>They will kill us.</i>");

    }

    setDivBuilding(ai);
    arrayBuildings.push(ai);

  }

  /*
   localStorage.setItem("buildingsBought", buildingsBought);
    console.log(localStorage.getItem("buildingsBought"));
*/

}