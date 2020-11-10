import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardGroup';
class Products extends React.Component {
  render() {
      
    return (
      <>
      {this.props.brand.map((data,id)=>{
        return  <div className="container" key={id}>
        <Card style={{display:"inline"}}>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Price : {data.price} </Card.Title>
            <Card.Text>
            I am a {data.name}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
       </div>
     
      })}
  
      </>
    );
  }

       
    }

export default Products;
