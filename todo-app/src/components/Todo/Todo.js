import React, {Component} from 'react'
import './Todo.css'

export default class Todo extends Component {

    check = () => {
        let checking = document.querySelector("input::after")
        checking.style.background = "green"
    }

    render() {
        return (
            <div class="Todo">
                <h3>Nom de la tâche</h3> 
               <input type="checkbox" onClick={this.check}/>
            </div>
        )
    }
}
