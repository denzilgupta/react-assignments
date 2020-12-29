import React from 'react';

const charComponent = (props) => {
    const style = {
        'display': 'inline-block',
        'padding': '16px',
        'text-align': 'center',
        'margin': '16px',
        'border': '1px solid black',
    };

    return (
        <div>
            {props.message}
        </div>
    )
}

export default charComponent;