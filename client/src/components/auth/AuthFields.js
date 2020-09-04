import React from 'react';

export default ({input, type, label, meta:{error, touched}}) => {
    return(
        <div>
            <label className="left"><h6>{label}</h6></label>
            <input {...input} type={type} style={{marginBottom: '5px'}}/>
            <div className="red-text" style={{ marginBottom : '20px'}}>
                {touched && error}
            </div>
        </div>
    );
}