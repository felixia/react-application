import React from 'react';
import Guest from "./Guest";
import PendingGuest from "./PendingGuest";
// import PropTypes from 'prop-types';



const GuestList = (props) => (
    <div>
        <ul>
            <PendingGuest name={props.pendingGuest}/>
            {props.guests
                .filter(guest => !props.isFiltered || guest.isConfirmed)
                .map((guest, index) =>
               <Guest
                   key={index} name={guest.name}
                   isConfirmed={guest.isConfirmed}
                   isEditing={guest.isEditing}
                   handleConfirmation={()=> props.toggleConfirmationAt(index)}
                   handleEditing={()=> props.toggleEditingAt(index)}
                   setName={text => props.setNameAt(text, index)}
                   handleRemove ={() => props.removeGuestAt(index)}
               />
            )}
        </ul>
    </div>
);

GuestList.propTypes = {
    guests: React.PropTypes.array.isRequired,
    toggleConfirmationAt: React.PropTypes.func.isRequired,
    toggleEditingAt: React.PropTypes.func.isRequired,
    setNameAt: React.PropTypes.func.isRequired,
    isFiltered: React.PropTypes.func.isRequired,
    removeGuestAt: React.PropTypes.func.isRequired,
    pendingGuest: React.PropTypes.string.isRequired
}

export default GuestList;