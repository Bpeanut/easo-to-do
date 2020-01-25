import React from 'react';
import { Layout } from "antd";
import AppSider from "./layout/sidebar";
import './styles/App.less';

function App() {
	return (
		<div className="app">
			<Layout>
				<AppSider />
			</Layout>
		</div>
	);
}

export default App;
