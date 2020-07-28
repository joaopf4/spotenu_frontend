import React, { Component, Fragment } from "react";
import {HomeBody, BgImg, SignUpText} from './styled';
import Header from '../../components/Header/index';
import {BodyComp, BodyPage} from '../../components/Body/styled';
import BgImagem from '../../imgs/undraw_music_home.png';
import {InputsComp, ButtonsComp, Links} from '../../components/Smallers/styled';
import { push, replace } from "connected-react-router";
import { routes } from '../Router';
import { getProfile } from '../../actions/user';
import { connect } from "react-redux";

class HomeFreeUser extends Component {
  constructor(props) {
    super(props)
    this.state = {

    };
  };
 
  componentDidMount() {
    const token = localStorage.getItem("token")
    if (token === null) {
      this.props.goToLoginScreen()
    }
    this.props.getProfile()
  }

  render() {
    const {user} = this.props
    return (
      <BodyComp>
        <Header showTitle showSearch showProfileIcon/>
        <HomeBody>
          <p>Olá {user && user.name} seu arrombado</p>
        </HomeBody>
      </BodyComp>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.profile             
})

const mapDispatchToProps = dispatch => ({
  //goToPostDetails: () => dispatch(push(routes.postDetails)),
  goToLoginScreen: () => dispatch(replace(routes.login)),
  getProfile:() => dispatch(getProfile()),
  //getPosts: () => dispatch(getPosts()),
  //createPost: (body) => dispatch(createPost(body)),
  //votePost: (direction, id) => dispatch(votePost(direction, id)),
  //getPostDetails: (postId) => dispatch(getPostDetails(postId)),
  //getPostId: (id) => dispatch(getPostId(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeFreeUser);


