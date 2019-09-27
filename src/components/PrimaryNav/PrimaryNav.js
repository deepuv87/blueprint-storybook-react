import React from 'react';

import './primaryNav.css';

export default function PrimaryNav(props) {
	return (
		<nav className="navbar navbar-expand-lg sticky-top">
			<a href="" className="navbar-brand">
				<img src={props.logo} className="logo" alt="Agility Data Hub Dashboard" />
			</a>
			<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navPrimary" aria-controls="navPrimary" aria-expanded="false" aria-label="Toggle primary navigation">
				Menu
        	</button>
			<div className="collapse navbar-collapse" id="navPrimary">
				<ul className="navbar-nav primary mr-auto">
					{/* add select */}
					{props.selector && (
						<li className="nav-item form-inline">
							<select className="custom-select switcher-select">
								{props.selectOptions.map(option => (
									<option value={option.value}>{option.text}</option>
								))}
							</select>
						</li>
					)}
					{props.tabs.map(tab => (
						<li className="nav-item">
							<a href={tab.url} className={`nav-link ${tab.active && 'active'}`}>
								{tab.name}{tab.external && (
									<i className="fa fa-external-link-alt" aria-hidden="true"></i>
								)}
							</a>
						</li>
					))}
				</ul>
				<ul className="navbar-nav secondary">
					<li className="nav-item dropdown">
						<button type="button" id="navPrimaryHelpDropdown" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Help
              			</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navPrimaryHelpDropdown">
							<a href="" target="_blank" className="dropdown-item">Documentation</a>
							<p className="dropdown-text">Dropdown Items TBD</p>
						</div>
					</li>
					<li className="nav-item">
						<a href="" className="nav-link">Notifications</a>
					</li>
					<li className="nav-item dropdown">
						<button type="button" lang="en-us" id="navPrimaryAccountDropdown" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Account
            			</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navPrimaryAccountDropdown">
							<p className="dropdown-text">Dropdown Items TBD</p>
						</div>
					</li>
					<li className="nav-item">
						<a href="" className="nav-link">Settings</a>
					</li>
					<li className="nav-item dropdown">
						<button type="button" id="navPrimaryProductSwitcher" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i className="fas fa-ellipsis-v fa-lg" aria-hidden="true"></i>
							<span className="product-switcher" aria-hidden="true">Product Switcher</span>
							<span className="sr-only">Product Switcher</span>
						</button>
						<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navPrimaryProductSwitcher">
							<p className="dropdown-header">Agility Products</p>
							<a href="" target="_blank" className="dropdown-item">Admin</a>
							<p className="dropdown-text">Data Hub</p>
							<a href="" target="_blank" className="dropdown-item">Events</a>
							<a href="" target="_blank" className="dropdown-item">FRMS</a>
							<a href="" target="_blank" className="dropdown-item">Harmony</a>
							<a href="" target="_blank" className="dropdown-item">Loyalty</a>
							<a href="" target="_blank" className="dropdown-item">Unite</a>
							<div className="dropdown-divider"></div>
							<p className="dropdown-header">External Products</p>
							<a href="" target="_blank" className="dropdown-item">Business Insights</a>
							<a href="" target="_blank" className="dropdown-item">Campaign Management</a>
							<a href="" target="_blank" className="dropdown-item">Data Visualization</a>
							<a href="" target="_blank" className="dropdown-item">Kibana</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}