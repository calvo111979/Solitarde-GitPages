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

var path='http://sales.solitrade.com/'
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
        href: '/events/' + get_link(event.language) + '/' + event.name.replace(/\s+/g, '-').toLowerCase() + '/',
        image: path + event.images[0].src
      }
  ))

  return formatted_events
}
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)


export default withRouteData(({ events }) => (
  <ResponsiveContainer>
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text textAlign='center'>
        <Header as='h1' style={{ fontSize: '2em' }}>
          Events
        </Header>
      </Container>
    </Segment>
    <Segment basic>
      <Card.Group
        items={format_events(events.events)}
        centered
      >
      </Card.Group>
    </Segment>
    <Footer />
  </ResponsiveContainer>

))
