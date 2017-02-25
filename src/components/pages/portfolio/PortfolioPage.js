import React  from "react";
import Card from 'react-toolbox/lib/card/Card';
import CardTitle from 'react-toolbox/lib/card/CardTitle.js';
import CardMedia from 'react-toolbox/lib/card/CardMedia.js';
import CardActions from 'react-toolbox/lib/card/CardActions.js';
import CardText from 'react-toolbox/lib/card/Card';
import theme from './../../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import TopNavigation from './../../topNavigation/TopNavigation.js';
import './PortfolioPage.css';
import ContactForm from './../../contactForm/ContactForm.js';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

const PorfolioPage = React.createClass ({ 
	render () {
	  return (
      <ThemeProvider theme={theme}>
        <div>
          <TopNavigation flat={false} />
    	  	<section className="portfolioPage">
    	        <div className="pageHeader mainContent">
                
                  <Card className="portfolioItem">
                    <ul>
                      <li><img className="portfolioImg" src={require('./../../../../images/grow-thumb.gif')} /></li>
                      <li className="txt">
                        <h2>Invest with Grow</h2>
                        <p>Invest with Grow. Environmentally substainable good governance.</p>
                        <p><Link to="/portfolio/grow">Read More</Link></p>
                      </li>
                    </ul>
                  </Card>
                  <Card className="portfolioItem">
                    <ul>
                      <li><img className="portfolioImg" src={require('./../../../../images/paypal-thumb.gif')} /></li>
                      <li className="txt">
                        <h2>Paypal Corp.</h2>
                        <p>Designing with Goggle's Material UI and developing with Facebooks React JS.</p>
                        <p><Link to="/portfolio/paypal">Read More</Link></p>
                      </li>
                    </ul>
                  </Card>

                  <Card className="portfolioItem">
                    <ul>
                      <li><img className="portfolioImg" src={require('./../../../../images/all-fashionista-thumb.jpg')} /></li>
                      <li>
                        <div className="txt">
                          <h2>All Fashionista</h2>
                          <p>Magento eCommerce website design and development</p>
                          <p><Link to="/portfolio/af">Read More</Link></p>
                        </div>
                      </li>
                    </ul>
                  </Card>

                  <Card className="portfolioItem">
                    <ul>
                      <li><img className="portfolioImg" src={require('./../../../../images/eco-reserve-thumb.jpg')} /></li>
                      <li>
                        <div className="txt">
                          <h2>Eco Reserve</h2>
                          <p>Developing the front end of a...</p>
                          <p><Link to="/portfolio/eco">Read More</Link></p>
                        </div>
                      </li>
                    </ul>
                  </Card>
                  <Card className="">
                     <CardTitle
                        title="Shekooh"
                      />
                      <CardMedia
                        image="{require('./../../../../images/shekooh-thumb.jpg')}"
                      />
                  </Card>
                  <Card className="portfolioItem">
                    <ul>
                      <li><img className="portfolioImg" src={require('./../../../../images/soul-thumb.jpg')} /></li>
                      <li>
                        <div className="txt">
                          <h2>Soul</h2>
                          <p>Developing the front end of a...</p>
                          <p><Link to="/portfolio/soul">Read More</Link></p>
                        </div>
                      </li>
                    </ul>
                  </Card>

                <ContactForm />



    	        </div>
    		    </section>
          </div>
        </ThemeProvider>
	  );
	}
});

export default PorfolioPage;
