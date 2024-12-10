const studentList = [
	{
		stt: 1,
		id: 1,
		name: "Nguyen Van A",
		phone: "0912345678",
		email: "nguyenvana@gmail.com",
		address: "Ha Noi",
	},
	{
		stt: 2,
		id: 2,
		name: "Nguyen Thi B",
		phone: "0932432333",
		email: "nguyenthib@gmail.com",
		address: "Ha Noi",
	},
	{
		stt: 3,
		id: 3,
		name: "Tran Van C",
		phone: "0932433212",
		email: "nguyenthic@gmail.com",
		address: "Ha Noi",
	},
];

export function getAllStudent() {
	return studentList;
}
export function addNewStudent(student) {
	const s = { ...student, id: +student.id }; // thêm câu lệnh này khi sử dụng "===" ở dòng 38 đến 44. Tốt nhất so sánh nên dùng "=="
	studentList.push(s);
}
export function searchByName(name) {
	return studentList.filter((student) => student.name.includes(name));
}
export function getStudentById(id) {
	let student = null;
	for (let i = 0; i < studentList.length; i++) {
		if (studentList[i].id === +id) student = studentList[i]; //=== là so sánh dữ liệu, nếu muốn so sánh số thì phải thêm dấu + trước giá trị sau dấu "===". Tốt nhất so sánh nên dùng "=="
	}
	return student;
}
export function deleteStudentById(id) {
	for (let i = 0; i < studentList.length; i++) {
		if (studentList[i].id === id) {
			studentList.splice(i, 1);
			break;
		}
	}
}
