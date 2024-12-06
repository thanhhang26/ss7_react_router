import "./App.css";
import StudentList from "./component/StudentList";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./component/HomeComponent";
import FooterComponent from "./component/FooterComponent";
import DetailComponent from "./component/DetailComponent";
import HeaderComponent from "./component/HeaderComponent";
import AddFormikComponent from "./component/AddFormikComponent";

function App() {
	return (
		<>
			<HeaderComponent />
			<Routes>
				<Route path={"/students_list"} element={<StudentList />}></Route>
				<Route path={"/home"} element={<HomeComponent />}></Route>
				<Route path={"/students_list/add_students"} element={<AddFormikComponent />}></Route>
				<Route path={"/detail/:id"} element={<DetailComponent />}></Route>
			</Routes>
			<FooterComponent />
		</>
	);
}
export default App;
