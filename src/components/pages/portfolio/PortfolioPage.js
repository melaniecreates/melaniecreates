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
                    <CardMedia className="itemImg"
                      aspectRatio="wide"
                      image={require('./../../../../images/grow-thumb.gif')}
                    >
                    <CardTitle className="txt"
                      title="Invest with Grow"
                      subtitle="Invest with Grow. Environmentally substainable good governance.">
                      <CardActions>
                        <Link to="/portfolio/grow">Read More</Link>
                      </CardActions>
                    </CardTitle>
                    </CardMedia>
                  </Card>

                  <Card className="portfolioItem">
                    <CardMedia className="itemImg"
                      aspectRatio="wide"
                      image={require('./../../../../images/paypal-thumb.gif')}
                    />

                    <CardTitle className="txt"
                      title="Paypal Corp."
                      subtitle="Designing with Goggle's Material UI and developing with Facebooks React JS."
                    />
                    <CardActions>
                      <Link to="/portfolio/paypal">Read More</Link>
                    </CardActions>
                  </Card>

                  <Card className="portfolioItem">
                    <CardMedia  className="itemImg"
                      aspectRatio="wide"
                      image={require('./../../../../images/all-fashionista-thumb.jpg')}
                    />
                    <CardTitle className="txt"
                      title="All Fashionista"
                      subtitle="Magento eCommerce website design and development">
                      <CardActions>
                        <Link to="/portfolio/af">Read More</Link>
                      </CardActions>
                    </CardTitle>
                  </Card>

                  <Card className="portfolioItem">
                    <CardMedia className="itemImg"
                      aspectRatio="wide"
                      image={require('./../../../../images/eco-reserve-thumb.jpg')}
                    />
                    <CardTitle className="txt"
                      title="Eco Reserve"
                      subtitle="Developing the front end of a..."
                    />
                    <CardActions>
                      <Link to="/portfolio/eco">Read More</Link>
                    </CardActions>
                  </Card>

                  <Card className="portfolioItem shekooh">
                    <CardMedia className="itemImg"
                      aspectRatio="wide"
                      image={require('./../../../../images/shekooh-thumb.jpg')}
                    />

                    <CardTitle className="txt"
                      title="Invest with Grow"
                      subtitle="Invest with Grow. Environmentally substainable good governance."
                    />
                    <CardActions>
                      <Link to="/portfolio/shekooh">Read More</Link>
                    </CardActions>
                  </Card>

                  <Card className="portfolioItem shekooh"  contentOverlay="true">
                    <CardMedia className="itemImg"
                      aspectRatio="wide"
                      image={require('./../../../../images/soul-thumb.jpg')}
                    />

                    <CardTitle className="txt"
                      title="Invest with Grow"
                      subtitle="Invest with Grow. Environmentally substainable good governance."
                    />
                    <CardActions>
                      <Link to="/portfolio/shekooh">Read More</Link>
                    </CardActions>
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
