import React, { useRef } from "react";
import { addNewStudent } from "../service/studentService";
import { useNavigate } from "react-router-dom";

function AddComponent(props) {
	const navigate = useNavigate();

	const idRef = useRef();
	const nameRef = useRef();
	const phoneRef = useRef();
	const emailRef = useRef();
	const addressRef = useRef();

	const handleAddNewStudent = (e) => {
		e.preventDefault();
		addNewStudent({
			id: +idRef.current.value,
			name: nameRef.current.value,
			phone: phoneRef.current.value,
			email: emailRef.current.value,
			address: addressRef.current.value,
		});
		navigate("/students_list");
	};
	return (
		<div className="card-body">
			<h3>Add New Student</h3>
			<form className="mt-3">
				<div className="row  mb-3 ms-1 align-items-center">
					<label className="col-sm-1">ID:</label>
					<div className="col-sm-4">
						<input ref={idRef} type="text" name="name" className="form-control" placeholder="Enter your id" />
					</div>
				</div>
				<div className="row  mb-3 ms-1 align-items-center">
					<label className="col-sm-1">Name:</label>
					<div className="col-sm-4">
						<input ref={nameRef} type="text" name="name" className="form-control" placeholder="Enter your name" />
					</div>
				</div>

				<div className="row mb-3 ms-1 align-items-center">
					<label className="col-sm-1">Phone:</label>
					<div className="col-sm-4">
						<input ref={phoneRef} type="number" name="phone" className="form-control" placeholder="Enter your phone" />
					</div>
				</div>
				<div className="row mb-3 ms-1 align-items-center">
					<label className="col-sm-1">Email:</label>
					<div className="col-sm-4">
						<input ref={emailRef} type="email" name="email" className="form-control" placeholder="Enter your email" />
					</div>
				</div>
				<div className="row mb-3 ms-1 align-items-center">
					<label className="col-sm-1">Address:</label>
					<div className="col-sm-4">
						<input ref={addressRef} type="text" name="address" className="form-control" placeholder="Enter your address" />
					</div>
				</div>
				<button onClick={handleAddNewStudent} type="submit" className="btn btn-secondary btn-sm mb-3 ms-2">
					Submit
				</button>
			</form>
		</div>
	);
}
export default AddComponent;
