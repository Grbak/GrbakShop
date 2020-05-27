import React from 'react';

import style from './Modal.module.css';
import closeIcon from '../../../img/close.png'


const Modal = (props) => {

    let login = React.createRef();
    const onLoginChange = () => {
        let newLoginText = login.current.value;
        props.updateLoginText(newLoginText);
    };

    let password = React.createRef();
    const onPasswordChange = () => {
        let newPasswordText = password.current.value;
        props.updatePasswordText(newPasswordText);
    };

    let close = () => {
        props.updateLoginText('');
        props.updatePasswordText('');
        props.handleHide();
    };

    return <div className={style.wrapper}>
                <div className={style.auth}>
                    <div className={style.close}>
                        <img src={closeIcon} onClick={close} />
                    </div>
                    <div className={style.title}>Вход</div>
                    <div className={style.inputs}>
                        <div className={style.inputContainer}>
                            <div className={style.inputTitle}>Логин</div>
                            <input ref={login} value={props.loginText} onChange={(event) => onLoginChange(event)}/>
                        </div>
                        <div className={style.inputContainer}>
                            <div className={style.inputTitle}>Пароль</div>
                            <input ref={password} value={props.passwordText} onChange={(event) => onPasswordChange(event)}/>
                        </div>
                        <div className={style.buttonsContainer}>
                            <div className={style.loginButton} onClick={() => {props.logIn();}}>Войти</div>
                            <div className={style.createAccountButton}>Создать аккаунт</div>
                        </div>
                    </div>
                </div>
            </div>
};

export default Modal;