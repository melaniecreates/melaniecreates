import React  from "react";
import ContactForm from './../../../contactForm/ContactForm.js';
import theme from './../../../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import TopNavigation from './../../../topNavigation/TopNavigation.js';
import './ShekoohPage.css';

const ShekoohPage = React.createClass ({ 
	render () {
	  return (
<ThemeProvider theme={theme}>
        <div>
          <TopNavigation flat={false} />
          <section className="shekoohPage mainContent whiteBg">
              <div className="contentPadding pageHeading">
                    <h1>ShekOoh</h1>
                    <p>2011 was the year of retail expansion for ‘ShekOoh’ - An Australian beachwear clothing line. This is my story of branding ShekOoh’s online image, and designing an eCommerse website for wholesale and retail purchases.</p>
                    <p className="gray">The information in this case study has been modified to reflect how the website should be designed in this modern age, with the latest UI/UX design principles, device responsiveness and technology.</p>
                </div>

                <section className="portfolioItemLandingImg">
                </section>
                
                <section className="whiteBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                        <h2>My Role</h2>
                        <p>I freelanced for ShekOoh between November 2011 and September 2012 in Sydney, Australia. I was initially responsible for designing and developing the business's new information website. I launched this website early 2012.</p>
                        <p>The client later returned and requested an eCommerce website design. I then designed the UI for an online store and prototyped the users experience.</p>
                        <p>I worked closely with the business owners on website goals, requirements, content strategy, branding, and design vision. Additionaly, I educated management on design principles and technical requirements.</p>
                      </div>
                    </section>
                  </div>
                </section>

                <section className="grayBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                       <h3>CUSTOMER BRAND AWARENESS</h3>
                        <p>In 2012, the company started creating more public awareness of their brand through fashion conventions. This required banners, brochures, postcards and flyers. I was responsible for delivering these high-quality print designs.</p>
                       <h3>IDENTIFYING THE LONG TERM GOAL</h3>
                       <p>The company's long term future goal was to have a web platform that facilitates clothing outlets to purchase the ShekOoh brand at wholesale. This also included, having a front-end interface available for public customers to make purchases.</p>

                       <p><q>Focusing on <strike>features</strike> goals and designing the website and functionality around those goals, rather than what may look shiny or attractive.</q></p>

                       <h3>ONLINE BRANDING</h3>
                       <p>We identified the companie's target marketing, and what was important to this audience. We also established business goals and what the final product would need to achieve.</p>


                      </div>
                    </section>
                  </div>
                </section>
                <section className="portImgFrame"><img src={require('./../../../../../images/shekooh-home-page.jpg')} /></section>
                
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

export default ShekoohPage;
