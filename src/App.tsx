import React from 'react';
import { Provider } from "mobx-react";
import { Layout } from "antd";
import AppSider from "./layout/sidebar";
import SearchStore from "../src/flux/index";
import './styles/App.scss';

function App() {
	return (
		<div className="app">
			<Provider searchStore={SearchStore}>
				<Layout>
					<AppSider />
				</Layout>
			</Provider>
		</div>
	);
}

export default App;
