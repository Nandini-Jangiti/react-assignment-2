import React, { Component } from "react";

class Registrationclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            company: "",
            displayData: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    displayUserData = () => {
        this.setState({
            displayData: true
        });
    };

    render() {
        return (
            <div>
                <h2>class Components</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Age:
                    <input
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <label>
                    Company:
                    <input
                        type="text"
                        name="company"
                        value={this.state.company}
                        onChange={this.handleChange}
                    />
                </label>
                <br />
                <button onClick={this.displayUserData}>publish</button>
                <br />
                {this.state.displayData && (
                    <p>
                        <h1>Welcome</h1>
                        Hi {this.state.name}, you are {this.state.age} years old and working at {this.state.company}.
                    </p>
                )}
            </div>
        );
    }
}

export default Registrationclass;
