class TodoManager {
    constructor() {
        this.todos = []; //array banaya for current object
        this.nextId = 1; //next id for new todo items, unique ids rahengi for each todo items

  }  //yaha constructor banaya hai or todos array banaya hai or nextId banaya hai

add(title, priority = "medium") { //yaha ek parameter hai or default parametwer of priority would be medium
    if (typeof title !== "string" || title.trim() === "") { //yaha title ki type check kiya hai or title ki length check kiya hai
        throw new Error("Title must be a non-empty string"); //yaha error aayega agar title ki type ya length wrong hai

    }
    if (!["low", "medium", "high"].includes(priority)) { //yaha priority ki type check kiya hai or priority ki value check kiya hai
        throw new Error('Invalid piority: ${priority}'); //yaha error aayega agar priority ki value wrong hai
    }
    const todo = {
        id: this.nextId++, //yaha id increment ho raha hai or id ko unique banane ke liye
        title: title.trim(), //yaha title ko trim kiya hai or title ko trim karne ke liye space remove karne ke liye 
        status: "pending",
        priority: priority,
        createdAt: new Date(), //new date add karne ke liye


    };
    this.todos.push(todo);
    return todo;  
}

getById(id){
    const todo = this.todo.find((t) => t. id === id); //yaha todo ko find kiya hai or todo ko find karne ke liye id ko check kiya hai
    if(!todo) throw new Error("Todo ${id} not found"); //yaha error aayega agar todo id not found hai
    return todo;
}

complete(id){
    const todo = this.getById(id); 
    todo.status = "completed";
    return todo;
}

delete(id){
    this.getById(id);
    this.todos = this.todos.filter((t) => t.id !== id);

}

list(){

    return [...this.todos];
}

}