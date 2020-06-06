import React from 'react';
import PropTypes from 'prop-types';

const TeaserMixOfTheWeek = props => {

    const renderTracks = (tracks) => {
        return (
            <table>
                <thead>
                <tr>
                    <th>Number</th>
                    <th>Artists</th>
                    <th>Track</th>
                </tr>
                </thead>
                <tbody>
                {tracks.map((track, index) =>
                    <tr key={track.track.id}>
                        <td>{index + 1}</td>
                        <td>Artists: {track.track.artists[0].name}</td>
                        <td>Name: {track.track.name}</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    return (
        <div>
            <h1>{props.mixOfTheWeek.name}</h1>
            <p>{props.mixOfTheWeek.description}</p>
            {props.tracks ? renderTracks(props.tracks) : null}
        </div>
    );
};

TeaserMixOfTheWeek.propTypes = {
    mixOfTheWeek: PropTypes.object.isRequired
};

export default TeaserMixOfTheWeek;
