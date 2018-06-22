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
import Aerial from './images/solitrade-aerial.jpg'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const PageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text textAlign='center'>
        <Header as='h1' style={{ fontSize: '2em' }}>
          ABOUT US
        </Header>
      </Container>
    </Segment>
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
              <Header as='h3'>SALES AND MARKETING</Header>
              <Divider section />
              <Header as='h4'>
                Solitrade Group supports customers around the world
                 by offering a robust portfolio of the highest quality building
                 products. By focusing on a seamless customer experience, we
                 ensure that our customers can spend their time focusing on what
                 they do best—build their business.
               </Header>
               <Header as='h3'>GLOBAL BRAND AND PRODUCT REPRESENTATION</Header>
               <Divider section />
               <Header as='h4'>
                 As a global trading group, we carefully screen manufacturers
                  from around the world and compile only the best collection
                  of glass, insulation and other building products. Our goal is
                  to ensure that our clients have all the highest quality products
                  they need to be successful in an increasingly competitive
                  construction marketplace.
                </Header>
              </Segment>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
