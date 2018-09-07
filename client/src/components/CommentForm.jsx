import React, { Component } from 'react'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
            restaurant_id: this.props.rest.camis
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(ev) {
        ev.preventDefault();
        this.props.create(this.state)
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
    
                <div className={this.props.modal ? "modal is-active" : "modal"}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text"
                                name="name"
                                value={this.state.name}
                                placeholder="Name"
                                onChange={this.handleChange} />
                            <textarea name="comment"
                                id="" cols="30" rows="10"
                                value={this.state.comment}
                                onChange={this.handleChange} ></textarea>
                            <input type="submit" value="Comment" />
                        </form>
                    </div>
                    <button className="modal-close is-large" onClick={this.props.toggle} aria-label="close"></button>
                </div>
                    <button onClick={this.props.toggle} className="button" id="showModal">Create</button>
            </div>
        )
    }
}

export default CommentForm;