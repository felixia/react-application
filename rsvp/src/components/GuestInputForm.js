import React from 'react';

const GuestInputForm = props =>
    <form onSubmit={props.newGuestSubmitHandler}>
        <input type="text" onChange={props.handleNameInput} value={props.pendingGuest} placeholder="Invite Someone" />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>


GuestInputForm.propTypes = {
    newGuestSubmitHandler: React.PropTypes.func.isRequired,
    handleNameInput: React.PropTypes.func.isRequired,
    pendingGuest: React.PropTypes.number.isRequired
};

export default GuestInputForm;