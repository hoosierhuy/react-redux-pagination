import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Table, Pagination, ProgressBar } from 'react-bootstrap';

import WesterosiListRow from './WesterosiListRow';
import WesterosusDelete from './WesterosusDelete';

class WesterosiList extends Component {

  constructor(props) {
    super(props);

    if (this.props.westerosi.length === 0) {
      this.props.dispatch({
        type: 'westerosiFetchList',
      })
    }

    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.props.dispatch(push('/?page=' + page));
  }

  render() {
    const perPage = 10;
    const pages = Math.ceil(this.props.westerosi.length / perPage);
    const currentPage = this.props.page;
    const startOffset = (currentPage - 1) * perPage;
    let startCount = 1;

    if (this.props.westerosi.length) {
      return (
        <section>
          <Table bordered hover responsive striped>
            <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Job</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            { this.props.westerosi.map((westerosus, index) => {
              if ((index >= startOffset) && (startCount < perPage)) {
                startCount++;

                return (
                  <WesterosiListRow key={ westerosus.id } westerosus={ westerosus } />
                );
              }
            })}
            </tbody>
          </Table>
          <Pagination
            className="westerosi-pagination pull-right"
            bsSize="medium"
            items={ pages }
            maxButtons={ 10 }
            first last next prev boundaryLinks
            activePage={ currentPage }
            onSelect={ this.changePage }
          />
          <WesterosusDelete />
        </section>
      );
    } else {
      return (
        <ProgressBar active now={ 100 } />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    westerosi: state.westerosi.list || [],
    page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
  };
}

export default connect(mapStateToProps)(WesterosiList);
