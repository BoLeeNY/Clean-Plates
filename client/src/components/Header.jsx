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
            <div className="header">
                <h1>Clean Plate's</h1>
                <div className="search">
                <form onSubmit={this.handleSumbmit} method="GET" action="search">
                <input type="text" className="searchbar"
                    name="name" 
                    placeholder="Find a Restaurant"
                    onChange={this.handleChange} />
                <input className="submit" type="submit" value="search"/>
                </form>
                </div>
            </div>
        )
    }
}

export default Header;