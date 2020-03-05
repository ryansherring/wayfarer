import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const ModalBasicExample = props => (
  <Modal
    className="confirm-modal"
    open={props.show}
    onClose={props.handleClose}
    trigger={
      <h4 onClick={props.handleOpen} className="post-detail-delete">
        Delete
      </h4>
    }
    basic
    size="small"
  >
    <Header icon="warning sign" content={`Delete ${props.title}?`} />
    <Modal.Content>
      <p>Post ID: {props.id}</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color="red" inverted onClick={props.handleClose}>
        <Icon name="remove" /> No
      </Button>
      <Button color="green" inverted>
        <Icon name="checkmark" /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ModalBasicExample;
