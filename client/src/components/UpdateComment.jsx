import React from 'react'

function UpdateComment(props) {
    return (
        // This creates the modal for the Update a Comment form.
        <div>
            <div className={(props.modal&&props.currentModal==="update") ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <form onSubmit={props.update}>
                    <div>
                        <input type="text"
                            className="name"
                            name="name"
                            value={props.name}
                            placeholder="Name"
                            onChange={props.change} />
                    </div>
                    <div>
                        <textarea name="comment"
                            className="text"
                            id="" cols="30" rows="10"
                            value={props.comment}
                            onChange={props.change}></textarea>
                    </div>
                    <div>
                        <input className="button" type="submit" value="Update" />
                    </div>
                    </form>
                </div>
                <button className="modal-close is-large" onClick={props.toggle} aria-label="close"></button>
            </div>
            <button 
                onClick={()=>props.state(props.rest)} 
                className="button" 
                id="showModal">Update</button>
        </div>
    )
}

export default UpdateComment;