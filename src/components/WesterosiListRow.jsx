import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

class WesterosiListRow extends Component {

  constructor(props) {
    super(props);

    this.modalDeleteRender = this.modalDeleteRender.bind(this);
  }

  // Delete a Westerosus prompt
  modalDeleteRender(evt) {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
    const westerosusId = Number(evt.target.dataset.id);
    const westerosusName = evt.target.dataset.name;

    this.props.dispatch({
      type: 'westerosi.modalDeleteRender',
      id: westerosusId,
      westerosusName,
    })
  }

  render() {
    const westerosus = this.props.westerosus;

    return (
      <tr>
        <td>#{ westerosus.id }</td>
        <td>{ westerosus.westerosusName }</td>
        <td>{ westerosus.job }</td>
        <td>
          <Link to={`/westerosus-edit/${westerosus.id}`}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit" />
            </Button>
          </Link>
        </td>
        <td>
          <Button
            onClick={ this.modalDeleteRender }
            data-id={ westerosus.id }
            data-name={ westerosus.westerosusName }
            bsSize="xsmall">
            Delete <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }

}

WesterosiListRow.propTypes = {
  westerosus: PropTypes.object.isRequired,
};

export default connect()(WesterosiListRow);
