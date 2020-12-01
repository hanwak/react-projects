import React from 'react';
import HomepageImage from './HomepageImage';
import logo from '../logo.svg';


class MainHome extends React.Component {	
	state = {
		text: 'Edit src/App.js and save to reload.',
		showing: true
	}

	handleClick = () => {
		const newShowing = this.state.showing? false : true;
        this.setState({ 
			text: 'Clicked', 
			showing : newShowing })
	};
	
  render() {
	const { showing } = this.state;
	
	return (
		<div className="App-header">
			<div style={{ display: (showing ? 'block' : 'none')}}>
				<HomepageImage/>
			</div>
			
			<button onClick={this.handleClick}>CLICK THIS BUTTON OR ELSE!</button>
			
			<img onClick={this.handleClick} src={logo} className="App-logo" alt="logo" />
			<p>
			{this.state.text}
			</p>
			<a
			  className="App-link"
			  href="https://reactjs.org"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  Learn React What is This
			</a>
		</div>
	);
  }
}

export default MainHome;