import React from 'react'
import ContentSlider from './ContentSlider';
const App = () => {
  const slides = [
    <div className="container5">
      <div className="inner-container">
        <div className="scale">
          <img className='Abhi' src="https://yt3.googleusercontent.com/Tuk7IzBF3U_jfi9u99LaXZEK02pTyaCDbXMzNIkXl1GQRYYlH2b1QGp9o0yJlJp8hfWp5FBvTA=s900-c-k-c0x00ffffff-no-rj" />
        </div>
        <div className="majopara">
          <div className="majority">
            <h4 className="majo">Majority</h4>
            <div className="scale2"></div>
          </div>
          <p className="para7">Lorem ,ipsum dolor sit amet consectecur adipisicing elit. Porro quis in , quibusdam sed dolores cum ipsum <br />recusandae , expedita ,
            consequatur libero minima hic tenetur dolore nemo fuga velit itaque.Quae facero nostrum laborum aliquam possimus sint perspiciates<br />
            prasentium velit.odit magnam ad animi aliquam sed molestiae dicta quibusdam in reprehenderit mollitia. </p>
        </div>
      </div>
    </div>,
    <div className="container5">
      <div className="inner-container">
        <div className="scale3">
          <img className='Abhi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAghvWiP54onL_UpYS0hXA7zmypgzr0FW6g&usqp=CAU" />
        </div>
        <div className="majopara">
          <div className="majority">
            <h4 className="majo">Landlord</h4>
            <div className="scale2"></div>
          </div>
          <p className="para7">Abhisek,RockStar sit on the Chair to the  adipisicing elit. Abhi the Rock Star, quibusdam sed dolores cum ipsum <br />recusandae , expedita ,
            consequatur libero minima hic tenetur dolore nemo fuga velit itaque.Quae facero nostrum laborum aliquam possimus sint perspiciates<br />
            prasentium velit.odit magnam ad animi aliquam sed molestiae dicta quibusdam in reprehenderit mollitia. </p>
        </div>
      </div>
    </div>,
    <div className="container5">
      <div className="inner-container">
        <div className="scale4">
          <img className='Abhi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRprunD2P4pCNkFXvOTu83hhGTuF4-f7EH6Vg&usqp=CAU" />
        </div>
        <div className="majopara">
          <div className="majority">
            <h4 className="majo">RockStar Abhi</h4>
            <div className="scale2"></div>
          </div>
          <p className="para7">Abhi the Rock star is very happy today. Porro quis in , quibusdam sed dolores cum ipsum <br />recusandae , expedita ,
            consequatur libero minima hic tenetur dolore nemo fuga velit itaque.Quae facero nostrum laborum aliquam possimus sint perspiciates<br />
            prasentium velit.odit magnam ad animi aliquam sed molestiae dicta quibusdam in reprehenderit mollitia. </p>
        </div>
      </div>
    </div>,
    <div className="container5">
      <div className="inner-container">
        <div className="scale5">
          <img className='Abhi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCf3BTNu5pcFAfI85H1msvUSSajTWim6gXyJmvQgLpJWlKX80MPE24TT__D7wIA9zn9gE&usqp=CAU" />
        </div>
        <div className="majopara">
          <div className="majority">
            <h4 className="majo">Abhi The Rockstar</h4>
            <div className="scale2"></div>
          </div>
          <p className="para7">Lorem ,ipsum dolor sit amet consectecur adipisicing elit. Porro quis in , quibusdam sed dolores cum ipsum <br />recusandae , expedita ,
            consequatur libero minima hic tenetur dolore nemo fuga velit itaque.Quae facero nostrum laborum aliquam possimus sint perspiciates<br />
            prasentium velit.odit magnam ad animi aliquam sed molestiae dicta quibusdam in reprehenderit mollitia. </p>
        </div>
      </div>
    </div>,
    <div className="container5">
      <div className="inner-container">
        <div className="scale6">
          <img className='Abhi' src="https://pbs.twimg.com/media/C_ORDhSXYAAroHk.jpg" />
        </div>
        <div className="majopara">
          <div className="majority">
            <h4 className="majo">Pragya(Fuggy)</h4>
            <div className="scale2"></div>
          </div>
          <p className="para7">Lorem ,ipsum dolor sit amet consectecur adipisicing elit. Porro quis in , quibusdam sed dolores cum ipsum <br />recusandae , expedita ,
            consequatur libero minima hic tenetur dolore nemo fuga velit itaque.Quae facero nostrum laborum aliquam possimus sint perspiciates<br />
            prasentium velit.odit magnam ad animi aliquam sed molestiae dicta quibusdam in reprehenderit mollitia. </p>
        </div>
      </div>
    </div>,
    <div className="container5">
      <div className="inner-container">
        <div className="scale7">
          <img className='Abhi' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdPGwgyjpvlSfshgKd925c7m6H4TwFUoB6A&usqp=CAU" />
        </div>
        <div className="majopara">
          <div className="majority">
            <h4 className="majo">Abhisek(Abhi)</h4>
            <div className="scale2"></div>
          </div>
          <p className="para7">Lorem ,ipsum dolor sit amet consectecur adipisicing elit. Porro quis in , quibusdam sed dolores cum ipsum <br />recusandae , expedita ,
            consequatur libero minima hic tenetur dolore nemo fuga velit itaque.Quae facero nostrum laborum aliquam possimus sint perspiciates<br />
            prasentium velit.odit magnam ad animi aliquam sed molestiae dicta quibusdam in reprehenderit mollitia. </p>
        </div>
      </div>
    </div>
  ];
  return (
    <>
      <div className='imgbox'>
        <div className='url'>
          <div className="nav">
            <h4 className="hnav">login</h4>
            <h4 className="hnav2">Sign Up</h4>
          </div>
          <div className="modern">
            <h1 className="darkblue">Modern</h1>
            <h1 className="Appartment">Appartment <br />House</h1>
            <p className="p1">It is a long established fact that a reader will be distracted by the <br />redeable content of</p>
            <button type='button' className="raad">READ MORE</button><br />
            <div className="form">
              <input className='input' type="text" placeholder='Search your categories' />
              <input className='input' type="text" placeholder='Location' />
              <button type='button' className="search">SEARCH</button>
            </div>
          </div>
        </div>
      </div><br /><br />
      <div className="haal">
        <img className='img1' src='https://images.adsttc.com/media/images/5b81/89b1/f197/cc4d/6c00/0037/medium_jpg/E_PHX7390.jpg?1535216043' />
        <div className="haal2">
          <div className="about">
            <h1 className="slas1">|</h1>
            <h2 className="h2">About Our Apartment</h2>
          </div>
          <p className='para1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phaseellus impardiet, nulla et dictum interdum ,<br /> nisi lorem egestas odio vitae scelerisque enim ligula venenatis dolor, Maecenas nisl est ,<br />  ultrices nec congue eget auctor vitae massa. Fusce luctus vestibulum augue ut aliquet .<br /> Mauris ante ligula, facilisis sed ornare eu ,sed ullamcorper ipsum dignissim ac,In at libero sed </p>
          <button type='button' className="readmore">READ MORE</button><br /><br /><br />
          <div className="House">
            <h1 className="slas1">|</h1>
            <h2 className="h2house">House For Sale</h2>
          </div>
          <p className='para2'>there are many variation of passages pf lorem</p>
        </div>
      </div>
      <div className="container">
        <div className="item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-RSt_3T53aF-ODbm5YUUkt2IfYLpbsqHBwA&usqp=CAU" className="img2" /><br /><br />
          <h3 className="h3house">Apartments House</h3>
          <p className="para3">There are many lorems available for searching the apartments</p>
        </div>
        <div className="item">
          <img src="https://images.adsttc.com/media/images/5b81/89e7/f197/cc4d/6c00/0039/newsletter/E_PHX7496.jpg?1535216097" className="img2" /><br /><br />
          <h3 className="h3house2">Apartments House</h3>
          <p className="para4">There are many lorems available for searching the apartments</p>
        </div>
        <div className="item">
          <img src="https://images.adsttc.com/media/images/5d95/0333/284d/d108/8e00/011a/newsletter/feature_-_5.jpg?1570046749" className="img2" /><br /><br />
          <h3 className="h3house2">Apartments House</h3>
          <p className="para4">There are many lorems available for searching the apartments</p>
        </div>
        <div className="item">
          <img src="https://www.home-designing.com/wp-content/uploads/2021/01/luxury-living-room-1.jpg" className="img2" /><br /><br />
          <h3 className="h3house">Apartments House</h3>
          <p className="para3">There are many lorems available for searching the apartments</p>
        </div>
        <div className="item">
          <img src="https://doctorscreen.com/wp-content/uploads/2018/03/screen_window.jpg" className="img2" /><br /><br />
          <h3 className="h3house2">Apartments House</h3>
          <p className="para4">There are many lorems available for searching the apartments</p>
        </div>
        <div className="item">
          <img src="https://images.adsttc.com/media/images/5bb5/974d/f197/cc52/ed00/026a/newsletter/screen%E2%80%93house%E2%80%93camberwell%E2%80%93renovation%E2%80%93by-warc-studio-architects-03.jpg?1538627394" className="img2" /><br /><br />
          <h3 className="h3house2">Apartments House</h3>
          <p className="para4">There are many lorems available for searching the apartments</p>
        </div>
      </div>
      <button type='button' className="findmore">FIND MORE</button><br /><br />
      <div className="pricing">
        <h1 className="slas1">|</h1>
        <h2 className="h2">Our Pricing</h2>
      </div>
      <p className="para5">There are many variation of passages of lorem korem morem norem</p>
      <div className="main">
        <div className="container2">
          <div className="card">
            <div className="topcard">
              <h2 className="num">01</h2>
              <h2 className='num'>BASIC</h2><br />
            </div>
            <div className="downcard"><br />
              <h2 className="num">$1000.00</h2><br />
              <p className="line">Lorem ipsum dolor<br /><br />sit amet consectetur<br /><br />adipiscing elit.Qui<br /><br />sapiente facere<br /><br />molestias itaque<br /><br />eligendi.</p><br />
            </div>
          </div>
          <div className="card">
            <div className="topcard">
              <h2 className="num">02</h2>
              <h2 className='num'>STANDARD</h2><br />
            </div>
            <div className="downcard1"><br />
              <h2 className="num">$3000.00</h2><br />
              <p className="line">Lorem ipsum dolor<br /><br />sit amet consectetur<br /><br />adipiscing elit.Qui<br /><br />sapiente facere<br /><br />molestias itaque<br /><br />eligendi.</p><br />
            </div>
          </div>
          <div className="card">
            <div className="topcard">
              <h2 className="num">03</h2>
              <h2 className='num'>PREMIUM</h2><br />
            </div>
            <div className="downcard"><br />
              <h2 className="num">$1000.00</h2><br />
              <p className="line">Lorem ipsum dolor<br /><br />sit amet consectetur<br /><br />adipiscing elit.Qui<br /><br />sapiente facere<br /><br />molestias itaque<br /><br />eligendi.</p><br />
            </div>
          </div>
        </div>
        <div className="btn-div">
          <button className="bt1">Buy Now</button>
          <button className="bt2">Buy Now</button>
          <button className="bt1">Buy Now</button>
        </div><br />
      </div>
      <div className="container3">
        <div className="crd1">
          <div className="deal">
            <h1 className="slas1">|</h1>
            <h2 className="h2">Very Good Deal For House</h2>
          </div><br />
          <p className="para6">Lorem ipsum dolor sit amet consectectur adipiscing elit<br />Delectus assumenda iusto itaque culpa ispa<br />ullam rem nuhil,officiis ,labore dolorem cumque dolor impedit<br />soluta omnis istbr , a illum facils sunt heyysbj skskl</p>
          <button type='button' className="bt3">Get A Quote</button>
        </div>
        <div className="crd2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdYZdp33qAzL-UlJYucyxffjrLKFNgGet1w&usqp=CAU" className="crdimage1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwdYZdp33qAzL-UlJYucyxffjrLKFNgGet1w&usqp=CAU" className="crdimage" />
        </div>
      </div><br />
      <div className="container4">
        <div className="chhose">
          <h1 className="slas1">|</h1>
          <h2 className="h2">Why Choose Us</h2>
        </div>
        <div className="icon-container">
          <img src="https://o.remove.bg/downloads/4a8ad674-ff32-4b63-8eda-a8fa542c0e2e/house_location-removebg-preview.png" className="icon-img" /><br />
          <img src="https://o.remove.bg/downloads/7dba51b3-c995-4b66-86bc-380a6791d5e9/notepad-removebg-preview.png" className="icon-img" /><br />
          <img src="https://o.remove.bg/downloads/ac48d05b-7bcc-4c79-a58a-6426afa364c5/user1-removebg-preview.png" className="icon-img" /><br />
          <img src="https://o.remove.bg/downloads/b8905dba-ec79-43bd-9fbc-663f27651919/icon2-removebg-preview.png" className="icon-img" /><br />
        </div>
        <div className="line-of-code">
          <h6>1000+<br />Years of House</h6>
          <h6>20000+<br />Projects Delivered</h6>
          <h6>10000+<br />Satisfied Customers</h6>
          <h6>1500+<br />Cheap Raters</h6>
        </div><br />
        <button type='button' className="bt6">Get A Quote</button><br /><br />
      </div><br />
      <div className="says">
        <h1 className="slas1">|</h1>
        <h3 className="h2">What is Says Our Customers</h3>
      </div><br /><br />
      <div className="Container">
        <ContentSlider slides={slides} />
      </div>
      <br />
      <div className="touch">
        <h1 className="slas1">|</h1>
        <h3 className="h2">Get in Touch</h3>
      </div><br />
      <div className="container7">
        <div className="form2">
          <input type='text' className='inputform' placeholder='Name' /><br />
          <input type='text' className='inputform' placeholder='Email' /><br />
          <input type='text' className='inputform' placeholder='Phone Number' /><br />
          <input type='text' className='inp-description' placeholder='Message' /><br />
          <button type='button' className='bt-send'>Send</button>
        </div><br /><br />
        <div className="footer">
          <div className="footer1">
            <h5 className="aboutap">About Apartment</h5>
            <div className="address-icon-container">
              <img className='img-icon' src="https://o.remove.bg/downloads/81a18ad5-3cb9-443f-8bd4-741760acb140/location-removebg-preview.png" />
              <h6 className='text-style'>Address</h6>
            </div>
            <div className="address-icon-container">
              <img className='img-icon' src="https://o.remove.bg/downloads/4f4171cb-bece-4983-8e1d-074a57b74649/Mpobile2-removebg-preview.png" />
              <h6 className='text-style'>+91-75863879</h6>
            </div>
            <div className="address-icon-container">
              <img className='img-icon' src="https://o.remove.bg/downloads/c07bf739-388d-41ec-9e4a-565d653584b1/Email-removebg-preview.png" />
              <h6 className='text-style'>demo@gmail.com</h6>
            </div>
          </div>
          <div className="footer1">
            <h5 className="aboutap">Information</h5>
            <p className='para-info'>Lorem ipsum dolor, sit amet<br />consectaur adipisiting elit , Eaque,<br />dignissiomns</p>
          </div>
          <div className="footer1">
            <h5 className="aboutap">Useful Link</h5>
            <p className='para-info'>Lorem ipsum dolor, sit amet<br />consectaur adipisiting elit , Eaque,<br />dignissiomns</p>
          </div>
          <div className="footer1">
            <input type='text' className='footer1-input' placeholder='Enter Your Email' /><br />
            <button type='button' className='btn-footer'>Subscribe</button><br /><br />
            <div className="i-footer">
              <img className='img-icon2' src="https://o.remove.bg/downloads/406ba064-5fc6-44ba-b8cd-7116cf363df7/Facebook-logo-removebg-preview.png" />
              <img className='img-icon1' src="https://o.remove.bg/downloads/76adace1-0e85-4e52-8030-e0f1996ab073/link-removebg-preview.png" />
              <img className='img-icon1' src="https://o.remove.bg/downloads/1f43cf30-b91f-4fee-b7ff-d7ab6212e60c/tw-removebg-preview.png" />
              <img className='img-icon1' src="https://o.remove.bg/downloads/1bcec7ed-33e4-4092-bf4c-46799ef87cf4/yt-removebg-preview.png" />
            </div>
          </div>
        </div><br />
        <div className="hr">
        </div><br />
        <h6 className='end'>@2023 all Rights Reserved.Free html Templates.</h6>
      </div>
    </>
  )
}
export default App;