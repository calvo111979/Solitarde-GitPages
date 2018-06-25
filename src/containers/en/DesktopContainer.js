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
import SimpleLogo from './../images/simple_logo.png'
import Name from './../images/name.png'
import SideLogo from './../images/sidenamelogo.png'
import FavIcon from './../images/simple_logo.png'
import Favicon from 'react-favicon';

class Layout extends React.Component {
  constructor(props){
    super(props);
    document.title = this.props.title;
  }
  render(){
    return(
      <div>
      </div>
    );
  }
}


class TabletContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyTablet}>
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
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
              // fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              // pointing={!fixed}
              inverted
              secondary={!fixed}
              size='medium'
            >
              <Menu.Item as='a' href='https://www.linkedin.com/company/solitrade-group'><Link href='https://www.linkedin.com/company/solitrade-group'> <Icon name='linkedin in'/></Link></Menu.Item>
              <Menu.Item as='a' href='/'><Flag name='us' /></Menu.Item>
              <Menu.Item as='a' href='/es'><Flag name='es' /></Menu.Item>

              <Menu.Item position='right'>
                <Icon name='phone'/> +1-864-498-8691
              </Menu.Item>
              <Menu.Item>
                <Icon name='mail'/> info@solitrade.com
              </Menu.Item>
              <Menu.Item>
                {/* <Image src={SideLogo} size='small' /> */}
                <Button as='a'  href="http://sales.solitrade.com" >
                  Log in
                </Button>
              </Menu.Item>
              {/* <Menu.Item style={{ right: '0px'}}>
                <Image src={SideLogo} size='small' />
              </Menu.Item> */}
            </Menu>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              size='medium'
            >

              <Container>
                {/* <Menu.Item as='a' href='/'><Image src='http://solitrade.com/images/logo-1.png' size='tiny'/></Menu.Item> */}
                {/* <Menu.Item as='a' href=''><Flag name='es' /></Menu.Item>
                <Menu.Item as='a' href=''><Flag name='us' /></Menu.Item> */}
                <Menu.Item as='a' href='/' position='right'>HOME</Menu.Item>
                <Menu.Item as='a' href='/about'>ABOUT US</Menu.Item>
                <Menu.Item as='a' href='/products'>PRODUCTS</Menu.Item>
                <Dropdown text='OUR COMMUNITY' pointing className='link item'>
                  <Dropdown.Menu>
                    <Dropdown.Item href='/community'>US</Dropdown.Item>
                    <Dropdown.Item href='/events'>EVENTS</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item as='a' href='/contact' >CONTACT US</Menu.Item>

                <Menu.Item position='right'>
                  <Image src={SimpleLogo} size='mini' />
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

TabletContainer.propTypes = {
  children: PropTypes.node,
}


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
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
              // fixed={fixed ? 'top' : null}
              // inverted={!fixed}
              // pointing={!fixed}
              inverted
              secondary={!fixed}
              size='large'
            >
              <Menu.Item as='a' href='https://www.linkedin.com/company/solitrade-group'><Link href='https://www.linkedin.com/company/solitrade-group'> <Icon name='linkedin in'/></Link></Menu.Item>
              <Menu.Item as='a' href='/'><Flag name='us' /></Menu.Item>
              <Menu.Item as='a' href='/es'><Flag name='es' /></Menu.Item>

              <Menu.Item position='right'>
                <Icon name='phone'/> +1-864-498-8691
              </Menu.Item>
              <Menu.Item>
                <Icon name='mail'/> info@solitrade.com
              </Menu.Item>
              <Menu.Item>
                {/* <Image src={SideLogo} size='small' /> */}
                <Button as='a'  href="http://sales.solitrade.com" >
                  Log in
                </Button>
              </Menu.Item>
              {/* <Menu.Item style={{ right: '0px'}}>
                <Image src={SideLogo} size='small' />
              </Menu.Item> */}
            </Menu>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              // pointing={!fixed}
              // secondary={!fixed}
              size='large'
            >
              <Container>
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
                <Menu.Item position='right' style={{ right: '0px'}}>
                  <Image src={SideLogo} size='small' />
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
        {/* <Favicon url={Favicon} /> */}
        <Layout title="Solitrade Group"/>
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
            <Menu.Item as='a' href='/'><Flag name='us' /></Menu.Item>
            <Menu.Item as='a' href='/es'><Flag name='es' /></Menu.Item>

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
    <TabletContainer>{children}</TabletContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
