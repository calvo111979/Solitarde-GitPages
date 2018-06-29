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
             CONTÁCTA<span style={{color:"#2185d0"}}>NOS</span>
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
                  {/* {this.state.submitted ? (
                    <Container text style={{paddingBottom: "5em"}}>
                      ¡Gracias por enviar tu información! Estaremos en contacto con usted tan pronto como
                       posible.
                    </Container>
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
                            '¡Hubo un problema al enviar su formulario! Intente de nuevo o vuelva a cargar la página :)',
                          )
                          this.setState({ submitted: true })
                        }
                      }}
                    >
                      {({ submitForm }) => (
                        <form name="contact_es" class="ui form" netlify="true" onSubmit={submitForm}>
                          <div class="equal width fields">
                                <div class="field"><label>Name</label>
                                  <div class="ui fluid input"><input placeholder="Nombre" name="name" type="text" required/></div>
                                </div>
                                <div class="field"><label>Email</label>
                                  <div class="ui fluid input"><input placeholder="Correo" name="email" type="text" required/></div>
                                </div>
                                <div class="field"><label>Phone</label>
                                  <div class="ui fluid input"><input placeholder="Teléfono" name="phone" type="text" required/></div>
                                </div>
                              </div>
                              <div class="field"><label>Subject</label>
                                <div class="ui fluid input"><input placeholder="Asunto" name="subject" type="text" required/></div>
                              </div>
                              <div class="field"><label>About</label><textarea placeholder="Mensaje" name="info" rows="3" required></textarea></div>
                               <div netlify-recaptcha></div>
                              <button class="ui button" type="submit">Submit</button>
                        </form>
                      )}
                    </Form>
                  )} */}
                </Grid.Column>
                <Grid.Column  style={{ padding: '0em 1em'}} width={6}>
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
