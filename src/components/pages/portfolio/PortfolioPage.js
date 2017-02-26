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
                <div className="portfolioItems">
                  <Card className="portfolioItem grow">
                    <CardActions >
                      <Link to="/portfolio/grow">
                        <CardMedia className="img"
                          aspectRatio="wide"
                          image={require('./../../../../images/grow-thumb.gif')}
                        />
                        <CardTitle className="txt"
                          title="UI/UX Design &amp; Development"
                        />
                      </Link>
                    </CardActions>
                  </Card> 

                   <Card className="portfolioItem grow">

                    <CardActions >
                      <Link to="/portfolio/paypal">
                        <CardMedia className="img"
                          aspectRatio="wide"
                          image={require('./../../../../images/paypal-thumb.gif')}
                        />
                        <CardTitle className="txt"
                          title="Material UI &amp; React JS."
                        />
                      </Link>
                    </CardActions>
                  </Card> 


                  <Card className="portfolioItem grow">
                    <CardActions>
                      <Link to="/portfolio/af">
                        <CardMedia className="img"
                          aspectRatio="wide"
                          image={require('./../../../../images/all-fashionista-thumb.jpg')}
                        />
                        <CardTitle className="txt"
                          title="Ecommerce Website Design &amp; Development"
                        />
                      </Link>
                    </CardActions>
                  </Card>

                  <Card className="portfolioItem grow">
                    <CardActions>
                      <Link to="/portfolio/eco">
                        <CardMedia className="img"
                          aspectRatio="wide"
                          image={require('./../../../../images/eco-reserve-thumb.jpg')}
                        />
                        <CardTitle className="txt"
                          title="Eco Reserves Development"
                        />
                      </Link>
                    </CardActions>
                  </Card>

                  <Card className="portfolioItem grow">

                    <CardActions >
                      <Link to="/portfolio/shekooh">
                        <CardMedia className="img"
                          aspectRatio="wide"
                          image={require('./../../../../images/shekooh-thumb.jpg')}
                        />
                        <CardTitle className="txt"
                          title="Ecommerce UI/UX Design &amp; Branding"
                        />
                      </Link>
                    </CardActions>
                  </Card>

                  <Card className="portfolioItem grow">
                    <CardActions >
                      <Link to="/portfolio/soul">
                        <CardMedia className="img"
                          aspectRatio="wide"
                          image={require('./../../../../images/soul-thumb.jpg')}
                        />
                        <CardTitle className="txt"
                          title="UI/UX Development"
                        />
                      </Link>
                    </CardActions>
                  </Card>
                </div>



    	        </div>
    		    </section>
            
                <div className="whiteBg">
                  <ContactForm />
                </div>
          </div>
        </ThemeProvider>
	  );
	}
});

export default PorfolioPage;
