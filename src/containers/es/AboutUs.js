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
import Aerial from './../images/solitrade-aerial.jpg'

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
    urlString="about">
    <Container text textAlign='center'>
      <Header as='h1' style={{ fontSize: '2em', padding:"2em 0em" }}>
        ACERCA DE <span style={{color:"#2185d0"}}>NOSOTROS</span>
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
      style={{ padding: '3% 0%' }}
     >
      <Grid.Row>
        <Grid.Column width={8}>
          <Image src={Aerial} centered />
        </Grid.Column>
          <Grid.Column width={8}>
            <Segment  basic>
              <Header as='h3'>VENTAS Y MERCADOTENCIA</Header>
              <hr style={{
                width: "10%",
                border: "1px solid #2185d0",
                marginLeft: 0,
                padding: '0% 1em'
              }}/>
              <Header as='h4'>
                Solitrade Group apoya a clientes de todo el mundo ofreciendo
                una sólida cartera de productos de construcción de la más alta
                 calidad. Al centrarse en una experiencia de servicio al cliente
                  perfecta, nos aseguramos de que pueden dedicar su tiempo a
                  centrarse en lo que hacen mejor: construir su negocio. En
                  esencia, estamos construidos para ayudarle a construir.
               </Header>
               <Header as='h3'>REPRESENTACIÓN GLOBAL DE MARCAS Y PRODUCTOS</Header>
               <hr style={{
                 width: "10%",
                 border: "1px solid #2185d0",
                 marginLeft: 0,
                 padding: '0% 1em'
               }}/>
               <Header as='h4'>
                 Como un grupo de comercio global, cuidadosamente seleccionamos
                  a fabricantes de todo el mundo para poder ofrecer los mejores
                   productos de vidrio, aislamiento y otros materiales para
                    construcción. Nuestro objetivo es asegurar que nuestros clientes
                    tengan acceso a productos de la más alta calidad, necesarios
                     para tener éxito en un mercado de la construcción cada vez
                     más competitivo.
                </Header>
              </Segment>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
