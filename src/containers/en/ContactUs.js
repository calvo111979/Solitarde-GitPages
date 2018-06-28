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

class DesktopForm extends Component {
  state = {}



  render() {
    const { value } = this.state
    return (
      <Responsive>
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

export default DesktopForm
