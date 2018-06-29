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
         <Container centered style={{padding: "1em 3em", paddingBottom: "5em"}}>
           <Grid style={{paddingBottom: "10em"}}>
             <Grid.Row columns={3}>
               <Grid.Column width={10}>
                  {this.state.submitted ? (
                    <Container text style={{paddingBottom: "5em"}}>
                      Thanks for submitting your information! We'll be in contact with you as soon as
                      possible.
                    </Container>
                  ) : (
                    <Form
                      onSubmit={async values => {
                        try {
                          await axios.post('/', encode({ 'form-name': 'contacten', ...values }), {
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                          })
                          this.setState({ submitted: true })
                        } catch (err) {
                          window.alert(
                            'There was a problem submitting your form! Try again or reload the page :)',
                          )
                          this.setState({ submitted: false })
                        }
                      }}
                    >
                      {({ submitForm }) => (
                        <form name="contacten" netlify="true" onSubmit={submitForm}>
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
                </Grid.Column>
                <Grid.Column  style={{ padding: '0em 1em'}} width={6}>
                      <Header as='h4' content='CONTACT INFO' />
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
