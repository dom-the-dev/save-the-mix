import React from 'react';
import PropTypes from 'prop-types';
import FormSaveMix from "../FormSaveMix";

const Info = props => {
    return (
        <div className="stm-player__info">
            <div>
                <h1>{props.name}</h1>
                {props.description ? <p>{props.description}</p> : null}
                {props.image ? <img alt={props.name} src={props.image}/> : null}

                <FormSaveMix tracks={props.tracks}/>
            </div>

        </div>
    );
};

Info.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    tracks: PropTypes.array.isRequired
};

export default Info;
