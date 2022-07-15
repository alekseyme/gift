import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Surprise from 'pages/Surprise';
import YourSurprises from 'pages/YourSurprises';

const App = () => {
	return (
		<div className="content">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/items/:id" element={<Surprise />} />
				<Route path="/yoursurprises" element={<YourSurprises />} />
				<Route path="*" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
