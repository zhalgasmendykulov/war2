import { Button, Container, Nav, Navbar} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export default function Header({user, logoutHandler}) {
  const navigate = useNavigate() 
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" style={{ borderRadius: '10px', width: '100%', display: 'flex', flexDirection: 'column', height: '200px', justifyContent: 'space-around'
    }}>

      <Container>
        
        <Navbar.Brand href="/">
        <h1>Signature Time 
        </h1> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/watches">Часы</Nav.Link>
            {!user &&(
              <>
              <Nav.Link href="/account/register">Регистрация</Nav.Link>
            <Nav.Link href="/account/login">Войти</Nav.Link>
            
            </>
            )}
            <span className="nav-link">
            {user ? user.name : 'Гость'}
          </span>
          {user && (<>
            <Nav.Link href="/account/application">Оставить заявку</Nav.Link>
            <span className="nav-link">
              <Button onClick={ logoutHandler } href="/account/login" variant="outline-danger" size="sm">
                Выйти
              </Button>
            </span></>
          )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div><h4>Часы ручной работы</h4></div>
    </Navbar>
 

          </>
  )
}
