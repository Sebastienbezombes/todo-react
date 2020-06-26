import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {

    addClass = (value1, value2, value3) => {
        value1.classList.add("newContent");
        value2.classList.add("ok");
        value3.classList.add("arrow");
    } 

    addTodoClick = () => {
        const $input = document.querySelector('input');
        const $todoList = document.querySelector('.TodoList');
        const $todoCheck = document.querySelector('.TodoCheck');
        const newContent = document.createElement('div');
        const [ok, arrow] = [document.createElement('p'), document.createElement('p')];
        this.addClass(newContent, ok, arrow);
        [newContent.textContent, ok.textContent, arrow.textContent] = [$input.value ,"O", "X"];
        ok.addEventListener('click', () => $todoCheck.append(newContent));
        arrow.addEventListener('click', () => newContent.textContent = "");
        newContent.append(ok, arrow);
        $todoList.append(newContent);
        $input.value = "";
    }

    addTodoKey = e => {
       if (e.keyCode === 13) {
        const $input = document.querySelector('input');
        const $todoList = document.querySelector('.TodoList');
        const $todoCheck = document.querySelector('.TodoCheck');
        const newContent = document.createElement('div');
        const [ok, arrow] = [document.createElement('p'), document.createElement('p')];
        this.addClass(newContent, ok, arrow);
        [newContent.textContent, ok.textContent, arrow.textContent] = [$input.value ,"O", "X"];
        ok.addEventListener('click', () => $todoCheck.append(newContent));
        arrow.addEventListener('click', () => newContent.textContent = "");
        newContent.append(ok, arrow);
        $todoList.append(newContent);
        $input.value = "";
       }
    }

    render() {
        return (
            <div className="Form" onKeyUp={this.addTodoKey}>

                <div className="FormSearch">
                    <label for="todo">Saisissez une tâche à faire</label>
                    <input id="todo" placeholder="Saisissez une tâche à effectuer" />
                    <button type="button" className="Search" onClick={this.addTodoClick}>+</button>
                </div>

                <div class="TodoList"></div>

                <div class="TodoCheck">
                    <h2 class="TodoCheckH2">Todos réussis</h2>
                </div>

            </div>
        )
    }
}