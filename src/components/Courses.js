import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import "../components/styles.scss";
import EnquiryModal from './EnquiryModal';

import { bindActionCreators } from 'redux';

import { getCourses } from "../action";

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseList: [],
            showUserForm: false,
            firstName: '',
            lastName: '',
            emailId: '',
            phoneNumber: '',
            nationality: '',
            zipCode: '',
            courseName: '',
            className: props.className
        }
        this.displayUserForm = this.displayUserForm.bind(this);
        this.closeUserForm = this.closeUserForm.bind(this);
    }

    componentDidMount() {
        this.props.getCourses();
        console.log("inside componentDidMount")
    }

    componentDidUpdate(prevProps) {
        if (this.state.courseList.length !== this.props.courses.courses.data.length)
            this.setState({
                courseList: this.props.courses.courses.data
            })
    }

    displayUserForm = (name) => {
        this.setState({
            courseName: name,
            showUserForm: true
        })
    }

    closeUserForm = () => {
        this.setState({
            showUserForm: false
        })
    }

    render() {
        return (
            <>
                <div className="main-content">
                    <div className={`main-content-container ${this.state.showUserForm ? "style-opacity" : ""}`}>
                        <div className="main-content-header display-flex">
                            <h2>List of Courses</h2>
                            <div className="button-container">
                                <button className="style-btn"><Link to="/userEnquired" >Users Enquired</Link></button>
                                <button className="style-btn"><Link to="/userForum" >Forum</Link></button>
                            </div>
                        </div>
                        <div className="main-content-body">
                            <div className="main-content-list">
                                {this.state.courseList.length > 0 && this.state.courseList.map((course, index) => {
                                    return <div className="course-card">
                                        <span className="course-name">{course.courseName}</span>
                                        <p>{course.courseSortDesc}</p>
                                        <button className="enquire-button" onClick={() => this.displayUserForm(course.courseName)}>Enquire</button>

                                    </div>
                                })
                                }
                            </div>

                        </div>
                        {this.state.showUserForm ? <EnquiryModal closeForm={this.closeUserForm} courseListId={this.state.courseName} /> : null
                        }
                    </div>
                </div>

            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getCourses }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)