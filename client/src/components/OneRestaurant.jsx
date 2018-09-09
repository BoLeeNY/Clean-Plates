import React from 'react'
import CommentForm from './CommentForm'
import UpdateComment from './UpdateComment';


function OneRestaurant(props) {
    // This loops over and displays all the comments a restaurant has
    let result;
    // If there are no comments, display an empty div
    if (!props.rest.comments){
        result = <div></div>
    }else{
        result = <div className="comm-container">
            {props.rest.comments.map(comment => (
                <div key={comment.id} className="comment">
                    <h2>Comment:</h2>
                    <p className="comm-name">{comment.name}</p>
                    <p>{comment.comment}</p>
                    <div>
                    <button onClick={(ev) => {
                        ev.preventDefault();
                        props.delete(comment)
                    }} className="button">
                        Delete Comment
                    </button>
                    </div>
                    <UpdateComment 
            // This is the Update modal component
                        toggle={props.toggle} 
                        modal={props.modal} 
                        rest={comment}
                        update={props.update}
                        state={props.state}
                        change={props.change}
                        name={props.name}
                        comment={props.comment}
                        id={props.id} 
                        currentModal={props.currentModal}
                    />
                </div>
            ))}
        </div>
    }
    
    return (
        // This is the display for the restaurant data
        <div>
            <div className="container">
                <div className="name-place">
                    <h2>{props.rest.name}</h2>
                <div className="place">
                    <p>Address: {props.rest.building} {props.rest.street}, {props.rest.borough}, {props.rest.zip}</p>
                    <p>Cuisine: {props.rest.cuisine}</p>
                </div>
                </div>

                <div className="grade">
                    <h2>Grade: {props.rest.violations[0].grade}</h2>
                    <p>Inspection Date: {props.rest.violations[0].inspection_date}</p>
                </div>

            </div>

            <div className="data">
                <h2>Violations:</h2>
                <p>{props.rest.violations[0].description}</p>
            </div>

            <div>
                <br/>
                <div>
                <CommentForm 
                // This is the Create a comment modal
                    toggle={props.toggle} 
                    modal={props.modal} 
                    create={props.create}
                    rest={props.rest}
                    selectModal={props.selectModal}
                    currentModal={props.currentModal} />
                </div>
                <br/>
                <div>
                    {result}
                </div>

            </div>

        </div>
    )
}

export default OneRestaurant;