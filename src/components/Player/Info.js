import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {createPlaylist} from "../../redux/actions";
import {connect} from "react-redux";

const Info = props => {
    const TODAY = new Date();
    const [makePublic, setMakePublic] = useState(true);
    const [playlistName, setPlaylistName] = useState(`SAVE THE MIX ${TODAY.getMonth()}-${TODAY.getFullYear()}`);


    const saveTheMix = () => {
        let playlistBody = {
            name: playlistName,
            public: makePublic,
            collaborative: false,
            description: ''
        }

        let selected = props.tracks.filter(track => track.active === true)

        let tracksUris = {uris: getTrackUri(selected)}

        props.createPlaylist(playlistBody, props.user.id, tracksUris)
    }

    const getTrackUri = (tracks) => {
        return tracks.map(track => `spotify:track:` + track.track.id)
    }

    return (
        <div className="stm-player__info">
            <h1>{props.name}</h1>



            {props.image ? <img className={"stm-image stm-player__cover"} alt={props.name} src={props.image}/> : null}

            <div className="stm-player__form">
                <label htmlFor="playlistName">SELECT A NAME</label> <br/>
                <input className={"stm-player__input"} value={playlistName} onChange={(e) => setPlaylistName(e.target.value)}
                       type="text"
                       id="playlistName"/>
            </div>

            <div className="stm-player__form">
                <label htmlFor="publicPlaylist">Make it public?</label>
                <input onChange={() => setMakePublic(!makePublic)} id="publicPlaylist" type="checkbox"
                       checked={makePublic}/>
            </div>

            <button className={"dom-btn dom-btn-fixed dom-btn-fixed--left"}
                    onClick={() => props.setSelectedTracks()}>BACK
            </button>
            <button className={"dom-btn dom-btn-fixed dom-btn-fixed--right"} onClick={() => saveTheMix()}>SAVE
            </button>


        </div>
    );
};

Info.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    tracks: PropTypes.array.isRequired
};


Info.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    tracks: PropTypes.array.isRequired,
    createPlaylist: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        createPlaylist: (playlistBody, userId, tracksUris) => {
            dispatch(createPlaylist(playlistBody, userId, tracksUris))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);

