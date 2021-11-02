import React, { Component } from 'react';

class Form extends Component {
    state = {
        magic: "",
        firstname: "",
        lastname: ""
    }

    magicHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className = "boxform">
                <p>Firstname</p>
                <input name="firstname" type="text" onChange={this.magicHandler} />
                <p>Lastname</p>
                <input name="lastname" type="text" onChange={this.magicHandler}/>
                <p>Name entered is: {this.state.firstname} {this.state.lastname}</p>
                <input name="magic" type="text" onChange={this.magicHandler} />
                <p>Magic will happen here: {this.state.magic}</p>
            </div>
        );
    }
}

export default Form;