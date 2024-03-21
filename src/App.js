import { useState } from 'react';
import './App.css';
import Snackbar from '@mui/material/Snackbar';
import HomePage from './component/HomePage';
import Layout from './component/Layout';

function App() {
	const [showToast, setShowToast] = useState("");

    return (
      	<Layout>
			<HomePage setShowToast={(value) => setShowToast(value)} />
			<Snackbar
				// anchorOrigin={{ "bottom", "center" }}
				open={showToast !== ""}
				autoHideDuration={3000}
				onClose={() => setShowToast("")}
				message={showToast}
				// key={vertical + horizontal}
			/>
		</Layout>
    );
}

export default App;
