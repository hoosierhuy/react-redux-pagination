import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';

// Delete a Westerosus Modal component
class WesterosusDelete extends Component {

  constructor(props) {
    super(props);

    this.modalDeleteClose = this.modalDeleteClose.bind(this);
    this.westerosusDelete = this.westerosusDelete.bind(this);
  }

  modalDeleteClose(evt) {
    this.props.dispatch({
      type: 'westerosi.modalDeleteClose',
    });
  }

  westerosusDelete(evt) {
    this.props.dispatch({
      type: 'westerosus.delete',
      id: this.props.modalDelete.id,
    });

    // close the modal after deleting
    this.props.dispatch({
      type: 'westerosi.modalDeleteClose',
    });
  }

  render() {
    return(
      <Modal show={ this.props.modalDelete.show }>
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to delete <strong>{ this.props.modalDelete.westerosusName }</strong>?
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={ this.modalDeleteClose }>No</Button>
          <Button onClick={ this.westerosusDelete } bsStyle="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    )
  }

}

function mapStateToProps(state) {
  let modalDelete;
  if (state.westerosi.modal && state.westerosi.modal.listDelete) {
    modalDelete = state.westerosi.modal.listDelete;
  } else {
    modalDelete = {
      show: false,
      id: 0,
      westerosusName: '',
    };
  }

  return {
    modalDelete,
  };
}

export default connect(mapStateToProps)(WesterosusDelete);
