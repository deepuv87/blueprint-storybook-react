import React from 'react';
import { action } from '@storybook/addon-actions';

import TopNav from './TopNav';

import dataHubLogo from '../../assets/logo-datahub.svg';
import loyaltyLogo from '../../assets/logo-loyalty.svg';

export default {
	title: 'Primary Navigation',
};
const dataHubTabs = [
	{
		name: 'Dashboard',
		url: '',
		active: true
	},
	{
		name: 'Monitoring',
		url: ''
	},
	{
		name: 'Workflows',
		url: ''
	},
	{
		name: 'Glossary',
		url: ''
	},
	{
		name: 'Feeds',
		url: '',
		external: true
	}
];

const dataHubOptions = [
	{
		value: 'all',
		text: 'All Tenants'
	}
];
export const datahub = () => <TopNav tabs={dataHubTabs} selector={true} selectOptions={dataHubOptions} logo={dataHubLogo} />

datahub.story = {
	name: 'Data Hub'
}


const loyaltyTabs = [
	{
		name: 'Customers',
		url: '',
		active: true
	},
	{
		name: 'Program Management',
		url: ''
	},
	{
		name: 'Batch',
		url: ''
	},
	{
		name: 'Momentum',
		url: ''
	},
	{
		name: 'Marketing',
		url: ''
	}
];

export const loyalty = () => <TopNav tabs={loyaltyTabs} logo={loyaltyLogo} />

loyalty.story = {
	name: 'Loyalty'
}
