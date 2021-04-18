import React,{Component} from 'react';

class ComplaintRegister extends Component {
    handleChange=(event)=>
    {
      this.setState({
          [event.target.name]:event.target.value
      })
    }
    handleSubmit=(event)=>
    {
      event.preventDefault();
      alert(`Thanks ${this.state.name}.\n Your Complaint was Submitted.\nTransaction ID is ${Math.floor(Math.random()*50)}`)
    }
    render() {
    return (
      <div>
        <h1>Register your complaints here!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Name: </label>
            <input type="textbox" name="name" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Complaint: </label>
            <textarea name="complaint" onChange={this.handleChange}></textarea>
          </div>
          <div>
            <input type="submit"></input>
          </div>
        </form>
      </div>
    );
  }
}
export default ComplaintRegister