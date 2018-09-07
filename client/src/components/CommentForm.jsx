import React, { Component } from 'react'

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comment: '',
            restaurant_id: this.props.rest.camis,
            rest: this.props.rest
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

    // This creates the modal for the Create a Comment form.
    render() {
        return (
            <div>
                <div className={this.props.modal&&this.props.currentModal==="create" ? "modal is-active" : "modal"}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text"
                                className="name"
                                name="name"
                                value={this.state.name}
                                placeholder="Name"
                                onChange={this.handleChange} />
                        </div>
                        <div>
                            <textarea name="comment"
                                className="text"
                                id="" cols="30" rows="10"
                                value={this.state.comment}
                                onChange={this.handleChange} ></textarea>
                        </div>
                        <div>
                            <input className="button" type="submit" value="Comment" />
                        </div>
                        </form>
                    </div>
                    <button className="modal-close is-large" onClick={this.props.toggle} aria-label="close"></button>
                </div>
                    <button onClick={this.props.selectModal} className="button" id="showModal">Comment</button>
            </div>
        )
    }
}

export default CommentForm;