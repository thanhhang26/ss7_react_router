import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudentById } from "../service/studentService";

function DetailComponent() {
	const [studentDetail, setStudentDetail] = useState({ id: "", name: "", phone: "", email: "", address: "" });
	const { id } = useParams();
	useEffect(() => {
		console.log(getStudentById(id));
		setStudentDetail(() => ({
			...getStudentById(id),
		}));
	}, [id]);
	return (
		<div className="container">
			<h2>Student Details</h2>
			<p>ID: {studentDetail.id}</p>
			<p>Name: {studentDetail.name}</p>
			<p>Phone: {studentDetail.phone}</p>
			<p>Email: {studentDetail.email}</p>
			<p>Address: {studentDetail.address}</p>
		</div>
	);
}
export default DetailComponent;
