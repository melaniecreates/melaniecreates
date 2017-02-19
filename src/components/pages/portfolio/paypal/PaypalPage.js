import React  from "react";
import ContactForm from './../../../contactForm/ContactForm.js';
import theme from './../../../../toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import TopNavigation from './../../../topNavigation/TopNavigation.js';
import './PaypalPage.css';

const PaypalPage = React.createClass ({ 
	render () {
	  return (
      <ThemeProvider theme={theme}>
        <div>
          <TopNavigation flat={false} />
    	  	<section className="portfolioPage">
    	        <div className="pageHeader mainContent">

                <h1>Paypal</h1>

                <ContactForm />



    	        </div>
    		    </section>
          </div>
        </ThemeProvider>
	  );
	}
});

export default PaypalPage;
