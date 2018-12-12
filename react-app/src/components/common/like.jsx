import React, { Component } from 'react';

// use like: boolean
// return event

const Like = props =>{
    const cursorStyle = {'cursor': 'pointer'};
        return(
            <React.Fragment>
            {props.liked ? <img onClick={props.onClick} style={cursorStyle} src="https://img.icons8.com/material-sharp/20/000000/hearts.png" />
            : <img onClick={props.onClick} style={cursorStyle} src="https://img.icons8.com/material-outlined/20/000000/hearts.png" />}
            </React.Fragment>
        );
}

export default Like;