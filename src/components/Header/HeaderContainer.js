import {connect} from 'react-redux';
import React from 'react';

import Header from './Header';
import {auth, unauth, updateLoginText, updatePasswordText, authThunk} from '../../redux/authReducer';

class HeaderAPIComponent extends React.Component {

    constructor(props){
        super(props)
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
        this.state = {showModal: false};
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
      }
    
    handleShow() {
    this.setState({showModal: true});
    }
    
    handleHide() {
    this.setState({showModal: false});
    }

    logIn() {
        this.props.authThunk(this.props.loginText, this.props.passwordText);
        this.handleHide();
    }

    logOut() {
        this.props.unauth();
    }

    render() {
        return <Header logIn={this.logIn}
                       logOut={this.logOut}
                       isAuth={this.props.isAuth}
                       id={this.props.id}
                       login={this.props.login}
                       passwordText={this.props.passwordText}
                       loginText={this.props.loginText}
                       updatePasswordText={this.props.updatePasswordText}
                       updateLoginText={this.props.updateLoginText}
                       showModal={this.state.showModal}
                       handleShow={this.handleShow}
                       handleHide={this.handleHide}/>;
    }
}



let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        login: state.auth.login,
        loginText: state.auth.loginText,
        passwordText: state.auth.passwordText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        auth: (login, id) => {
            dispatch(auth(login, id));
        },
        unauth: () => {
            dispatch(unauth());
        },
        updateLoginText: (newLoginText) => {
            dispatch(updateLoginText(newLoginText));
        },
        updatePasswordText: (newPasswordText) => {
            dispatch(updatePasswordText(newPasswordText));
        },
        authThunk: (login, password) => {
            dispatch(authThunk(login, password));
        },
    };
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent);

export default HeaderContainer;