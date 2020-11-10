import React from 'react';
import {Link} from 'react-router-dom';




class Footer extends React.Component {
  render() {
    return (
      <div className="container" style={{marginTop:"40px"}}>

<div className="row">
          <div className='col-sm-6 col-lg-2'>
<b>Popular Categories</b>
          </div>
          <div className='col-sm-6 col-lg-2'>
          <b>Trending searches</b>
</div>
          <div className='col-sm-6 col-lg-2'>
          <b>About Us</b>
   </div>
            <div className='col-sm-6 col-lg-2'>
            <b>OLX</b>
    </div>
            <div className='col-sm-6 col-lg-4'>
            <b>Follow Us</b>
  </div>
      


        </div>



        <div className="row">
          <div className='col-sm-6 col-lg-2'>
Cars
          </div>
          <div className='col-sm-6 col-lg-2'>
            Bikes
          </div>
          <div className='col-sm-6 col-lg-2'>
          <Link to={{  pathname:"/About" }}>About</Link>
     </div>
            <div className='col-sm-6 col-lg-2'>
            Help
            </div>
            <div className='col-sm-6 col-lg-2'>
            facebook,twitter,whatsapp
            </div>
      


        </div>
        <div className="row">
          <div className='col-sm-6 col-lg-2'>
Cars
          </div>
          <div className='col-sm-6 col-lg-2'>
            Bikes
          </div>
          <div className='col-sm-6 col-lg-2'>
            About OLX Group
            </div>
            <div className='col-sm-6 col-lg-2'>
            Help
            </div>
            <div className='col-sm-6 col-lg-2'>
            facebook,twitter,whatsapp
            </div>
      


        </div>
        <div className="row">
          <div className='col-sm-6 col-lg-2'>
Cars
          </div>
          <div className='col-sm-6 col-lg-2'>
            Bikes
          </div>
          <div className='col-sm-6 col-lg-2'>
            About OLX Group
            </div>
            <div className='col-sm-6 col-lg-2'>
            Help
            </div>
            <div className='col-sm-6 col-lg-2'>
            facebook,twitter,whatsapp
            </div>
      


        </div>


          </div>
    );
  }
}

export default Footer;
