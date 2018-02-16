import React from 'react';
import Counter from './Counter';
import GuestList from './GuestList';
import ConfirmedFilter from "./ConfirmedFilter";

const MainContent = props => (
    <div className="main">
        <ConfirmedFilter
            toggleFilter={props.toggleFilter}
            isFiltered={props.isFiltered}
        />

        <Counter
            totalInvited={props.totalInvited}
            numberAttending={props.numberAttending}
            numberUnconfirmed ={props.numberUnconfirmed}
        />

        <GuestList
            guests={props.guests}
            toggleConfirmationAt={props.toggleConfirmationAt}
            toggleEditingAt = {props.toggleEditingAt}
            setNameAt = {props.setNameAt}
            isFiltered ={props.isFiltered}
            removeGuestAt={props.removeGuestAt}
            pendingGuest={props.pendingGuest}

        />

    </div>
);

MainContent.propTypes = {
    
};

export default MainContent;