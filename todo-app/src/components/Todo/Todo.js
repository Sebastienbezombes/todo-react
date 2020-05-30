import React, {Component} from 'react'
import './Todo.css'


export default class Todo extends Component {
    render() {
        return (
            <div class="Todo">
                <h3>Nom de la tâche</h3> 
               <input class="bg-red" type="checkbox"/>
            </div>
        )
    }
}
