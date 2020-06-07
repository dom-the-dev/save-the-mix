import React from 'react';
import PropTypes from 'prop-types';

const TeaserMixOfTheWeek = props => {

    const renderTracks = (tracks) => {
        return (
            <table>
                <thead>
                <tr>
                    <th>Artists</th>
                    <th>Track</th>
                </tr>
                </thead>
                <tbody>
                {tracks.map((track) =>
                    <tr key={track.track.id}>
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
