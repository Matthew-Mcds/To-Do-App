var dateElement = document.getElementById('date');
var buttonElement = document.getElementById('addTodo');
var listElement = document.getElementById('itemList');
var inputElement = document.getElementById('UserInput');



    buttonElement.addEventListener("click", function() {
       var word = addTodo();
       listElement.appendChild(word);
    
      });


document.addEventListener("keyup", function(event) {
    if (event.keyCode === 13){
        var word3 = addTodo();
        listElement.appendChild(word3);
        
    }

  });
    

function addTodo(){
        var word2 = document.createElement('p');
        word2.className = "Todo";
        word2.innerText = inputElement.value;
        return word2;
        

}


