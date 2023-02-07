import './App.css';
import { db } from './Firebase';
import { collection, getDocs, addDoc, updateDoc, getDoc, doc } from 'firebase/firestore';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import BookingAside from './components/bookingAside/BookingAside';

function App() {

	/* FIREBASE ------------------ Datenbank */
	const ref = collection(db, 'hotel');

	const getData = async () => {
		const data = await getDocs(ref);
		data.docs.forEach(doc => {
			console.log(doc.data());
		});
		// console.log(data.docs[1].data());
	}

	getData();

	// ------------------ Neue Daten in Firebase speichern

	// const docRef = addDoc(ref, {
	// 	roomNumber: 000,
	// 	available: true,
	// 	price: 60,
	// 	type: "Suite",
	// 	doubleBed: true
	// })







	/* ENDE!!!!!!!!! FIREBASE ------------------ Datenbank */

	return (
		<div className="App">
			<Router>
				<BookingAside />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</div >
	);
}

export default App;
