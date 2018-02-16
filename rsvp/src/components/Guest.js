import React from 'react';
import GuestName from './GuestName';

const Guest = (props) => (

                <li>
                    <GuestName
                        isEditing={props.isEditing}
                        handleNameEdits={e => props.setName(e.target.value)}>

                        {props.name}
                        </GuestName>
                    <label>
                        <input
                            type="checkbox"
                            checked={props.isConfirmed}
                            onChange={props.handleConfirmation}
                        /> Confirmed
                    </label>
                    <button onClick={props.handleEditing}>edit</button>
                    <button onClick={props.handleRemove}>remove</button>
                </li>

);

Guest.propTypes = {
    name: React.PropTypes.string.isRequired,
    isConfirmed: React.PropTypes.bool.isRequired,
    isEditing: React.PropTypes.bool.isRequired,
    handleConfirmation: React.PropTypes.func.isRequired,
    handleEditing: React.PropTypes.func.isRequired,
    setName: React.PropTypes.func.isRequired,
    handleRemove: React.PropTypes.func.isRequired
}

export default Guest;