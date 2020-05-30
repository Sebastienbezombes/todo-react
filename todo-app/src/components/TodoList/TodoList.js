import React, { Component } from 'react'
import Todo from '../Todo/Todo'
import './TodoList.css'

export default class TodoList extends Component {
    render() {
        return (
            <div className="TodoList">
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
            </div>
        )
    }
}
