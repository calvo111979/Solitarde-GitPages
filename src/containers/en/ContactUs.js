import React from 'react'
import { Form, Text, TextArea } from 'react-form'
import axios from 'axios'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Flag
} from 'semantic-ui-react'
import DesktopContainer from './DesktopContainer'
import Footer from './Footer'

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export default class extends React.Component {
  state = {
    submitted: false,
  }
  render () {
    return (
      <div>
        <div className="header">Contact Us</div>
       {this.state.submitted ? (
         <p className="thanks">
           Thanks for submitting your information! We'll be in contact with you as soon as
           possible.
         </p>
       ) : (
         <Form
           onSubmit={async values => {
             try {
               await axios.post('/', encode({ 'form-name': 'contact', ...values }), {
                 headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
               })
               this.setState({ submitted: true })
             } catch (err) {
               window.alert(
                 'There was a problem submitting your form! Try again or reload the page :)',
               )
               this.setState({ submitted: true })
             }
           }}
         >
           {({ submitForm }) => (
             <form name="contact" netlify="true" onSubmit={submitForm}>
               <div>
                 <div>Name</div>
                 <Text field="name" name="name" placeholder="John Doe" />
               </div>
               <div>
                 <div>Email</div>
                 <Text field="email" name="email" placeholder="johndoe@gmail.com" />
               </div>
               <div>
                 <div>Phone</div>
                 <Text field="phone" name="phone" placeholder="(555) 555-555" />
               </div>
               <div>
                 <div>Message</div>
                 <TextArea
                   field="message"
                   name="message"
                   rows="5"
                   placeholder="Your message to us :)"
                 />
               </div>
               <div>
                 <button type="submit">Submit</button>
               </div>
             </form>
           )}
         </Form>
       )}
       <div className="columns">
         <div className="column">
           Or give us a call for more information about our building and services. We are happy to
           assist you in planning your upcoming event.
         </div>
         <div className="column">
           <div>City View Receptions</div>
           <div>1001 East 11th Avenue, Suite B</div>
           <div>Salt Lake City, UT 84103</div>
           <a href="tel:+8012901267" className="phone">
             (801) 290 - 1267
           </a>
         </div>
       </div>
       <div className="copyright">
         Copyright &copy; {new Date().getYear() + 1900} City View Receptions
       </div>
     </div>
    )
  }
}
