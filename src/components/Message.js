import React from 'react';
import PropTypes from 'prop-types';

const Message = props => {
    return (
        <div className={`stm-message stm-message--${props.type}`}>
            <div className="stm-message__content">
                {props.message}
            </div>
        </div>
    );
};

Message.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["error", "success", "warning"]).isRequired
};

export default Message;
