import React from 'react';
import GuestInputForm from "./GuestInputForm";

const Header = props =>
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestInputForm
            newGuestSubmitHandler={props.newGuestSubmitHandler}
            handleNameInput={props.handleNameInput}
            pendingGuest={props.pendingGuest}
        />
    </header>

Header.propTypes = {
    newGuestSubmitHandler: React.PropTypes.func.isRequired,
    handleNameInput: React.PropTypes.func.isRequired,
    pendingGuest: React.PropTypes.number.isRequired


};


export default Header;