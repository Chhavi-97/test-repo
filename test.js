let displayTodos=[];

const todoList = [

    {
        name: 'task1',

        isCompleted: true
    },

    {
        name: 'task2',

        isCompleted: false
    },

    {
        name: 'task3',

        isCompleted: false
    },

    {
        name: 'task4',

        isCompleted: true
    },

    {

        name: 'task5',

        isCompleted: false

    }

];

const getTodos=(showCompleted)=>{

    if(showCompleted==undefined){
        displayTodos=todoList;
    }
    else{
        displayTodos=todoList.filter(({isCompleted})=> isCompleted === showCompleted);
    }
    refreshTodosList(displayTodos);
}

const createTodoFromTemplate=({name,isCompleted})=>{
    return `<li class=${isCompleted?'completed':''}><i onclick="checkboxtoggle(this)" class="far fa-check-circle"></i>
    <input id="check-checkbox" class="checkbox-toggle"type="checkbox" hidden >
    <label>${name}</label>
    <button class="remove"></button></li>`;
}

const refreshTodosList =(todoList)=>{
     const todosHtml=[];
     for(i=0;i<todoList.length;i++){
         todosHtml.push(createTodoFromTemplate(todoList[i]));
     }
     document.getElementById('todo-list-task').innerHTML=todosHtml.join();

 }