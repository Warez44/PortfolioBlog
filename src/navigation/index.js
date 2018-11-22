import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import { Menu } from 'semantic-ui-react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Menu>
        <Menu.Item
          as={Link}
          to={ROUTES.HOME}
          name="home"
          active={activeItem === 'home'}
          content="Home"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to={ROUTES.SIGN_IN}
          name="sign_in"
          active={activeItem === 'sign_in'}
          content="Sign In"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to={ROUTES.ACCOUNT}
          name="account"
          active={activeItem === 'account'}
          content="Account"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to={ROUTES.ADMIN}
          name="admin"
          active={activeItem === 'admin'}
          content="Admin"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to={ROUTES.LANDING}
          name="landing"
          active={activeItem === 'landing'}
          content="Landing"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          as={Link}
          to={ROUTES.NEW_POST}
          name="new-post"
          active={activeItem === 'new-post'}
          content="New Post"
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}

export default Navigation;
