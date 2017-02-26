import React  from "react";
import ContactForm from './../../../contactForm/ContactForm.js';
import theme from './../../../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import TopNavigation from './../../../topNavigation/TopNavigation.js';
import './AfPage.css';

const AfPage = React.createClass ({ 
	render () {
	  return (
      <ThemeProvider theme={theme}>
        <div>
          <TopNavigation flat={false} />
    	  	<section className="afPage mainContent">
    	        <div className="contentPadding pageHeading">
                    <h1>All Fashionista</h1>
                    <p>In 2011, I decided to try my luck at selling retail products online. This is my story of designing, developing and maintaining ‘All Fashionista’ - a fully functioning eCommerce online store.</p>
                    <p className="gray">The information in this case study has been modified to reflect how the website should be designed in this modern age, with the latest UI/UX design principles, device responsiveness, and technology.</p>
                </div>

                <section className="portfolioItemLandingImg">
                   <img src={require('./../../../../../images/af-landing-img.jpg')} />
                </section>
                
                <section className="whiteBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                        <h2>My Role</h2>
                        <div className="multiColumn">
                          <p className="firstcharacter">This project took place between February 2011 and January 2013 in Sydney, Australia. <strong>I designed</strong> the interface, <strong>developed</strong> the website, and managed everything as a store owner. I controlled everything from sourcing products, administration and customer support.</p>
                          <p>I worked remotely with Jeremy Graham, a senior Magento eCommerce developer at Doghouse media. He directed me through best practices and coding techniques.</p>
                          <p>I was <strong>responsible for</strong> online branding, user interface design, user experience prototyping, front-end development, Magento configuration and installation, product catalog administration, and inventory for ‘All Fashionista’—a Magento eCommerce online store.</p>
                        </div>
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

                <section className="portImgFrame productpgImg"> <img src={require('./../../../../../images/af-productpg.jpg')} /></section>

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
                  <section className="responsiveImgs">
                      <img className="responsiveTablet" src={require('./../../../../../images/af-tablet-version.png')} />
                      <img className="responsiveMobile" src={require('./../../../../../images/af-mobile-version.png')} />
                  </section>
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

export default AfPage;
