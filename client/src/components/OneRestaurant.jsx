import React from 'react'
import CommentForm from './CommentForm'
import UpdateComment from './UpdateComment';


function OneRestaurant(props) {
    let result;
    if (!props.rest.comments){
        result = <div></div>
    }else{
        result = <div className="comm-container">
            {props.rest.comments.map(comment => (
                <div key={comment.id} className="comment">
                    <h2>Comment:</h2>
                    <p>Name: {comment.name}</p>
                    <p>Comment: {comment.comment}</p>
                    <button onClick={(ev) => {
                        ev.preventDefault();
                        props.delete(comment)
                    }}>
                        Delete Comment
                    </button>
                    <UpdateComment 
                    toggle={props.toggle} 
                    modal={props.modal} 
                    rest={comment}
                    update={props.update}
                    state={props.state}
                    change={props.change}
                    name={props.name}
                    comment={props.comment}
                    id={props.id} />
                </div>
            ))}
        </div>
    }
    
    return (
        <div>
            <h2>{props.rest.name}</h2>

            <div className="place">
                <p>Address: {props.rest.building} {props.rest.street}, {props.rest.borough}, {props.rest.zip}</p>
                <p>Cuisine: {props.rest.cuisine}</p>
            </div>

                <h2>Grade: {props.rest.violations[0].grade}</h2>
            <div className="data">
                <p>Inspection Date: {props.rest.violations[0].inspection_date}</p>
                <p>Violations: {props.rest.violations[0].description}</p>
            </div>

            <div>
                <div>
                <CommentForm 
                    toggle={props.toggle} 
                    modal={props.modal} 
                    create={props.create}
                    rest={props.rest} />
                </div>

                <div>
                {result}
                </div>

            </div>

        </div>
    )
}

export default OneRestaurant;