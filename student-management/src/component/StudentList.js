import React, { useEffect, useRef, useState } from "react";
import StudentItem from "./StudentItem";
import { getAllStudent, searchByName } from "../service/studentService";
import { Link } from "react-router-dom";

function StudentList() {
	const [studentList, setStudentList] = useState([]);

	useEffect(() => {
		setStudentList(getAllStudent());
	}, []);

	const searchNameRef = useRef();

	const handleSearchName = () => {
		let searchName = searchNameRef.current.value;
		const listSearch = searchByName(searchName);
		setStudentList(() => [...listSearch]);
	};
	return (
		<div className="card-body">
			<div className="item-group">
				<Link className="list-group-item  list-group-item-light w-25 mb-3" id="add-link" to="/add_students">
					Add New Students
				</Link>
			</div>
			<form className="row g-3">
				<div className="col-auto">
					<input ref={searchNameRef} type="text" className="form-control rounded-0 " id="inputName" placeholder="Enter name" />
				</div>
				<div className="col-auto">
					<button onClick={handleSearchName} type="button" className="btn btn-secondary rounded-0 mb-3">
						Search
					</button>
				</div>
			</form>

			<table className="table table-light">
				<thead>
					<tr>
						<th className="text-center">id</th>
						<th className="text-center">Name</th>
						<th className="text-center">Phone</th>
						<th className="text-center">Email</th>
						<th className="text-center" style={{ width: 200 }}>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((s) => (
						<StudentItem key={s.id} student={s} />
					))}
				</tbody>
			</table>
		</div>
	);
}
export default StudentList;
