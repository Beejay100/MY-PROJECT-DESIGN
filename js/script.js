// delete code
	// fetch('https://arcane-hollows-80777.herokuapp.com/api/admin/5da344276d4abf00170df0ea', {
	//   method: 'delete',
	// }).then((res) => {
	// 	res.json()
	// })
	//   .then((res) => {
	//   });

// get student reg numbers
const getAll = () => {
	fetch('https://arcane-hollows-80777.herokuapp.com/api/admin')
		.then(res => res.json())
		.then((data) => {
			let tableBody = document.getElementById("reg-tbody");
			let tableData = "";
			for (var i = 0; i < data.length; i++) {
				tableData += `
				<tr id="${data[i]._id}"><td>${data[i].regNo}</td><td><button class="btn btn-sm red delete">Delete</button></td></tr>
				`
			}
			tableBody.innerHTML = tableData;
		})
};

// add new studentr reg no.
const addStudentBtn = document.getElementById("add-student-btn");
addStudentBtn.addEventListener('click', function() {
	let studentRegNo = document.getElementById("add-student").value;
	if (studentRegNo) {
		newStudent = {regNo: `${studentRegNo}`};

		fetch('https://arcane-hollows-80777.herokuapp.com/api/admin', {
		  method: 'post',
		  headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		  },
		  body: JSON.stringify(newStudent)
		}).then((res) => {
			res.json()
		})
		  .then((res) => {
		  });
		}

	  	setInterval(function() {
		    getAll()
		}, 2000);

})

getAll()


$(function(){

	$(document).on("click", ".delete", () => {alert('clicked')})

	}) 