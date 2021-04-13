import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import logo from './../images/checkers_piece_icon.PNG';
const TopNav = () => {
    return (
<Navbar fill bg="light" expand="sm" className = 'style-nav-bar' >

  <Navbar.Brand> 
      <Link exact to='/'><div className = 'logo-holder'> <img src = {logo}/></div></Link>
       </Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav defaultActiveKey = '/' fill='true' className="mr-auto">
       <Nav.Item>
      <Nav.Link ><Link className='top-nav-link' exact to='/' >Home</Link> </Nav.Link>           
       </Nav.Item>
       <Nav.Item>
      <Nav.Link><Link className='top-nav-link' to='/about'>About</Link></Nav.Link>           
       </Nav.Item>
       <Nav.Item>
        <Nav.Link><Link className='top-nav-link' to='/preferences'>Preferences</Link></Nav.Link>   
       </Nav.Item>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default TopNav
