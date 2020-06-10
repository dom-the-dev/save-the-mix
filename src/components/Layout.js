import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";
import Header from "./Header";
import {userLogout} from "../redux/actions";
import {connect} from "react-redux";
import Popup from "./Popup";

const Layout = props => {
    const [showPopup, setShowPopup] = useState(true);
    return (
        <div>
            {showPopup ? <Popup hidePopup={setShowPopup}/> : null}
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-8">

                        {props.message ?
                            <Message message={props.message.message} type={props.message.type}/>
                            : null}

                        <Header userLogout={props.userLogout} userName={props.user.name}/>

                        {props.children}

                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        message: state.message,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userLogout: () => {
            dispatch(userLogout())
        }
    }
}

Layout.propTypes = {
    children: PropTypes.any.isRequired,
    message: PropTypes.object,
    userLogout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
