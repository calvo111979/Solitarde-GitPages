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
import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";

var path = "https://sales.solitrade.com"
//
function format_images_slider(images_json){
  const images =
  images_json.map(image => (
    {
      original: path + image.src,
      thumbnail: path + image.src,
    }
  ))

  return images
}
const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)

function format_images_gallery(images_json){
  const images =
    images_json.map(image => (
      {
        src: path + image.src,
        thumbnail: path + image.src,
        thumbnailWidth: 800,
        thumbnailHeight: 600,
      }
  ))

  return images
}

export default withRouteData(({ event }) => (
    <ResponsiveContainer>
    ,
    <Segment style={{ padding: '3em 0em' }} basic vertical>
      <Container text textAlign='center'>
        <Header as='h1' style={{ fontSize: '2em' }}>
          {event.name}
        </Header>
        {/* <Header as='h4' color='blue' style={{ fontSize: '2em' }}>
          {event.description}
        </Header> */}
        <Divider color="blue" />
      </Container>
    </Segment>
    <Container style={{ padding: '2em 6em' }}>
      {/* <Gallery images={format_images_gallery(event.images)}/> */}
      <ImageGallery items={format_images_slider(event.images)} />
    </Container>
    <Footer />
  </ResponsiveContainer>

))
