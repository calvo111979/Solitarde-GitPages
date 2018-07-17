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
  Flag,
  Card,
} from 'semantic-ui-react'
import DesktopContainer from './DesktopContainer'
import Footer from './Footer'
import { withRouteData, Link } from 'react-static'
//

var path='https://sales.solitrade.com/uploads/'
// var path='http://localhost:4000/uploads/'

function format_brochures(brochures){
  var name = ""
  const formatted_brochures =
  brochures.map((brochure) =>{
    if (brochure.name == "Knauf"){
      if (brochure.name != name) {
        name = brochure.name
        return [
          <List.Item key={brochure.id + "title"} as="h2" >{brochure.name}</List.Item>,
          <List.Item key={brochure.id} as="a" href={path + brochure.url}>{brochure.url}</List.Item>
        ];
      }
      return <List.Item key={brochure.id} as="a" href={path + brochure.url}>{brochure.url}</List.Item>
    }
    return ""
  })

  return formatted_brochures
}

const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >{children}</DesktopContainer>
  </div>
)

export default withRouteData(({ brochures }) => (
  <ResponsiveContainer
    urlString="brochures/knauf">
    <Container text textAlign='center'>
      <Header as='h1' style={{ fontSize: '2em', padding:"2em 0em" }}>
        OUR <span style={{color:"#2185d0"}}>BROCHURES</span>
        <hr style={{
          width: "10%",
          border: "1px solid #2185d0",
        }}/>
      </Header>
    </Container>
    <Container text style={{padding: "0em 4em", paddingBottom: "2em"}}>
      <List size="large">
        {format_brochures(brochures.brochures)}
      </List>
    </Container>
    <Footer />
  </ResponsiveContainer>

))
