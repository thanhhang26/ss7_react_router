const studentList = [
	{
		id: 1,
		name: "Nguyen Van A",
		phone: "0912345678",
		email: "nguyenvana@gmail.com",
	},
	{
		id: 2,
		name: "Nguyen Thi B",
		phone: "0932432333",
		email: "nguyenthib@gmail.com",
	},
	{
		id: 3,
		name: "Tran Van C",
		phone: "0932433212",
		email: "nguyenthic@gmail.com",
	},
];

export function getAllStudent() {
	return studentList;
}
export function addNewStudent(student) {
	studentList.push(student);
}
export function searchByName(name) {
	return studentList.filter((student) => student.name.includes(name));
}
