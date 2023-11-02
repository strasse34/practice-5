import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComment = React.createRef();
    }


    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.inputCategory.current.value)
        console.log(this.inputComment.current.value)
        
        
    }
  render() {
    return (
      <div>
        
        <h2>Please fill the form below</h2>
        <form onSubmit={this.handleSubmit}>
           <div>
            <label htmlFor='id-name'>Your Name:</label>
                <input
                ref={this.inputName}
                id="id-name" 
                name="name" 
                type="text" />
           </div>
            <div>
                <label htmlFor='id-category'>Category:</label>
                <select ref={this.inputCategory} id='id-category'>
                    <option id='website'>Website Issue</option>
                    <option id='order'>Order Issue</option>
                    <option id='general'>General Issue</option>
                </select>
            </div>
            <div>
                < label htmlFor='id-comment'>Comments:</label>
                <textarea 
                id='id-comment' name='comments'
                ref={this.inputComment}
                 />
            </div>
            <input type="submit" value="Submit" />

        </form>
        
      </div>
      
    )
  }
}

export default UncontrolledForm