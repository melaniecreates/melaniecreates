import React  from "react";
import ContactForm from './../../../contactForm/ContactForm.js';
import theme from './../../../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import TopNavigation from './../../../topNavigation/TopNavigation.js';
import './GrowPage.css';

const PorfolioPage = React.createClass ({ 
	render () {
	  return (
      <ThemeProvider theme={theme}>
        <div>
          <TopNavigation flat={false} />
          <section className="growPage mainContent">
              <div className="contentPadding pageHeading">
                    <h1>Invest with Grow</h1>
                    <p>Since 2016, I have been freelancing for Grow, and working on all their three brands. Grow Capital, Grow Invest and Grow Anayltics. This is my story of designing, developing for ‘Grow’ -  A environmentally, sustainable good governance ESG investment company</p>
                    <p><strong>Grow case study coming soon to this section. 
Stay Tuned!</strong></p>
                    <p className="gray">See below for a brief overview of the project. Including my skills and responsiblities.</p>
                </div>

                <section className="portfolioItemLandingImg">
                   <img src={require('./../../../../../images/grow-landing.jpg')} />
                </section>
                
                <section className="whiteBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                        <h2>My Role</h2>
                        <p>My freelancing projects with Grow took place between August 2016 till current in San Francisco, California. <strong>I designed </strong>  interfaces for <a href="">growcapital.us</a> and <a href="">growinvest</a> <strong>developed</strong> the website<a href="">growinvest.us</a> and <a href="">growcapital.us</a>. </p>
                      </div>
                    </section>
                  </div>
                </section>

                <section className="grayBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                       <h2>Branding &amp; UI Design</h2>
                        <p>I carefully selected color schemes and design styles that would not clash or distract the user from the products and their images. I created mockups and storyboards to communicate my vision. As my products and target market changed, I redesigned the store appropriately.</p>
                        <img className="scheme" src={require('./../../../../../images/af-color-scheme.png')} />
                      </div>
                    </section>
                  </div>
                </section>
                <section className="portImgFrame"><img src={require('./../../../../../images/af-homepage.jpg')} /></section>
                
                <section className="grayBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                        <h2>User Experience &amp; Strategy</h2>
                        <p>I initially created wireframes to help map out my vision, navigation, design principles, catalog hierarchy, and content strategy. I examined customer behaviours and motivations, and continually redesigned the UI to reflect my findings, improve the users’ experience, and increase sales.</p>
                          <div className="hierachyImg"><img src={require('./../../../../../images/catalog-hierachy.png')} /></div>
                       </div>
                    </section>
                  </div>
                </section>


                <section className="whiteBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                       <h2>Magento Configuration &amp; Management</h2>
                        <p>I configure the site through the admin dashboard after installing Magento on the server. I built product types and attributes, created the catalog database, configured payment information, and configured all other required settings to have a fully functioning website that accepts customer payments</p>
                        <p>I also, sourced and negotiated inventory with local and international suppliers, and distributed the products to customers</p>
                        
                        <img className="magentoDevImg" src={require('./../../../../../images/magento-development-img.gif')} />
                       </div>
                    </section>
                  </div>
                </section>

                <section className="grayBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                        <h2><small>The Challenge</small><br />Small Fish in a big pond</h2>
                        <p>As customers were moving away from physically shopping at the mall and moving more towards online shopping. I decided that creating my own brand and building an online store was a great way to tap into this profitable market.</p>
                        <p>My challenge was competing with already big brands dominating the online shopping industry. It became apparent that I needed to find a product niche that set me apart from the rest. I needed to sell products that were unique, but still in high demand.</p>
                        <p>The user's interface had to be engaging and create a sense of trust. I analysed customer behaviours and motivations, and continually improved the UI based on these findings.</p>
                       </div>
                    </section>
                  </div>
                </section>
                <section className="grayBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                          <h2><small>Todays requirements</small><br />Mobile Responsive</h2>
                          <p>We are no longer in the day and age when it is ok to design and develop a website for one screen size. It is now vital that we develop websites that are responsive across all devices. We need content to be displayed correctly on desktops, tablets, and mobile phones. Responsive design requires the use of breakpoints and responsive coding of images and content. Content should be well thought out and simplified on smaller screens, as to accommodate for the lack of screen space.</p>
                          <div className="quote"><q>Your business will be more trusted and on edge than your competitors, through responsive design and content strategy.</q></div>
                          <p>Let's say we have two business. The first business provides better services than the second. However, this business has not taken the time and resources to redesign their content and make their website responsive across all mobile devices. The second business has taken the time and resources. Customers will generally go with the company that has the better website. Hence, why the second business will generally do better in the long run than the first, despite the first providing the better service.</p>
                       </div>
                    </section>
                  </div>
                </section>
                

                

                <section className="whiteBg">
                  <ContactForm />
                </section>

            </section>
          </div>
        </ThemeProvider>
	  );
	}
});

export default PorfolioPage;
