var dateElement = document.getElementById('date');
var buttonElement = document.getElementById('addTodo');
var listElement = document.getElementById('itemList');
var inputElement = document.getElementById('UserInput');



    buttonElement.addEventListener("click", function() {
        var word = document.createElement('p');
        word.innerText = inputElement.value;
        listElement.appendChild(word);
    
      });




document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        var word = document.createElement('p');
        word.innerText = inputElement.value;
        listElement.appendChild(word);
        
    }

  });
    



