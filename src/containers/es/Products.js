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
import Other from './../images/otherproducts.png'
import Glass from './../images/glass.png'
import Insulation from './../images/insulation.png'
import Knauf from './../images/knauf.png'
import Silvercote from './../images/logo-silvercote.png'
import Insudry from './../images/insudry.png'
import Garland from './../images/garland.png'

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const PageLayout = () => (
  <ResponsiveContainer
    urlString="products">
    <Container text textAlign='center'>
      <Header as='h1' style={{ fontSize: '2em', padding:"1em 0em", paddingTop: "2em" }}>
        NUESTROS <span style={{color:"#2185d0"}}>PRODUCTOS</span>
        {/* <Divider style={{color:"#2185d0"}}/> */}
        <hr style={{
          width: "10%",
          border: "1px solid #2185d0",
        }}/>
      </Header>
    </Container>
    <Grid
      container
      stackable
      divided='vertically'
      style={{ padding: '0% 0%' }}
     >
      <Grid.Row>
        <Grid.Column width={5}>
          <Image src={Insulation} centered size='large'/>
          <Segment basic >
              <Header as='h3'>AISLAMIENTO TÉRMICO Y ACÚSTICO</Header>
              <hr style={{
                width: "10%",
                border: "1px solid #2185d0",
                marginLeft: 0,
                padding: '0% 1em'
              }}/>
              <Header as='h5'>Representante de ventas exclusivo en Latinoamérica
                 de los productos de Asilamiento Knauf North America. </Header>
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image centered src={Knauf} size='huge' />
                    </Grid.Column>
                    <Grid.Column>
                      <Image centered src={Silvercote} size='huge' />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
          </Segment>
        </Grid.Column>
          <Grid.Column width={5}>
            <Image src={Other} centered size='large'/>
            <Segment basic >
            <Header as='h3'>RECUBRIMIENTOS A PRUEBA DE AGUA</Header>
            <hr style={{
              width: "10%",
              border: "1px solid #2185d0",
              marginLeft: 0,
              padding: '0% 1em'
            }}/>
            <Header as='h5'>Distribución de productos de revestimiento,
              tapetes acústicos, etc. </Header>
            </Segment>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image centered src={Insudry} size='huge' />
                </Grid.Column>
                <Grid.Column>
                  <Image centered src={Garland} size='huge'/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={5}>
            <Image src={Glass} centered size='large'/>
            <Segment basic >
            <Header as='h3'>VIDRIO Y OTROS MATERIALES</Header>
            <hr style={{
              width: "10%",
              border: "1px solid #2185d0",
              marginLeft: 0,
              padding: '0% 1em'
            }}/>
            <Header as='h5'>Distribuimos vidrio de alta calidad a precios
              competitivos.</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
