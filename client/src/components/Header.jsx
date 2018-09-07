import React from 'react'

function Header(props) {

    return (
        <div>
            <h1 className="header" onClick={props.home}>Clean Plates</h1>
            
        </div>
    )
}

export default Header;