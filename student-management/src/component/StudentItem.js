import React from "react";

function StudentItem(props) {
	const { id, name, phone, email } = props.student;
	return (
		<tr>
			<td className="text-center">{id}</td>
			<td className="text-center">{name}</td>
			<td className="text-center">{phone}</td>
			<td className="text-center">{email}</td>
			<td className="text-center">
				<button className="btn btn-secondary me-3">Edit</button>
				<button className="btn btn-secondary">Delete</button>
			</td>
		</tr>
	);
}
export default StudentItem;
