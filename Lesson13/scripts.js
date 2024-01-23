const listStudent = [
	{
		id: 1,
		name: 'Nguyễn Văn A',
		gender: 'nam',
		math_score: 10,
		english_score: 10,
		literature_score: 10,
	},
	{
		id: 2,
		name: 'Trần Thị B',
		gender: 'girl',
		math_score: 8,
		english_score: 8,
		literature_score: 9,
	},
];

const $btnCreate = document.getElementById('btn-create');
const $btnUpdate = document.getElementById('btn-update');
const $btnSearch = document.getElementById('btn-search');
const $id = document.getElementById('id');
const $name = document.getElementById('name');
const $gender = document.getElementById('gender');
const $math = document.getElementById('math');
const $english = document.getElementById('english');
const $literature = document.getElementById('literature');
const $keyword = document.getElementById('keyword');

const getInputs = () => {
	const id = Number($id.value);
	const name = $name.value;
	const gender = $gender.value;
	const math_score = Number($math.value);
	const english_score = Number($english.value);
	const literature_score = Number($literature.value);

	return { id, name, gender, math_score, english_score, literature_score };
};

const setInputs = (values = {}) => {
	const {
		id = '',
		name = '',
		gender = '',
		math_score = '',
		english_score = '',
		literature_score = '',
	} = values;

	$id.value = id;
	$name.value = name;
	$gender.value = gender;
	$math.value = math_score;
	$english.value = english_score;
	$literature.value = literature_score;
};

const calAverageScore = (math_score, english_score, literature_score) =>
	((math_score + english_score + literature_score) / 3).toFixed(2);

// Gán sự kiện onclick cho button Create student
$btnCreate.addEventListener('click', () => {
	// Lấy được thông tin người dùng đã nhập ở các ô input
	const { id, name, gender, math_score, english_score, literature_score } =
		getInputs();
	// validate input

	// Tạo một object mới
	const newStudent = {
		id: Number(id),
		name,
		gender,
		math_score: Number(math_score),
		english_score: Number(english_score),
		literature_score: Number(literature_score),
	};
	// Thêm object vào trong mảng
	listStudent.push(newStudent);
	// Gọi lại hàm read
	renderListStudents();

	// Clear input
	setInputs();
});

const renderListStudents = (dataRender = listStudent) => {
	let stringHTML = '';
	for (let student of dataRender) {
		console.log(student);
		stringHTML += `
    <tr>
		<th scope="row">${student.id}</th>
		<td>${student.name}</td>
		<td>${student.gender}</td>
		<td>${student.math_score}</td>
        <td>${student.english_score}</td>
        <td>${student.literature_score}</td>
        <td>${calAverageScore(
					student.math_score,
					student.english_score,
					student.literature_score
				)}</td>
        <td>
            <button 
                class='btn btn-success'
                onclick='updateStudent(${student.id})'
            >
                Update
            </button>
            <button 
                class='btn btn-danger' 
                onclick='deleteStudent(${student.id})'
            >
                Delete
            </button>
        </td>
	</tr>
    `;
	}

	document.getElementById('show').innerHTML = stringHTML;
};

const deleteStudent = (id) => {
	// Tìm được index của phần tử đó trong mảng
	const index = listStudent.findIndex((student) => student.id === id);

	// Xóa phần tử đó khỏi mảng
	listStudent.splice(index, 1);
	// Gọi lại hàm read
	renderListStudents();
};

const updateStudent = (id) => {
	// Tìm được index của phần tử đó trong mảng
	const index = listStudent.findIndex((student) => student.id === id);

	// Hiển thị thông tin của học sinh đó lên các ô input tương ứng
	setInputs(listStudent[index]);

	// Disabled input nhập id (không cho người dùng sửa id)
	$id.disabled = 'true';

	// Ẩn button Create student
	$btnCreate.style.display = 'none';
	// Show button Update student
	$btnUpdate.style.display = 'inline';
};

// Gán sự kiện onclick cho button Update student
$btnUpdate.addEventListener('click', () => {
	// Lấy được các thông tin người dùng vừa chỉnh sửa trong input
	const { id, name, gender, math_score, english_score, literature_score } =
		getInputs();

	// Tìm vị trí của học sinh trong danh sách
	const index = listStudent.findIndex((student) => student.id === id);

	// Cập nhật thông tin mới vào trong array
	listStudent[index].id = id;
	listStudent[index].name = name;
	listStudent[index].gender = gender;
	listStudent[index].math_score = math_score;
	listStudent[index].english_score = english_score;
	listStudent[index].literature_score = literature_score;

	// Gọi lại hàm read
	renderListStudents();

	// clear input
	setInputs();

	// Ẩn button Update student
	$btnUpdate.style.display = 'none';
	// Show button Create student
	$btnCreate.style.display = 'inline';
	// Enabled input id
	$id.disabled = 'false';
});

// Gán được sự kiện onclick cho button search
$btnSearch.addEventListener('click', () => {
	// Lấy được keyword người dùng nhập trong trong input keyword
	const keyword = $keyword.value;

    // Sử dụng hàm filter để lọc các thông tin phù hợp
	const result = listStudent.filter((student) =>
		student.name.toLowerCase().includes(keyword.toLowerCase())
	);

    // Gọi lại hàm read và truyền kết quả trả về của hàm filter
    renderListStudents(result);
});

renderListStudents();

window.deleteStudent = deleteStudent;
window.updateStudent = updateStudent;
