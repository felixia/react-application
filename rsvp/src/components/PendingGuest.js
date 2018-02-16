import React from 'react';


const PendingGuest = (props) => {
    if(props.name){
       return (
           <li className="pending">
            <span>
                {props.name}
            </span>
           </li>

       );
    }
return null;

};

PendingGuest.propTypes = {
    name: React.PropTypes.string.isRequired,

}

export default PendingGuest;