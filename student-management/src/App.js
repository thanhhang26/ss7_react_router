import "./App.css";
import StudentManagement from "./component/StudentManagement";
import StudentList from "./component/StudentList";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./component/HomeComponent";
import AddComponent from "./component/AddComponent";
import FooterComponent from "./component/FooterComponent";

function App() {
	return (
		<>
			<StudentManagement />
			<Routes>
				<Route path={"/students_list"} element={<StudentList />}></Route>
				<Route path={"/home"} element={<HomeComponent />}></Route>
				<Route path={"/add_students"} element={<AddComponent />}></Route>
			</Routes>
			<FooterComponent />
		</>
	);
}
export default App;
