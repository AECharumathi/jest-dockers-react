import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { Table } from "react-bootstrap";

import goBack from "../asset/chevron-left-solid.svg";
import "../components/styles.scss";
import "../App.scss";

import { getUsers } from "../action";

class UserEnquired extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            courseList: []
        }
    }

    componentDidMount() {
        console.log("userEnquired");
        this.props.getUsers();
    }

    componentDidUpdate(prevProps) {
        if (this.state.userList.length !== this.props.users.users.data.length)
            this.setState({
                userList: this.props.users.users.data
            })
    }

    render() {
        return (
            <>
                <div className="main-content">
                    <div className="main-content-container">

                        <div className="main-content-header main-content-list">
                            <Link to="/courses" className="style-goBack-container" ><img src={goBack} alt="export" className="style-goBack-img" /> </Link>
                            <h2 className="main-content-header">Users Enquired</h2>
                        </div>
                        <div className="main-content-body">
                            <div className="main-content-quote">
                                <Table className="table-main">
                                    <thead className="table-caption">
                                        <tr>
                                            <th>Id</th>
                                            <th > First Name </th>
                                            <th > Last Name </th>
                                            <th  > Email Id </th>
                                            <th >Phone Number</th>
                                            <th >Occupation</th>
                                            <th >Company Name</th>
                                            <th >Course Enquired</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-body">
                                        {this.state.userList.length > 0 ?
                                            this.state.userList.map((user, index) => {
                                                return <tr>
                                                    <td >{user.id}</td>
                                                    <td > {user.firstName} </td>
                                                    <td > {user.lastName} </td>
                                                    <td > {user.emailId} </td>
                                                    <td  > {user.phoneNumber} </td>
                                                    <td  > {user.occupation} </td>
                                                    <td > {user.companyName} </td>
                                                    <td > {user.courseName}</td>
                                                </tr>
                                            }) : null

                                        }
                                    </tbody>
                                </Table>
                            </div>

                        </div>
                    </div>


                </div>

            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getUsers }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEnquired)