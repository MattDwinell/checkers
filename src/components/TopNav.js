import {Navbar, Nav,Col , Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './../images/checkers_piece_icon.PNG';
const TopNav = () => {
    return (
<Navbar  bg="light" expand="sm" className = 'style-nav-bar' >

  <Navbar.Brand> 
      <Link exact to='/'><div className = 'logo-holder'> <img src = {logo} alt='checkers logo'/></div></Link>
       </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Row>
    <Nav defaultActiveKey = '/' className="mr-auto">
      <Col md={4}><Nav.Item>
      <Nav.Link ><Link className='top-nav-link' exact to='/' >Home</Link> </Nav.Link>           
       </Nav.Item>
       </Col> 
       <Col md={4}><Nav.Item>
      <Nav.Link ><Link className='top-nav-link' exact to='/rules' >Rules</Link> </Nav.Link>           
       </Nav.Item>
       </Col>
       <Col md={4}>
       <Nav.Item>
      <Nav.Link><Link className='top-nav-link' to='/about'>About</Link></Nav.Link>           
       </Nav.Item>
       </Col>
       <Col md={4}>
       <Nav.Item>
        <Nav.Link><Link className='top-nav-link' to='/preferences'>Preferences</Link></Nav.Link>   
       </Nav.Item>
       </Col>
    </Nav>
      </Row>
  </Navbar.Collapse>
</Navbar>
    )
}

export default TopNav
