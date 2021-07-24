import React, { Component } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";

import goBack from "../asset/chevron-left-solid.svg";
import { postComment, getComment } from "../action/index";
import "../components/styles.scss";
import "../App.scss";


class UserForum extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      comment: '',
      commentError: '',
      listComment: [],
      viewForm: true
    }
    this.closeUserForm = this.closeUserForm.bind(this)

  }

  closeUserForm = () => {
    this.setState({ viewForm: false })
    this.props.closeForm();
  }

  handleUserName = (e) => {
    this.setState({ userName: e.target.value })
  }

  handleComment = (e) => {
    this.setState({ comment: e.target.value })
  }

  addUserComment = () => {

    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;

    let commentDetails = {
      "userName": this.state.userName,
      "comment": this.state.comment,
      "commentTime": dateTime
    }
    postComment(commentDetails, this.onSuccessComment);
    this.setState({ userName:"", comment: "" })
    }

  componentDidMount() {
    this.props.getComment();
  }

  componentDidUpdate(prevProps) {

    if (this.state.listComment.length !== this.props.commentList.commentList.data.length) {

      this.setState({
        listComment: this.props.commentList.commentList.data
      })
    }
  }

  onSuccessComment = () => {
    alert("Comment successfully submitted");
    this.props.getComment();
  }
  render() {
    return (
      <>
        <div className=" main-content">
          <div className="main-content-container">
            <div className="main-content-header main-content-list">
            <Link to="/courses" className="style-goBack-container" ><img src={goBack} alt="export" className="style-goBack-img" /> </Link>
              <h2 className="main-content-header">User Forum</h2>
            </div>
            <div className="forum-container main-content-body">
              <div className="justify-content-between">
                <h2>User Queries</h2>
                {this.state.listComment.length > 0 && this.state.listComment.map((item, index) => {
                  return <div className="style-user-comment-container" >
                    <div className="name-container">
                      <span className="bold-feild style-comment-user" >{item.userName} | {item.commentTime}</span>
                    </div>
                    <div className="name-container">
                      <span className="" >{item.comment}</span>
                    </div>
                  </div>
                })}
              </div>

              <div className="justify-content-between style-height">
                <span style={{ color: "red", fontFamily: "Roboto condensed" }} >
                  {this.state.userError}
                </span>
                <div >
                  <h2>New Comment</h2>
                  <div className="name-container">
                    <label>User name</label>
                    <input onChange={this.handleUserName} placeholder="Enter your name" value={this.state.userName} maxLength="50" className="style-input-feild" />
                  </div>
                  <div className="name-container">
                    <label>Comment</label>
                    <textarea onChange={this.handleComment} value={this.state.comment} maxLength="2000" className="style-textArea" >
                    </textarea>
                  </div>
                </div>
                <div className="name-container">
                  <button className="enquire-button" onClick={() => this.addUserComment()}>Add Comment</button>
                </div>
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
    commentList: state.commentList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ postComment, getComment }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForum)
