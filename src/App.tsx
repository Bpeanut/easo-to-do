import React from 'react';
import { Provider } from "mobx-react";
import { Layout } from "antd";
// layout
import AppSider from "./layout/Sidebar";
// components
import AppContent from "./components/app/AppContent";
// store
import SearchStore from "./flux/search";
import BackgroundStore from "./flux/background";
// scss
import './styles/App.scss';

function App() {
	return (
		<div className="app">
			<Provider searchStore={SearchStore} BackgroundStore={BackgroundStore} >
				<Layout>
					<AppSider />
					<AppContent />
				</Layout>
			</Provider>
		</div>
	);
}

export default App;
