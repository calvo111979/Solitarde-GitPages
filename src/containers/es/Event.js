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
const ResponsiveContainer = ({ children, urlString }) => (
  <div>
    <DesktopContainer
      urlString={urlString}
      >{children}</DesktopContainer>
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
    <ResponsiveContainer
      urlString={"events/" + event.name.replace(/\s+/g, '-').toLowerCase()}
    >
      <Container text textAlign='center'>
        <Header as='h1' style={{ fontSize: '2em', padding:"2em 0em" }}>
          {event.es_name}
          <hr style={{
            width: "10%",
            border: "1px solid #2185d0",
          }}/>
        </Header>
      </Container>
      <Container style={{ padding: '2em 6em' }}>
        {/* <Gallery images={format_images_gallery(event.images)}/> */}
        <ImageGallery items={format_images_slider(event.images)} />
        {/* console.log(format_images_slider(event.images)); */}
      </Container>
      <Footer />
    </ResponsiveContainer>

))
