import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "",
         category: "Website Issue",
         comment: ""
      }
    }

    handleNameChange = (event) => {
      const newName = event.target.value;
      this.setState({
        name: newName,
      });
    }

    handleCategoryChange = (event) => {
      const newCategory = event.target.value;
      this.setState({
        category: newCategory
      });
    }

    handleCommentChange = (event) => {
      const newComment = event.target.value;
      this.setState({
        comment: newComment
      });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <div>
        <h2>Please fill the form below</h2>
        <form onSubmit={this.handleSubmit}>
           <div>
            <label htmlFor='id-name'>Your Name:</label>
                <input
                value={this.state.name} 
                onChange={this.handleNameChange}
                id="id-name" 
                name="name" 
                type="text" />
           </div>
            <div>
                <label htmlFor='id-category'>Category:</label>
                <select value={this.state.category} onChange={this.handleCategoryChange} id='id-category'>
                    <option id='website'>Website Issue</option>
                    <option id='order'>Order Issue</option>
                    <option id='general'>General Issue</option>
                </select>
            </div>
            <div>
                < label htmlFor='id-comment'>Comments:</label>
                <textarea 
                id='id-comment' name='comments'
                value={this.state.comment}
                onChange={this.handleCommentChange}
                 />
            </div>
            <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
}

export default ControlledForm