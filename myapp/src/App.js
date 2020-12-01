import logo from './logo.svg';
import HomepageImage from './components/HomepageImage';
import MainHome from './components/MainHome';
import ProSideBar from './components/ProSideBar';
import './App.css';
import React, { Component } from 'react';

class App extends React.Component {	
	state = {
		menu: null,
		text: 'Click Component Menu'
	}

	callback = (childData) => {
		this.renderComponent(childData)
	}
	
	renderComponent(param){
		switch(param){
			case '0':
				this.setState({text : 'Dashboard', 
				menu : null})
				break;
			case '1':
				this.setState({text : 'Menu 1', 
				menu : <MainHome/>})
				break;
			case '2':
				this.setState({text : 'Menu 2', 
				menu : <HomepageImage/>})
				break;
			}
	}
	
  render() {
	const { showing } = this.state;

  return (
    <div className="App">
		<ProSideBar parentCallback = {this.callback}/>
		
		<div className='DisplayMenu'>
			<p style = {{color: 'white'}}>
				{this.state.text}
			</p>
		
			{this.state.menu}
		</div>
    </div>
  );
  }
}

export default App;