import React, { Component } from 'react'
import "./AnimalList.css"

export default class AnimalList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                    </button>
                </div>
            </React.Fragment >
        )
    }
}