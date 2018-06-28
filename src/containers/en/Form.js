import React, { Component } from 'react'
import NetlifyForm from 'react-netlify-form'

class ContactForm extends Component{
  render(){
    return(
      <NetlifyForm>{formState => (
        <div>
          { formState.loading && 'Loading...' }
          { formState.error && 'Error.' }
          { formState.success && 'Success.' }
          <input type='text' name='Name' required />
          <textarea name='Message' required />
          <button>Submit</button>
        </div>
      )}</NetlifyForm>
    )
  }
}
export default ContactForm
