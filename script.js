export function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "39.99") {
      x.innerHTML = "399.99";
    } else {
      x.innerHTML = "39.99";
    }
  }