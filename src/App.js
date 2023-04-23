import { Component } from 'react';
import Header from './components/header/Header';
import ToursList from './components/tours-list/ToursList';

import { DARK, LIGHT } from './constants/index';

import './App.css';
import clsx from 'clsx';

class App extends Component {
	state = {
		theme: DARK,
	};

	handleToggleTheme = () => {
		this.setState((state) => ({ theme: state.theme === DARK ? LIGHT : DARK }));
	};

	render() {
		const { theme } = this.state;
		return (
			<div
				className={clsx('app-container', {
					'dark-theme': theme === DARK,
					'light-theme': theme === LIGHT,
				})}>
				<Header theme={theme} onToggle={this.handleToggleTheme}></Header>
				<ToursList theme={theme}></ToursList>
			</div>
		);
	}
}

export default App;