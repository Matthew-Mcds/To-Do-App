const dateElement = document.getElementById(date);
const listElement = document.getElementById(itemList);
const inputElement = document.getElementById(input);



function newTodo(toDo){

    const position = "beforeend";



    const itemText = `<li class="singleItem">
<i class="glyphicon glyphicon-cloud"></i>
<p class="text">Look at cloud</p>
<i class="glyphicon glyphicon-remove"></i>
</li>`

 listElement.insertAdjacentHTML(position,itemText);

}
