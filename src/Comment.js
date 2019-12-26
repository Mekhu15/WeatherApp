import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
let count = 0;
class Comment extends Component {
  constructor() {
    super();
  //  console.log("Hi, I am constructor");
    this.state = {
      comment: '',
      listOfComments: []

    };
  }
  handleChangeOfName = event => {
    
    console.log(this.state.comment);
    this.setState({
      comment: event.target.value,
      
    });
   
  };
  addComment = event => {
  
    count++;
    this.setState({
      listOfComments: [...this.state.listOfComments, this.state.comment],
      comment: ""
    })
  }
  // delete = (value) =>{
  //   let filtered = this.state.listOfComments.filter((eachItem) => {
  //     return eachItem !== value
  //   }
  //   )
  //   this.setState({
  //     listOfComments: filtered
  //   })
  // }
  // componentDidMount(){
  //       console.log("Hi, I am ComponentDidMount");

  // }
  render() {
        //console.log("Hi, I am render");

    return (
      <div>
       
          <textarea type="text" className="textarea" 
          onChange={event => this.handleChangeOfName(event)}
          value={this.state.comment}
          placeholder="Enter your comment here..." required/><br/>
        <button onClick={this.addComment} className="tocomment"> Comment </button>
        <br/><br/>
        <div className ="count">
         Comments({count})
        
         {

this.state.listOfComments.map(eachElm => (
<p className ="text" ><img src={'man-user.png'} alt="wthr img" width="20" height="20"/> {eachElm}</p>
))
}
</div>
      </div>
    );
  }
};

export default Comment