import React from 'react';
import PropTypes from 'prop-types';
import FormSaveMix from "../FormSaveMix";

const Info = props => {
    return (
        <div className="stm-player__info col-12 col-md-12 col-lg-6 order-1 order-lg-3">
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
