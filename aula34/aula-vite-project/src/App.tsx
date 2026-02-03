
import './App.css'
import Card from './components/Card'
//import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

const styles = {
  width: "100vw", 
  height: "100vh", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center"
}



function App() {


  return (
    <div style={ styles }>
      <Card 
        title="Frontend2 & SEO"
        description="Welcome to the Frontend2 & SEO course where we are going to learn about React" 
        profilePic="https://t4.ftcdn.net/jpg/02/72/31/41/360_F_272314124_oVQMMZWHwOPYsmCASwjRcFuZhSa4jqzO.jpg"
        />
    </div>
  )
}

export default App

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>