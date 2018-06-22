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
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Footer extends Component {
    render() {

      return (
        <Responsive {...Responsive.onlyComputer} style={{ flex: 1 }}>
          <Segment inverted  vertical style={{ padding: '5em 0em', backgroundColor: '#2A2A2A'}}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='ABOUT SOLITRADE' />
                    <List inverted>
                      <List.Item>We support customers around the world by
                        offering a robust portfolio of the highest quality building
                        products.</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='SITE MAP' />
                    <List link inverted>
                      <List.Item as='a' href="/about">About Us</List.Item>
                      <List.Item as='a' href="/products">Products</List.Item>
                      <List.Item as='a' href="/community">Our Community</List.Item>
                      <List.Item as='a' href="/contact">Contact</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='PRODUCTS' />
                    <List link inverted>
                      <List.Item as='a' href="/products">Thermal and Accoustical Insulation</List.Item>
                      <List.Item as='a' href="/products" >Waterproofing Coatings and Systems</List.Item>
                      <List.Item as='a' href="/products">Glass and other products</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header inverted as='h4' content='CONTACT' />
                    <List inverted>
                      <List.Item>
                        <Icon name='phone' />
                         +1-864-498-8691
                      </List.Item>
                      <List.Item>
                        <Icon name='mail' />
                         info@solitrade.com
                      </List.Item>
                      <List.Item>
                        <Icon name='point' />
                         CHARLOTTE, SC 28203 (USA)
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment color='black' inverted vertical style={{ padding: '2em 0em' }}>
            <Container textAlign='center'>
              Copyright © 2018 Solitrade Group. All Rights Reserved.
            </Container>

          </Segment>
        </Responsive>
      )
    }
}

class MobileFooter extends Component {
    render() {

      return (
        <Responsive {...Responsive.onlyMobile}>
          <Segment inverted  vertical style={{ padding: '3em 0em', backgroundColor: '#2A2A2A'}}>
            <Container>
              <Grid divided inverted>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Header inverted as='h4' content='ABOUT SOLITRADE' />
                    <List inverted>
                      <List.Item>We support customers around the world by
                        offering a robust portfolio of the highest quality building
                        products.</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header inverted as='h4' content='SITE MAP' />
                    <List link inverted>
                      <List.Item as='a' href="/about">About Us</List.Item>
                      <List.Item as='a' href="/products">Products</List.Item>
                      <List.Item as='a' href="/community">Our Community</List.Item>
                      <List.Item as='a' href="/contact">Contact</List.Item>
                    </List>
                  </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>

                  <Grid.Column width={8}>
                    <Header inverted as='h4' content='PRODUCTS' />
                    <List link inverted>
                      <List.Item as='a' href="/products">Thermal and Accoustical Insulation</List.Item>
                      <List.Item as='a' href="/products" >Waterproofing Coatings and Systems</List.Item>
                      <List.Item as='a' href="/products">Glass and other products</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Header inverted as='h4' content='CONTACT' />
                    <List inverted>
                      <List.Item>
                        <Icon name='phone' />
                         +1-864-498-8691
                      </List.Item>
                      <List.Item>
                        <Icon name='mail' />
                         info@solitrade.com
                      </List.Item>
                      <List.Item>
                        <Icon name='point' />
                         CHARLOTTE, SC 28203 (USA)
                      </List.Item>
                    </List>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          <Segment color='black' inverted vertical style={{ padding: '2em 0em' }}>
            <Container textAlign='center'>
              Copyright © 2018 Solitrade Group. All Rights Reserved.
            </Container>

          </Segment>
        </Responsive>
      )
    }
}

const ResponsiveFooter = ({ children }) => (
  <div>
    <Footer>{children}</Footer>
    <MobileFooter>{children}</MobileFooter>
  </div>
)

export default ResponsiveFooter
