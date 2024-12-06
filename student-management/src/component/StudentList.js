import React, { useEffect, useRef, useState } from "react";
import StudentItem from "./StudentItem";
import { getAllStudent, searchByName } from "../service/studentService";
import { Link } from "react-router-dom";
import DeleteComponent from "./DeleteComponent";

function StudentList() {
	const [studentList, setStudentList] = useState([]);
	const [show, setShow] = useState(false);
	const [deleteStudent, setDeleteStudent] = useState({});

	useEffect(() => {
		setStudentList(getAllStudent());
	}, []);

	const searchNameRef = useRef();

	const handleSearchName = () => {
		let searchName = searchNameRef.current.value;
		const listSearch = searchByName(searchName);
		setStudentList(() => [...listSearch]);
	};

	const showModalDelete = (student) => {
		setDeleteStudent(student);
		setShow(true);
	};

	const closeModal = () => {
		setShow(false);
	};
	return (
		<div className="container">
			<form className="d-flex align-items-center justify-content-between my-3">
				<div className="d-flex align-items-center">
					<input ref={searchNameRef} type="text" className="form-control rounded-0 " id="inputName" placeholder="Enter name" />
					<button onClick={handleSearchName} type="button" className="btn btn-secondary rounded-0">
						Search
					</button>
				</div>
				<Link className="btn btn-sm btn-secondary" id="add-link" to="/students_list/add_students">
					Add New Students
				</Link>
			</form>

			<table className="table table-light">
				<thead>
					<tr>
						<th className="text-center">STT</th>
						<th className="text-center">ID</th>
						<th className="text-center">Name</th>
						<th className="text-center">Phone</th>
						<th className="text-center">Email</th>
						<th className="text-center" style={{ width: 200 }}>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{studentList.map((s, i) => (
						<StudentItem key={s.id} student={s} i={i} showModalDelete={showModalDelete} />
					))}
				</tbody>
			</table>
			<DeleteComponent student={deleteStudent} show={show} closeModal={closeModal} />
		</div>
	);
}
export default StudentList;
