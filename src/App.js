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
		// console.log(data.docs[0].data());
	}

	const setData = async (parameter) => {
		addDoc(ref, parameter);
	}

	const updateDate = async (parameter) => {
		const docRef = doc(db, "hotel", "rooms")
		const data = await getDoc(docRef)
		await updateDoc(docRef, { ...data.data(), ALLES1: parameter })
	}
	updateDate({ Bad: "wie geleckt" });

	getData();
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
