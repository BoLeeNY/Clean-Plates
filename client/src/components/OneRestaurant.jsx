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

                <div>
                {result}
                </div>

            </div>

        </div>
    )
}

export default OneRestaurant;