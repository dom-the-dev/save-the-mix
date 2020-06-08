import React from 'react';
import PropTypes from 'prop-types';
import TablePlaylist from "./TablePlaylist";

const TeaserMixOfTheWeek = props => {
    return (
        <div>
            <h1>{props.playlist.name}</h1>
            {props.playlist.description ? <p>{props.playlist.description}</p> : null}
            {props.tracks ?
                <TablePlaylist tracks={props.tracks}/>
                : null}
        </div>
    );
};

TeaserMixOfTheWeek.propTypes = {
    mixOfTheWeek: PropTypes.object.isRequired
};

export default TeaserMixOfTheWeek;
