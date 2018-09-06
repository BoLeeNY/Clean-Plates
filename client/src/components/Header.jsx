import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        this.props.search(this.state)
    };

    handleChange(ev) {
        ev.preventDefault();
        const { name, value } = ev.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSumbmit}>
                <label>Search</label>
                <input type="text"
                    name="name" 
                    value={this.handleChange} />
                <input type="submit" value="search"/>
                </form>
            </div>
        )
    }
}

export default Header;