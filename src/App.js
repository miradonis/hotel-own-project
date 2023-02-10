import './App.css';
import { db } from './Firebase';
import { collection, getDocs, updateDoc, getDoc, doc, addDoc } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import BookingAside from './components/bookingAside/BookingAside';

function App() {

	/* FIREBASE ------------------ Datenbank */
	const ref = collection(db, 'hotel');
	console.log(ref);

	const getData = async () => {
		const data = await getDocs(ref);
		data.docs.forEach(doc => {
			console.log(doc.data());
		});
	}

	getData();

	// ------------------ Neue Daten in Firebase speichern

	// const addNewDate = addDoc(ref, {
	// 	roomNumber: 111,
	// 	available: true,
	// 	price: 30,
	// 	type: "SimpleRoom",
	// 	doubleBed: true
	// });

	/* ENDE!!!!!!!!! FIREBASE ------------------ Datenbank */

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</div >
	);
}

export default App;
