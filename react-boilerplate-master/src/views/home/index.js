import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'assets/logo.svg';
// import appAction from '../../app/action';
import action from './action';
import './style.scss';
import Path from "../../../cofing/PublicPath";
const PATH_ROOT = Path.PATH_ROOT

const propTypes = {
  message: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  getMessage: PropTypes.func.isRequired,
  getTemp: PropTypes.func.isRequired,
};

class Home extends Component {
  componentDidMount() {
    const {
      getMessage,getTemp
    } = this.props;
    getMessage();
    getTemp();
  }

  render() {
    const {
      message,
      temp,
    } = this.props;

    return (
      <div className="home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          < Link to ={PATH_ROOT} >
            <h1 className="App-title">
              Welcome to React
            </h1>
          </Link>
        </header>
        <p className="App-intro">
          To get started, edit
          <code className="App-code">
            src/views/home/index.js
          </code>
          and save to reload.
        </p>
        < Link to = {`${PATH_ROOT}user`} 
       >
          <p className="App-intro">
            {message}
          </p>
        </Link>
        <p className="dddd">
          {
            temp
          }
          {
            PATH_ROOT
          }
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.home.message,
  temp: state.home.temp,
  
});

const mapDispatchToProps = {
  getMessage: action.getMessage,
  getTemp: action.getTemp,
};

Home.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
