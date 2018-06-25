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
    <Segment style={{ padding: '3% 0%' }} vertical>
      <Container text textAlign='center'>
        <Header as='h1' style={{ fontSize: '2em' }}>
          PRODUCTS
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
        <Grid.Column width={5}>
          <Image src={Insulation} centered size='large'/>
          <Segment basic >
              <Header as='h3'>THERMAL AND ACCOUSTICAL INSULTATION</Header>
              <Divider />
              <Header as='h5'>Exclusive sales representative of Knauf Insulation
                North America products for Latin America.</Header>
                <Grid>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image centered src={Knauf} size='tiny' />
                    </Grid.Column>
                    <Grid.Column>
                      <Image centered src={Silvercote} size='tiny' />
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
          </Segment>
        </Grid.Column>
          <Grid.Column width={5}>
            <Image src={Other} centered size='large'/>
            <Segment basic >
            <Header as='h3'>WATERPROOFING COATINGS AND SYSTEMS</Header>
            <Divider />
            <Header as='h5'>Distribution of waterproofing products,
              coatings and acoustical mats. </Header>
            </Segment>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image centered src={Insudry} size='tiny' />
                </Grid.Column>
                <Grid.Column>
                  <Image centered src={Garland} size='tiny' style={{ padding: '0em -30em' }}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={5}>
            <Image src={Glass} centered size='large'/>
            <Segment basic >
            <Header as='h3'>GLASS AND OTHER BUILDING MATERIALS</Header>
            <Divider />
            <Header as='h5'>We distribute high quality glass at competitive
              prices.</Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
