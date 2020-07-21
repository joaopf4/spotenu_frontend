import React from "react";
import {connect} from "react-redux";
import {push} from "connected-react-router";
import {routes} from "../Router/index";
import {SplashBody, Logo} from "./styled";
import LogoVerde from '../../imgs/logospotenu.png'

class SplashScreen extends React.Component {
     componentDidMount() {
         window.setTimeout(this.props.goToLogin, 3000);
     }

    render() {
        return (
            <SplashBody>
                <Logo src={LogoVerde}/>
            </SplashBody>
        );
    };
};

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.login)),
});

export default connect (null, mapDispatchToProps)(SplashScreen)