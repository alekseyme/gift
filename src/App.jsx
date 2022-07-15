import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'pages/Home';
import Surprise from 'pages/Surprise';
import YourSurprises from 'pages/YourSurprises';

const App = () => {
	return (
		<div className="content">
			<Routes>
				<Route path="/gift" element={<Home />} />
				<Route path="/gift/items/:id" element={<Surprise />} />
				<Route path="/gift/yoursurprises" element={<YourSurprises />} />
				<Route path="*" element={<Navigate to="/gift" replace={true} />} />
			</Routes>
		</div>
	);
};

export default App;
