import React from 'react'

class BadgeForm extends React.Component {
/*   state ={jobTitle: "Designer"}; */
/*   handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
  } */

  handleClick = e => {
    console.log("El boton fue clickeado")
  }

/*   handleSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }
 */


  render() {
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>

          <div className="form-group">
            <label>First Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control"
              type="text" 
              name="firstName" 
              id=""
              value={this.props.formValues.firstName}
             />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control"
              type="text" 
              name="lastName" 
              id=""
              value={this.props.formValues.lastName}
             />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control"
              type="email" 
              name="email" 
              id=""
              value={this.props.formValues.email}
             />
          </div>
          
          <div className="form-group">
            <label>Job Title</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control"
              type="text" 
              name="jobTitle" 
              id=""
              value={this.props.formValues.jobTitle}
             />
          </div>
          
          <div className="form-group">
            <label>Twitter</label>
            <input 
              onChange={this.props.onChange} 
              className="form-control"
              type="text" 
              name="twitter" 
              id=""
              value={this.props.formValues.twitter}
             />
          </div>
          

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>

          
    {this.props.error && 
    <p className="text-danger" >{this.props.error.message}</p>}
        </form>
      </div>
    )
  }
}

export default BadgeForm