import React, { Component, Children } from 'react'
import './Form.css'

export default class Form extends Component {

    state = {
        todo: "",
        todos: []
    }

    addTodo = () => {
        console.log("add toodoooo");
        let input = document.querySelector('input');
        const $form = document.querySelector('.Form');
        let newContent = document.createElement('div');
        newContent.style.cssText = "margin: 24px 0;display: flex; align-items: center; color: black; background: yellow; line-height: 64px; padding: 0 24px; border-radius: 6px";
        newContent.textContent = input.value;
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
