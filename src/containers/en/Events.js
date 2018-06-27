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

var path='https://sales.solitrade.com'
function get_link(lenguage){
  if (lenguage == "en"){
    return "events";
  } else {
    return "eventos";
  }
}
function format_events(events){
  const formatted_events =
    events.map(event => (
      {
        header: event.name,
        description: event.description,
        // href: event.id + '/',
        // href: '/events/' + get_link(event.language) + '/' + event.name.replace(/\s+/g, '-').toLowerCase() + '/',
        href: event.name.replace(/\s+/g, '-').toLowerCase() + '/',
        image: path + event.images[0].src
      }
  ))

  return formatted_events
}
const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >{children}</DesktopContainer>
  </div>
)


export default withRouteData(({ events }) => (
  <ResponsiveContainer
    urlString="events">
    <Container text textAlign='center'>
      <Header as='h1' style={{ fontSize: '2em', padding:"2em 0em" }}>
        OUR <span style={{color:"#2185d0"}}>EVENTS</span>
        {/* <Divider style={{color:"#2185d0"}}/> */}
        <hr style={{
          width: "10%",
          border: "1px solid #2185d0",
        }}/>
      </Header>
    </Container>
    <Container style={{padding: "0em 4em", paddingBottom: "2em"}}>
      <Card.Group
        items={format_events(events.events)}
        centered
      >
      </Card.Group>
    </Container>
    <Footer />
  </ResponsiveContainer>

))
