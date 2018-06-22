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
  Dropdown,
  Segment,
  Sidebar,
  Visibility,
  Flag
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-static'
import SimpleLogo from './simple_logo.png'
import Name from './name.png'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            style={{ padding: '0em 0em'}}
            vertical
            inverted
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' href='https://www.linkedin.com/company/solitrade-group'><Link href='https://www.linkedin.com/company/solitrade-group'> <Icon name='linkedin in'/></Link></Menu.Item>
                {/* <Menu.Item as='a' href='/'><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
                {/* <Menu.Item as='a' href=''><Flag name='es' /></Menu.Item>
                <Menu.Item as='a' href=''><Flag name='us' /></Menu.Item> */}
                <Menu.Item as='a' href='/'>HOME</Menu.Item>
                <Menu.Item as='a' href='/about'>ABOUT US</Menu.Item>
                <Menu.Item as='a' href='/products'>PRODUCTS</Menu.Item>
                <Dropdown text='OUR COMMUNITY' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item href='/community'>US</Dropdown.Item>
                    <Dropdown.Item href='/events'>EVENTS</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as='a' href='/contact' >CONTACT US</Menu.Item>
                {/* <Menu.Item>
                  <Icon name='phone'/> +1-864-498-8691
                </Menu.Item>
                <Menu.Item>
                  <Icon name='mail'/> info@solitrade.com
                </Menu.Item> */}
                <Menu.Item position='right'>
                  <Button as='a'  href="http://sales.solitrade.com" >
                    Log in
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            {/* <Menu.Item as='a' href='https://www.linkedin.com/company/solitrade-group'><Link href='https://www.linkedin.com/company/solitrade-group'> <Icon name='linkedin in'/></Link></Menu.Item> */}
            {/* <Menu.Item as='a' href='/'><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
            {/* <Menu.Item as='a' href=''><Flag name='es' /></Menu.Item>
            <Menu.Item as='a' href=''><Flag name='us' /></Menu.Item> */}
            <Menu.Item as='a' href='/'>HOME</Menu.Item>
            <Menu.Item as='a' href='/about'>ABOUT US</Menu.Item>
            <Menu.Item as='a' href='/products'>PRODUCTS</Menu.Item>
            <Menu.Item as='a' href='/community'>US</Menu.Item>
            <Menu.Item as='a' href='/events'>EVENTS</Menu.Item>
            <Menu.Item as='a' href='/contact' >CONTACT US</Menu.Item>

          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ padding: '0em 0em' }}
              vertical
              basic
            >
                <Menu inverted secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' size='large' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    {/* <Icon name='phone'/> +1-864-498-8691  /
                    <Icon name='mail'/> info@solitrade.com */}
                    <Image src={Name} size='small' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    {/* <Icon name='phone'/> +1-864-498-8691  /
                    <Icon name='mail'/> info@solitrade.com */}
                    <Image src={SimpleLogo} size='mini' />
                  </Menu.Item>
                </Menu>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
