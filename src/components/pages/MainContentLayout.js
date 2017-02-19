import React from 'react';
import './MainContentLayout.css';

class MainContentLayout extends React.Component {
	render () {
		return (
			<div className="pageWrap">
				<main>
		      {this.props.children}
	      </main>
      </div>
    );
  }
}

export default MainContentLayout;
