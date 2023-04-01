import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo}
              width="80"
              height="60"
            />
          </Navbar.Brand>
          <Container>
          <Navbar.Brand>Rick And Morty Api</Navbar.Brand>
        </Container>
        </Container>
      </Navbar>

    </>
  )
}

export default Home;