window.onload = function(){
  var form = document.getElementById('form');
  var input = document.getElementById('input');
  var btn = document.getElementById('btn');
  var list = document.getElementById('task-list');
  var id = 1;

  btn.addEventListener('click', addTodoItem);

  list.addEventListener('click', boxChecked)

  function addTodoItem(e){

    e.preventDefault(e);

    if(input.value === ""){
      alert("You should add a task");
    } else {
      if(list.style.borderTop === ""){
        list.style.borderTop = "2px solid white";
      }
      var text = input.value;
      var item = `<li id="li-${id}">${text}
                  <input id="box-${id}"
                  class="checkboxes" type=checkbox></li>`;
      list.insertAdjacentHTML('beforeend', item);
      id++;
      form.reset();
    }
  }

  function boxChecked(e){
    const element = e.target;
    if(element.type === 'checkbox'){
      element.parentNode.style.textDecoration = "line-through";
    }
  }
}


























