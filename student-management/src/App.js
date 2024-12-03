import "./App.css";
import StudentManagement from "./component/StudentManagement";
import StudentList from "./component/StudentList";
import { Routes, Route } from "react-router-dom";
import HomeComponent from "./component/HomeComponent";
import AddComponent from "./component/AddComponent";
import FooterComponent from "./component/FooterComponent";
import DetailComponent from "./component/DetailComponent";

function App() {
	return (
		<>
			<StudentManagement />
			<Routes>
				<Route path={"/students_list"} element={<StudentList />}></Route>
				<Route path={"/home"} element={<HomeComponent />}></Route>
				<Route path={"/students_list/add_students"} element={<AddComponent />}></Route>
				<Route path={"/detail/:id"} element={<DetailComponent />}></Route>
			</Routes>
			<FooterComponent />
		</>
	);
}
export default App;
