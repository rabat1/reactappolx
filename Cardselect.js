import React from 'react';
import fire from './firebase';
import Carousel from 'react-bootstrap/Carousel' ;
import Card from 'react-bootstrap/Card';
import Header from './Header'
import {Link} from 'react-router-dom';
import Footer from './footer.js';

import './index.css';

class Cardselect extends React.Component{
  constructor(props){
    super(props)
    this.state={
       obj: this.props.location.data.src,
       obj1: this.props.location.data.one,
       obj2: this.props.location.data.two,
       obj3: this.props.location.data.three,
       obj4: this.props.location.data.four,
      
       data:this.props.location.data
    }
   }
 
handleClick = value => () => {
  fire.database().ref('/').child("cart").push(value);
  alert('This product has addet to your cart')
};

    render(){
      
        
    return(
      
        <div>
          <Header />
          <Link to={{  pathname:"/cart",  } } >Check Cart</Link>
        <div className="container" >
            <div className="row" >
            <div className="container" >
                
                <img className="mainpic row" src='https://n3.sdlcdn.com/imgs/h/8/b/48MP_5MPDualRearCamera-ffd6a.jpg' />
                             </div>
              
                <div className="col-sm-8 col-med-8 colo-lg-8">
                <div class='container-fluid' >  
                       
                          <div className="row title" style={{ marginBottom: "20px" }} >  

                          <div class="col-sm-12 btn btn-dark">  

                          YOUR SELECTED PRODUCT IMAGES  

                         </div>  

                         </div>  

                         </div>  

                         <div className='container-fluid' >  

                         <Carousel  style={{ 'backgroundColor':'black'}} >  

                         <Carousel.Item >  

                         <img className="d-block" src={this.state.obj} id='ii' />  

                           <Carousel.Caption>  

                         
                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item >  

                                 <img className="d-block" src={this.state.obj} />  

                                       <Carousel.Caption>  

                                  
                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                       <Carousel.Item >  

                                       <img className="d-block" src= {this.state.obj} />  

                                        <Carousel.Caption>  

                         
                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  

                                </div>  
                                <div className="changeimagediv">
        <img src={this.state.obj3} onClick={(e)=> this.setState({obj:e.target.src})} className='changeimage'  />
        <img src={this.state.obj1} onClick={(e)=> this.setState({obj:e.target.src})} className='changeimage'  />
        <img src={this.state.obj2} onClick={(e)=> this.setState({obj:e.target.src})} className='changeimage'  />
        <img src={this.state.obj4} onClick={(e)=> this.setState({obj:e.target.src})}className='changeimage'  />
        </div>

<div className="container" style={{marginTop: '20px'}}>
  
<h3>Details</h3>
  <div className="row">
  
<div className="col-sm-6 col-md-6 col-lg-3">
<p>Make</p>
</div>
<div className="col-sm-6 col-md-6 col-lg-3">
    <p>{this.state.data.name}</p>
</div>
<div className="col-sm-6 col-md-6 col-lg-3">
<p>Condition</p>
</div>
<div className="col-sm-6 col-md-6 col-lg-3">
<p>Used</p>
</div>


  </div><hr />
  <div className="row">

<h3>Description</h3><br></br>
{this.props.location.data.details}  </div>


</div>



                                
      </div>

                
                <div className="col-sm-4 col-med-4 colo-lg-4">
<div className="container">
    <div className='row'>          
<Card className='selectcardbox'>
  <Card.Body>
    <Card.Title><b>Rs {this.props.location.data.price}</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{this.props.location.data.name}</Card.Subtitle>
    <Card.Text>
    Easy installment 20% dowan payment Easy installment 20% dowan payment 
    </Card.Text>
    <Card.Link><sub>Airport, Karachi.</sub></Card.Link>
    
  </Card.Body>
</Card>

</div>

<div className='row'>          
<Card className='selectcardbox' >
  <Card.Body>
    <Card.Title><b>Seller Description</b></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{this.props.location.data.name}</Card.Subtitle>
    <Card.Subtitle>
     
   <button className="btn btn-dark" style={{'width':'300px'}} onClick={this.handleClick(this.state.data)}>Add to Cart</button> 
   <Link to={{  pathname:"/cart",  } } >
   <button className="btn btn-dark" style={{'width':'300px'}} >Check Youur Cart</button> 
   </Link>
   </Card.Subtitle>
   <Card.Link><sub>Phone Number</sub></Card.Link>
    
  </Card.Body>
</Card>

</div>

<div className='row'>          
<Card className='selectcardbox' >
  <Card.Body>
    <Card.Title><b>Posted In</b></Card.Title>
   
   <Card.Link><sub>Phone Number</sub></Card.Link>
    
  </Card.Body>
</Card>

</div>


</div>
  
                </div> 

                </div>
                </div>
        
        <Footer />
    </div>
    )
    }
}
export default Cardselect;
