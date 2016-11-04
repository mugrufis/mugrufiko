// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    function sayHello (event) {
      console.log(event);

      this.textContent = "Ekataxwri8ei!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Xronia polla re Mitse, na eisai panta geros kai dinatos!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      
      }
    }

    
    

  }
);



// document.querySelector("button")
//   .onclick = sayHello;




