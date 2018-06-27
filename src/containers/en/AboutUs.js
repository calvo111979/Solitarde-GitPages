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
        ABOUT <span style={{color:"#2185d0"}}>US</span>
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
      style={{ padding: '1em 0%' }}
     >
      <Grid.Row>
        <Grid.Column width={8}>
          <Image src={Aerial} centered />
        </Grid.Column>
          <Grid.Column width={8}>
            <Segment  basic>
              <Container text>
              <Header as='h3'>SALES AND MARKETING</Header>
              <hr style={{
                width: "10%",
                border: "1px solid #2185d0",
                marginLeft: 0,
                padding: '0% 1em'
              }}/>
                <p>
                  Solitrade Group supports customers around the world
                  by offering a robust portfolio of the highest quality building
                  products. By focusing on a seamless customer experience, we
                  ensure that our customers can spend their time focusing on what
                  they do best—build their business.
                </p>
               <Header as='h3'>GLOBAL BRAND AND PRODUCT REPRESENTATION</Header>
               <hr style={{
                 width: "10%",
                 border: "1px solid #2185d0",
                 marginLeft: 0,
                 padding: '0% 1em'
               }}/>
               <p>
                 As a global trading group, we carefully screen manufacturers
                  from around the world and compile only the best collection
                  of glass, insulation and other building products. Our goal is
                  to ensure that our clients have all the highest quality products
                  they need to be successful in an increasingly competitive
                  construction marketplace.
                </p>
              </Container>
              </Segment>
          </Grid.Column>
        </Grid.Row>
    </Grid>
    <Footer />
  </ResponsiveContainer>

)

export default PageLayout
