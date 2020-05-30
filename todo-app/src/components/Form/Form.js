import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    render() {
        return (
            <div className="Form">

                <div className="FormSearch">
                    <label>Saisissez une tâche à faire</label>
                    <input placeholder="Saisissez une tâche à effectuer" />
                </div>
                
                <div className="Search">
                    +
                </div>


            </div>
        )
    }
}
