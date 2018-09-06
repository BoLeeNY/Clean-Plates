import React from 'react'



function OneRestaurant(props) {
    let result;
    if (!props.rest.comments){
        result = <div></div>
    }else{
        result = <div>
            {props.rest.comments.map(comment => (
                <div key={comment.id}>
                    <h2>Comment:</h2>
                    <p>Name: {comment.name}</p>
                    <p>Comment: {comment.comment}</p>
                    <button onClick={(ev) => {
                        ev.preventDefault();
                        props.delete(comment)
                    }}>
                        Delete Comment
                    </button>
                </div>
            ))}
        </div>
    }
    
    return (
        <div>
            <h2>{props.rest.name}</h2>

            <div>
                <p>Address: {props.rest.building} {props.rest.street}, {props.rest.borough}, {props.rest.zip}</p>
                <p>Cuisine: {props.rest.cuisine}</p>
            </div>

            <div>
                <h2>Grade: {props.rest.violations[0].grade}</h2>
                <p>Inspection Date: {props.rest.violations[0].inspection_date}</p>
                <p>Violations: {props.rest.violations[0].description}</p>
            </div>

            <div>
                <div className="modal" is-active>
                    <div class="modal-background"></div>
                    <div class="modal-content">
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
                    <button class="modal-close is-large" aria-label="close"></button>
                </div>
                <button class="button" id="showModal">Show</button>
                
                <div>
                {result}
                </div>

            </div>

        </div>
    )
}

export default OneRestaurant;