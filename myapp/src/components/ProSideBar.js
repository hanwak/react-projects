import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem, FaHeart } from "react-icons/fa";
import React, { Component } from 'react';

class ProSideBar extends React.Component {	

	onMenuClick = value => () => {
		this.props.parentCallback(value);
	}

	render() {
	return (
	<div className="SideBar">
		<ProSidebar>
		  <Menu iconShape="square"> 
			<MenuItem onClick = {this.onMenuClick('0')} icon={<FaGem />}>Dashboard</MenuItem>
			<SubMenu title="Components" icon={<FaHeart />}>
				<MenuItem onClick = {this.onMenuClick('1')}>Component 1</MenuItem>
				<MenuItem onClick = {this.onMenuClick('2')}>Component 2</MenuItem>
			</SubMenu>
		  </Menu>
		</ProSidebar>
	</div>
	)
  }
}

export default ProSideBar;