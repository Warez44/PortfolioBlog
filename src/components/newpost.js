import React from "react";
import PropTypes from "prop-types";
import { database } from "../firebase";
import {
  Button,
  Form,
  Container,
  Input,
  Header,
  Icon,
  TextArea
} from "semantic-ui-react";

export default class NewPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onHandleSubmit() {
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    database.collection("posts").add(post);
  }

  render() {
    return (
      <Container>
        <Header as="h2" icon textAlign="center">
          <Icon name="write" circular />
          <Header.Content>Write a New Post</Header.Content>
        </Header>
        <Form>
          <Form.Field>
            <Input
              transparent
              placeholder="Title"
              onChange={this.onInputChange}
              size="huge"
              name="title"
            />
          </Form.Field>
          <Form.Field>
            <TextArea
              autoHeight
              placeholder="Body"
              style={{ minHeight: 100 }}
              onChange={this.onInputChange}
              name="body"
            />
          </Form.Field>
          <Button type="submit" color="green" onClick={this.onHandleSubmit}>
            Post
          </Button>
        </Form>
      </Container>
    );
  }
}

NewPost.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};
