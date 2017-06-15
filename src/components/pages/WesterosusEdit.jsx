import React, { Component } from 'react';
import { PageHeader, Form, FormGroup, Col, Button, FormControl, InputGroup, Glyphicon,
  HelpBlock } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

class WesterosusEdit extends Component {

  static renderWesterosusName(props) {
    return (
      <FormGroup>
        <Col sm={ 2 }>Westerosus Name</Col>
        <Col sm={ 8 }>
          {/* spread all of the redux input props to the redux input Fields */}
          <FormControl {...props.input} id="westerosusName" type="text" placeholder="Westerosus Name" />
        </Col>
      </FormGroup>
    )
  }

  static renderJob(props)
  {
    return(
      <FormGroup>
        <Col sm={2}>Job</Col>
        <Col sm={8}>
          <InputGroup>
            <FormControl {...props.input} id="job" type="text"
                         placeholder="Job"/>
            <InputGroup.Addon>
              <Glyphicon glyph="fire"/>
            </InputGroup.Addon>
          </InputGroup>
        </Col>
      </FormGroup>
    );
  }

  render() {
    return (
      <section>
        <PageHeader>User add/edit</PageHeader>
        <Form horizontal>
          <Field name="westerosusName" component={ WesterosusEdit.renderWesterosusName } />
          <Field name="job" component={ WesterosusEdit.renderJob } />
          <FormGroup>
            <Col smOffset={ 2 } sm={ 8 }>
              <Button type="submit">Save Westerosus</Button>
            </Col>
          </FormGroup>
        </Form>
      </section>
    );
  }

}

export default WesterosusEdit = reduxForm({
  form: 'westerosusEdit'
})(WesterosusEdit);
