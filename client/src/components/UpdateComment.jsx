import React from 'react'

function UpdateComment(props) {
    return (
        <div>

            <div className={props.modal ? "modal is-active" : "modal"}>
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <form onSubmit={props.create}>
                                <input type="text"
                                    name="name"
                                    value={props.name}
                                    placeholder="Name"
                                    onChange={props.change} />
                                <textarea name="comment"
                                    id="" cols="30" rows="10"
                                    value={props.comment}
                                    onChange={props.change}></textarea>
                                <input type="submit" value="Comment" />
                            </form>
                        </div>
                        <button className="modal-close is-large" aria-label="close"></button>
                    </div>
                    <button onClick={props.toggle} className="button" id="showModal">Show</button>
        </div>
    )
}

export default UpdateComment;