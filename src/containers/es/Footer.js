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
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class TabletFooter extends Component {
    render() {

      return (
        <Responsive {...Responsive.onlyTablet} style={{ flex: 1 }}>
          <Segment inverted  vertical style={{ padding: '5em 0em', backgroundColor: '#2A2A2A'}}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='SOBRE SOLITRADE' />
                    <List inverted>
                      <List.Item>Apoyamos a clientes en todo el mundo
                         ofreciendo una sólida cartera de productos de
                          construcción de la más alta calidad</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='MAPA DE SITIO' />
                    <List link inverted>
                      <List.Item as='a' href="/es/sobre">Sobre Nosotros</List.Item>
                      <List.Item as='a' href="/es/productos">Productos</List.Item>
                      <List.Item as='a' href="/es/comunidad">Nuestra Comunidad</List.Item>
                      <List.Item as='a' href="/es/contacto">Contacto</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='PRODUCTOS' />
                    <List link inverted>
                      <List.Item as='a' href="/es/productos">Aislamiento Térmico y Acústico</List.Item>
                      <List.Item as='a' href="/es/productos">Recubrimientos a Prueba de Agua</List.Item>
                      <List.Item as='a' href="/es/productos">Vidrio y Otros Materiales</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='CONTACTO' />
                    <List inverted>
                      <List.Item>
                        <Icon name='phone' />
                         +1-864-498-8691
                      </List.Item>
                      <List.Item>
                        <Icon name='mail' />
                         info@solitrade.com
                      </List.Item>
                      <List.Item>
                        <Icon name='point' />
                         CHARLOTTE, SC 28203 (USA)
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment color='black' inverted vertical style={{ padding: '2em 0em' }}>
            <Container textAlign='center'>
              Copyright © 2018 Solitrade Group. All Rights Reserved.
            </Container>

          </Segment>
        </Responsive>
      )
    }
}

class Footer extends Component {
    render() {

      return (
        <Responsive {...Responsive.onlyComputer} style={{ flex: 1 }}>
          <Segment inverted  vertical style={{ padding: '5em 0em', backgroundColor: '#2A2A2A'}}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='SOBRE SOLITRADE' />
                    <List inverted>
                      <List.Item>Apoyamos a clientes en todo el mundo
                         ofreciendo una sólida cartera de productos de
                          construcción de la más alta calidad</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='MAPA DE SITIO' />
                    <List link inverted>
                      <List.Item as='a' href="/es/sobre">Sobre Nosotros</List.Item>
                      <List.Item as='a' href="/es/productos">Productos</List.Item>
                      <List.Item as='a' href="/es/comunidad">Nuestra Comunidad</List.Item>
                      <List.Item as='a' href="/es/contacto">Contacto</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='PRODUCTOS' />
                    <List link inverted>
                      <List.Item as='a' href="/es/productos">Aislamiento Térmico y Acústico</List.Item>
                      <List.Item as='a' href="/es/productos">Recubrimientos a Prueba de Agua</List.Item>
                      <List.Item as='a' href="/es/productos">Vidrio y Otros Materiales</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='CONTACTO' />
                    <List inverted>
                      <List.Item>
                        <Icon name='phone' />
                         +1-864-498-8691
                      </List.Item>
                      <List.Item>
                        <Icon name='mail' />
                         info@solitrade.com
                      </List.Item>
                      <List.Item>
                        <Icon name='point' />
                         CHARLOTTE, SC 28203 (USA)
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment color='black' inverted vertical style={{ padding: '2em 0em' }}>
            <Container textAlign='center'>
              Copyright © 2018 Solitrade Group. All Rights Reserved.
            </Container>

          </Segment>
        </Responsive>
      )
    }
}

class MobileFooter extends Component {
    render() {

      return (
        <Responsive {...Responsive.onlyMobile}>
          <Segment inverted  vertical style={{ padding: '3em 0em', backgroundColor: '#2A2A2A'}}>
            <Container>
              <Grid divided inverted>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header inverted as='h4' content='ABOUT SOLITRADE' />
                    <List inverted>
                      <List.Item>Apoyamos a clientes en todo el mundo
                         ofreciendo una sólida cartera de productos de
                          construcción de la más alta calidad</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header inverted as='h4' content='MAPA DE SITIO' />
                    <List link inverted>
                      <List.Item as='a' href="/es/sobre">Sobre Nosotros</List.Item>
                      <List.Item as='a' href="/es/productos">Productos</List.Item>
                      <List.Item as='a' href="/es/comunidad">Nuestra Comunidad</List.Item>
                      <List.Item as='a' href="/es/contacto">Contacto</List.Item>
                    </List>
                  </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>

                  <Grid.Column width={8}>
                    <Header inverted as='h4' content='PRODUCTOS' />
                    <List link inverted>
                      <List.Item as='a' href="/es/productos">Aislamiento Térmico y Acústico</List.Item>
                      <List.Item as='a' href="/es/productos">Recubrimientos a Prueba de Agua</List.Item>
                      <List.Item as='a' href="/es/productos">Vidrio y Otros Materiales</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header inverted as='h4' content='CONTACTO' />
                    <List inverted>
                      <List.Item>
                        <Icon name='phone' />
                         +1-864-498-8691
                      </List.Item>
                      <List.Item>
                        <Icon name='mail' />
                         info@solitrade.com
                      </List.Item>
                      <List.Item>
                        <Icon name='point' />
                         CHARLOTTE, SC 28203 (USA)
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment color='black' inverted vertical style={{ padding: '2em 0em' }}>
            <Container textAlign='center'>
              Copyright © 2018 Solitrade Group. All Rights Reserved.
            </Container>

          </Segment>
        </Responsive>
      )
    }
}

const ResponsiveFooter = ({ children }) => (
  <div>
    <Footer>{children}</Footer>
    <MobileFooter>{children}</MobileFooter>
    <TabletFooter>{children}</TabletFooter>
  </div>
)

export default ResponsiveFooter
