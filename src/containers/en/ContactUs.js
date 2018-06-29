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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}


export default class extends React.Component {
  constructor(props) {
     super(props);
     this.state = {};
   }

   handleChange = e => {
     this.setState({ [e.target.name]: e.target.value });
   };

   handleSubmit = e => {
      e.preventDefault();
      const form = e.target;
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
        .then(() => history.push('/success'))
        .catch(error => alert(error));
    };

  render () {
    return (
      <DesktopContainer urlString="contact">
        <Container text textAlign='center'>
          <Header as='h1' style={{ fontSize: '2em', padding:"1em 0em", paddingTop: "2em" }}>
            CONTACT <span style={{color:"#2185d0"}}>US</span>
            {/* <Divider style={{color:"#2185d0"}}/> */}
            <hr style={{
              width: "10%",
              border: "1px solid #2185d0",
            }}/>
          </Header>
        </Container>
        <Container centered>
          <Grid style={{paddingBottom: "10em"}}>
            <Grid.Row columns={3}>
              <Grid.Column width={10}>
                 <form
                    name="contact"
                    method="post"
                    action="/success"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                    class="ui form"
                  >
                     <input type="hidden" name="form-name" value="contact" />
                     <p hidden>
                       <label>
                         Don’t fill this out:{" "}
                         <input name="bot-field" onChange={this.handleChange} />
                       </label>
                     </p>
                     <div class="equal width fields">
                           <div class="field"><label>Name</label>
                             <div class="ui fluid input"><input onChange={this.handleChange} placeholder="Name" name="name" type="text" required/></div>
                           </div>
                           <div class="field"><label>Email</label>
                             <div class="ui fluid input"><input onChange={this.handleChange} placeholder="Email" name="email" type="text" required/></div>
                           </div>
                           <div class="field"><label>Phone</label>
                             <div class="ui fluid input"><input onChange={this.handleChange} placeholder="Phone" name="phone" type="text" required/></div>
                           </div>
                         </div>
                         <div class="field"><label>Subject</label>
                           <div class="ui fluid input"><input onChange={this.handleChange} placeholder="Subject" name="subject" type="text" required/></div>
                         </div>
                         <div class="field"><label>About</label><textarea onChange={this.handleChange} placeholder="Tell us more" name="message" rows="3" required></textarea></div>
                         <button class="ui button" type="submit">Submit</button>
                       </form>
               </Grid.Column>
               <Grid.Column  style={{ padding: '0em 1em' }} width={6}>
                     <Header as='h4' content='INFO DE CONTACTO' />
                         <Grid.Column style={{ padding: '1em 0em' }}>
                           <Icon name='phone' color='blue' size='big' />
                            +1-864-498-8691
                         </Grid.Column>
                         <Grid.Column style={{ padding: '1em 0em' }}>
                           <Icon name='mail' color='blue' size='big'/>
                            info@solitrade.com
                         </Grid.Column>
                         <Grid.Column style={{ padding: '1em 0em' }}>
                           <Icon name='point' color='blue' size='big'/>
                            CHARLOTTE, SC 28203 (USA)
                         </Grid.Column>
                 </Grid.Column>
             </Grid.Row>
           </Grid>
         </Container>
       <Footer />
     </DesktopContainer>
    )
  }
}
