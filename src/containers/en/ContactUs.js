import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
import { Form } from 'semantic-ui-react'
import NetlifyForm from 'react-netlify-form'

const MenuAndBody = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >{children}</DesktopContainer>
  </div>
)

MenuAndBody.propTypes = {
  children: PropTypes.node,
}


class MobileForm extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <Responsive {...Responsive.onlyMobile}>
        <MenuAndBody urlString="contact">
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
          <Segment style={{ padding: '3em 1em' }} vertical>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form name="info" method="POST" netlify>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Name' placeholder='Name' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Phone' placeholder='Phone' />
                    </Form.Group>
                    <Form.Input fluid label='Subject' placeholder='Subject' />
                    <Form.TextArea label='About' placeholder='Tell us more' />
                    <Form.Button content='Submit'>Submit</Form.Button>A
                  </Form>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column  style={{ padding: '0em 1em' }}>
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
            </Segment>
          <Footer />
        </MenuAndBody>
      </Responsive>
    )
  }
}

MobileForm.propTypes = {
  children: PropTypes.node,
}

class TabletForm extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <Responsive {...Responsive.onlyTablet}>
        <MenuAndBody urlString="contact">
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
          <Segment style={{ padding: '3em 1em' }} vertical>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form name="info" method="POST" netlify="true">
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Name' placeholder='Name' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Phone' placeholder='Phone' />
                    </Form.Group>
                    <Form.Input fluid label='Subject' placeholder='Subject' />
                    <Form.TextArea label='About' placeholder='Tell us more' />
                    <Form.Button content='Submit' />
                  </Form>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column  style={{ padding: '0em 1em' }}>
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
            </Segment>
          <Footer />
        </MenuAndBody>
      </Responsive>
    )
  }
}

TabletForm.propTypes = {
  children: PropTypes.node,
}



class DesktopForm extends Component {
  state = {}



  render() {
    const { value } = this.state
    return (
      <Responsive {...Responsive.onlyComputer}>
        <MenuAndBody urlString="contact">
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
          <Segment style={{ padding: '5em 25%', paddingBottom: "5em" }} basic vertical>
            <Grid divided='vertically'>
              <Grid.Row columns={3}>
                <Grid.Column width={10}>
                  <form name="contact" method="POST" data-netlify="true" action="/success" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="bot-field" />
                    <div class="equal width fields">
                      <div class="field"><label>Name</label>
                        <div class="ui fluid input"><input placeholder="Name" name="name" type="text" required/></div>
                      </div>
                      <div class="field"><label>Email</label>
                        <div class="ui fluid input"><input placeholder="Email" name="email" type="text" required/></div>
                      </div>
                      <div class="field"><label>Phone</label>
                        <div class="ui fluid input"><input placeholder="Phone" name="phone" type="text" required/></div>
                      </div>
                    </div>
                    <div class="field"><label>Subject</label>
                      <div class="ui fluid input"><input placeholder="Subject" name="subject" type="text" required/></div>
                    </div>
                    <div class="field"><label>About</label><textarea placeholder="Tell us more" name="info" rows="3" required></textarea></div>
                    <button class="ui button" type="submit">Submit</button>
                  </form>
              </Grid.Column>
              <Grid.Column  style={{ padding: '0em 5%' }} width={6}>
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
          </Segment>
        <Footer />
      </MenuAndBody>
    </Responsive>
    )
  }
}

const Forms = ({ children }) => (
  <div>
    <DesktopForm>{children}</DesktopForm>
    <MobileForm>{children}</MobileForm>
    <TabletForm>{children}</TabletForm>
  </div>
)

export default Forms
