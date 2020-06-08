import React from 'react';
import PropTypes from 'prop-types';

const TablePlaylist = props => {
    const renderTracks = (tracks) => {
        return (
            <table className={"stm-playlist"}>
                <thead>
                <tr>
                    <th>Artists</th>
                    <th>Track</th>
                </tr>
                </thead>
                <tbody>
                {props.tracks.map((track) =>
                    <tr key={track.track.id}>
                        <td>{track.track.artists[0].name}</td>
                        <td>{track.track.name}</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
    return (
        <div>
            {renderTracks()}
        </div>
    );
};

TablePlaylist.propTypes = {
    tracks: PropTypes.array.isRequired
};

export default TablePlaylist;
