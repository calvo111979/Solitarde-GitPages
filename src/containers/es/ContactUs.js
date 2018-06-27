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

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >{children}</DesktopContainer>
  </div>
)

DesktopContainer.propTypes = {
  children: PropTypes.node,
}


class MobileForm extends Component {
  state = {}

  render() {
    const { children } = this.props

    return (
      <Responsive {...Responsive.onlyMobile}>
        <DesktopContainer urlString="contact">
          <Segment style={{ padding: '3em 0em' }} vertical>
            <Container text textAlign='center'>
              <Header as='h1' style={{ fontSize: '2em' }}>
                CONTACTANOS
              </Header>
            </Container>
          </Segment>
          <Segment style={{ padding: '3em 1em' }} vertical>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form action="http://solitrade.com/sendmail.php">
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Nombre' placeholder='Nombre' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Teléfono' placeholder='Teléfono' />
                    </Form.Group>
                    <Form.Input fluid label='Asunto' placeholder='Asunto' />
                    <Form.TextArea label='Mensaje' placeholder='Mensaje' />
                    <Form.Button>Enviar</Form.Button>
                  </Form>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column  style={{ padding: '0em 1em' }}>
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
            </Segment>
          <Footer />
        </DesktopContainer>
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
        <DesktopContainer urlString="contact">
          <Segment style={{ padding: '3em 0em' }} basic vertical>
            <Container text textAlign='center'>
              <Header as='h1' style={{ fontSize: '2em' }}>
                CONTACTANOS
              </Header>
            </Container>
          </Segment>
          <Segment style={{ padding: '3em 1em' }} basic vertical>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Form action="http://solitrade.com/sendmail.php">
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Nombre' placeholder='Nombre' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Teléfono' placeholder='Teléfono' />
                    </Form.Group>
                    <Form.Input fluid label='Asunto' placeholder='Asunto' />
                    <Form.TextArea label='Mensaje' placeholder='Mensaje' />
                    <Form.Button>Enviar</Form.Button>
                  </Form>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column  style={{ padding: '0em 1em' }}>
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
            </Segment>
          <Footer />
        </DesktopContainer>
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
        <DesktopContainer urlString="contact">
          <Segment style={{ padding: '3em 0em' }} vertical>
            <Container text textAlign='center'>
              <Header as='h1' style={{ fontSize: '2em' }}>
                CONTACTÁNOS
              </Header>
            </Container>
          </Segment>
          <Segment style={{ padding: '3% 25%' }} basic vertical>
            <Grid divided='vertically'>
              <Grid.Row columns={3}>
                <Grid.Column width={10}>
                  <Form action="http://solitrade.com/sendmail.php">
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='Nombre' placeholder='Nombre' />
                      <Form.Input fluid label='Email' placeholder='Email' />
                      <Form.Input fluid label='Teléfono' placeholder='Teléfono' />
                    </Form.Group>
                    <Form.Input fluid label='Asunto' placeholder='Asunto' />
                    <Form.TextArea label='Mensaje' placeholder='Mensaje' />
                    <Form.Button>Submit</Form.Button>
                  </Form>
              </Grid.Column>
              <Grid.Column  style={{ padding: '0em 5%' }} basic width={6}>
                  <Header as='h4' content='INFO DE CONTACTO' />
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
      </DesktopContainer>
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
