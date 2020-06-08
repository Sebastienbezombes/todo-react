import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {

    state = {
        todo: "",
        todos: []
    }

    addTodo = () => {
        console.log("add toodoooo");
        const $form = document.querySelector('.Form');
        let newContent = document.createElement('div');
        newContent.style.cssText = "background: yellow; height: 100px; width: 100px";
        $form.append(newContent);
    }

    render() {
        return (
            <div className="Form">

                <div className="FormSearch">
                    <label for="todo">Saisissez une tâche à faire</label>
                    <input id="todo" placeholder="Saisissez une tâche à effectuer" />
                    <button type="button" className="Search" onClick={this.addTodo}>+</button>
                </div>
                



            </div>
        )
    }
}
