import "./styles.css";
import {changeText} from "./domLogic.js";

console.log("working");

class Project {
    constructor(name){
        this.name = name;
        this.todos = [];
    }

}

class Todo {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checked = false;
        this.priority = priority;
        this.notes = "";
    }
}

const projArray = [];





