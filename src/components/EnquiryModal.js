import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Form
} from "react-bootstrap";

import { connect } from 'react-redux';

import { postEnquiry } from "../action/index";
import "../components/styles.scss";

class EnquiryModal extends Component {

  constructor(props) {
    super(props);
    console.log("PROPS " + JSON.stringify(this.props));
    this.state = {
      firstName: '',
      lastName: '',
      occupation: '',
      companyName: '',
      emailId: '',
      emailError: '',
      phoneNumber: '',
      phoneError: '',
      viewForm: true
    }
    this.closeUserForm = this.closeUserForm.bind(this)

  }

  closeUserForm = () => {
    this.setState({ viewForm: false })
    this.props.closeForm();
  }

  getCourseName = () => {
    return this.props.courseListId;
  }

  handlePhoneNumber = (e) => {
    this.setState({
      phoneNumber: e.target.value,
      phoneError: e.target.validationMessage
    })
  }
  addUser = () => {
    let cName = this.getCourseName();
    let userDetails = {
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "occupation": this.state.occupation,
      "companyName": this.state.companyName,
      "emailId": this.state.emailId,
      "phoneNumber": this.state.phoneNumber,
      "courseName": cName
    }
    postEnquiry(userDetails, this.onSuccess);
  }

  onSuccess = () => {
    this.closeUserForm();
  }

  componentDidMount() {
    console.log("course name " + this.props.courseListId);
  }



  render() {
    return (
      <>

        <Modal isOpen={this.state.viewForm} toggle={this.closeUserForm} className={this.className} id="modal" >
          <ModalHeader toggle={this.closeUserForm}><h2>Course Enquiry</h2></ModalHeader>
          <ModalBody>
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Label>
                  First Name<span class="required">*</span>
                </Form.Label>
                <Form.Control
                  type="firstName"
                  value={this.state.firstName}
                  // ref={firstNameRef}
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                  maxLength="25"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>
                  Last Name<span class="required">*</span>
                </Form.Label>
                <Form.Control
                  type="LastName"
                  value={this.state.lastName}
                  // ref={firstNameRef}
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                  maxLength="25"
                  autoComplete="off"
                />
              </Form.Group>
              <Form.Group controlId="formOccupation ">
                <Form.Label>
                  Occupation  <span class="required">*</span>
                </Form.Label>
                <Form.Control
                  as="select"
                  value={this.state.occupation}
                  onChange={(e) => this.setState({ occupation: e.target.value })}
                >
                  <option>Select</option>
                  <option value="IT Professional">IT Professional</option>
                  <option value="Vendor">Vendor</option>
                  <option value="student">
                    Student
                  </option>
                  <option value="Others">Others</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formCompanyName">
                <Form.Label>
                  Organization<span class="required">*</span>
                </Form.Label>
                <Form.Control
                  type="companyName"
                  value={this.state.companyName}
                  onChange={(e) => this.setState({ companyName: e.target.value })}
                  maxLength="25"
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group controlId="formEmailId">
                <Form.Label>
                  Email Id<span class="required">*</span>
                </Form.Label>
                <span className="invalid-feedback d-block">
                  {this.state.emailError}
                </span>
                <Form.Control
                  type="emailId"
                  value={this.state.emailId}
                  onChange={(e) => this.setState({ emailId: e.target.value })}
                  maxLength="250"
                  autoComplete="off"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>
                  Phone Number<span class="required">*</span>
                </Form.Label>
                <span className="invalid-feedback d-block">
                  {this.state.phoneError}
                </span>
                <Form.Control
                  type="phoneNumber"
                  value={this.state.phoneNumber}
                  // ref={firstNameRef}
                  onChange={this.handlePhoneNumber}
                  maxLength="10"
                  autoComplete="off"
                  // pattern="[A-Za-z]{3}"
                  pattern="^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$"
                />

              </Form.Group>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addUser}>Enquire</Button>{' '}
            <Button color="secondary" onClick={this.closeUserForm}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </>
    );
  }
}


// function mapDispatchToProps(dispatch){
//   return bindActionCreators({postEnquiry}, dispatch)
// }

export default connect()(EnquiryModal)