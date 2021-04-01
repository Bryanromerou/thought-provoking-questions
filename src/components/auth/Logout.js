import React, { Component, Fragment } from 'react';
import { NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
import PropTypes from 'prop-types';

export class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  clickHandler = async() =>{
    await this.props.logout()
    this.props.reloadFunct();
  }

  render() {
    return (
      <Fragment>
        <NavLink onClick={this.clickHandler} href='#'>
          Logout
        </NavLink>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);