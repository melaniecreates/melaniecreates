import React  from "react";
import ContactForm from './../../../contactForm/ContactForm.js';
import theme from './../../../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import TopNavigation from './../../../topNavigation/TopNavigation.js';
import './EcoPage.css';

const EcoPage = React.createClass ({ 
	render () {
	  return (
     <ThemeProvider theme={theme}>
        <div>
          <TopNavigation flat={false} />
          <section className="ecoPage mainContent">
              <div className="contentPadding pageHeading">
                    <h1>Eco Reserve</h1>
                    <p>The rainforests burning alone causes an estimated 20% of the carbon dioxide emissions. Species are going extinct 1,000 times faster. Additionally, many of the world’s poorest people live near ecologically sensitive lands and they need a way to make a sustainable living.</p>
                    <p>ecoReserve’s aim was to provide a web platform that connects individuals to land conservation projects. People were then able to select a parcel on an interactive map and create a reserve. These users were then able to manage, add or track purchased parcels through their user account. This is my story of developing the front-end for ecoReserve.</p>
                </div>

                <section className="portfolioItemLandingImg">
                   <img src={require('./../../../../../images/eco-reserve-landing.jpg')} />
                </section>
                
                <section className="whiteBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                        <h2>My Role</h2>
                        <p>I worked for ecoReserve between February 2010 and September 2011, as a front-end web developer. I worked remotely in Sydney, Australia. I corresponded and collaborated with management and the development team in San Francisco and India. I developed the front-end using HTML, CSS and JavaScript/Jquery. My code was then integrated into the web platform by the Indian team.</p>
                        <p>I was lucky enough to have the privilege of working with the talented senior developer ‘Mary Haynes’ on coding the UI, and a great management team.</p>
                        <p>I was also responsible for designing and developing electronic emails, and redesigning the UI to accommodate for technical limitations.</p>
                      </div>
                    </section>
                  </div>
                </section>

                <section className="grayBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                       <h2><small>Goals</small><br />Conservation/ Restoration</h2>
                        <p>The website was to enable people to pick an area of land in Panama that was available for restoration and conservation. They would then be able to donate money to help restore and protect the endangered land.</p>
                        <p><q>Thinking about the true goals of the website. Rather than focusing on cool looking functionality which distracts the user from its true purpose.</q></p>
                        <p>For the project to be a success in the long term, there would need to be a large population of continual donators.</p>
                      </div>
                    </section>
                  </div>
                </section>
                
                <section className="whiteBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                        <h2>THE CHALLENGES</h2>
                        <h3>TECHNICAL LIMITATIONS</h3>
                        <p>We were developing the website from UI mockups created by an external design company. In one of the designs, the pre-purchased parcel when selected was to navigate to its exact location on the map (as demonstrated below in figure 1.)</p>
                        <p>The mockups displayed the parcel square as visible within a black box. This technically, would mean poking a hole through an HTML DIV or having a small square section completely transparent within the box - neither is something that is technically possible.</p>
                          <p><q>I designed a simple and clear solution to overcome this technical limitation.</q></p>
                          <ul>
                            <li> 
                              <img className="magentoDevImg" src={require('./../../../../../images/eco-tech-limit.png')} />
                              <p className="gray">(Figure 1. Mockup provided from external design company.)</p>
                            </li>
                            <li>
                               <img className="magentoDevImg" src={require('./../../../../../images/eco-tech-limit-solution2.png')} />
                               <p className="gray">(Figure 1. Technical solution to problem in mockup.)</p>
                            </li>
                          </ul>
                          <p>I designed a simple and clear solution. Instead, I suggested we take the parcel out of the information box and point directly to the parcel with an arrow. This solution was not only technically viable, but also helped remove any user ambiguity. The user knew exactly where they were purchasing the parcel on the map.</p>
                          <h3>WORKING REMOTELY</h3>
                          <p>I found that working remotely with the back-end development team in India was also a challenge. We noticed, communication and clarity on what has and needs to be done became fuzzy quickly due to the language barrier. I overcame this problem by establishing a friendship and trust with the developers and having daily communication on progress, requirements, and concerns.</p>
                          <h3>FUNDING A GOOD CAUSE</h3>
                          <p>Generally, startups face financial challenges in the beginning as the project's funding runs short quickly. Unfortunately, the project had to be put on hold before completion until more investors would contribute. This project was non-profit based and funding was limited.</p>
                       </div>
                    </section>
                  </div>
                </section>

                <section className="grayBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                        <h2><small>THE DELIVERABLES</small><br />CODING THE WEBSITE</h2>
                        <p>I used HTML, CSS and JavaScript/Jquery to program sections of the website’s front-end. My code was then given to the development team in India to merge into the website's platform.</p>
                        <img className="magentoDevImg" src={require('./../../../../../images/eco-reserve-home.jpg')} />
                        <img className="magentoDevImg" src={require('./../../../../../images/eco-coding.gif')} />
                        <h3>DESIGNING MARKETING ELECTRONIC EMAILS</h3>
                        <p>I also designed electronic emails. These were used to connect with customers, promote awareness, and establish more users on the website.</p>
                        <img className="magentoDevImg" src={require('./../../../../../images/eco-reserve-mailer.jpg')} />


                        
                       </div>
                    </section>
                  </div>
                </section>

                <section className="whiteBg">
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

                <section className="grayBg">
                  <div className="txtAreaWrap">
                    <section className="txtArea">
                      <div className="txt">
                          <h2><small>THE IMPACT</small><br />ENVIRONMENTAL AWARENESS & RESPONSIBILITY</h2>
                          <p>Despite project funding challenges. Just imagine, EcoReserve eventually creating a web platform that handles the adding of ALL the endangered land from around the world. Enabling ANY person of any means, to select one of these locations and provide donations and support.</p>
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

export default EcoPage;
