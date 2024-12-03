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
		<div className="card-body">
			<div className="item-group">
				<Link className="list-group-item  c mt-3 mb-3 ms-3" id="add-link" to="/students_list/add_students">
					Add New Students
				</Link>
			</div>
			<form className="row g-3 ms-2">
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
