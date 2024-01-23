const listStudent = JSON.parse(localStorage.getItem('listStudent')) ?? [];

const $btnCreate = document.getElementById('btn-create');
const $btnUpdate = document.getElementById('btn-update');
const $btnSearch = document.getElementById('btn-search');
const $id = document.getElementById('id');
const $name = document.getElementById('name');
const $math = document.getElementById('math');
const $english = document.getElementById('english');
const $literature = document.getElementById('literature');
const $keyword = document.getElementById('keyword');

const PAGE_SIZE = 10;
let pageCurrent = 1;

const getInputs = () => {
	const $gender = document.querySelector('input[name="gender"]:checked').value;

	const id = Number($id.value);
	const name = $name.value;
	const gender = $gender === 'male' ? 'nam' : 'nữ';
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
	$math.value = math_score;
	$english.value = english_score;
	$literature.value = literature_score;
};

const getPage = (page) => {
	if (page === 'disabled') {
		return;
	} else if (page === 'next') {
		pageCurrent = pageCurrent + 1;
	} else if (page === 'previous') {
		pageCurrent = pageCurrent - 1;
	} else {
		pageCurrent = page;
	}

	// Lấy được keyword người dùng nhập trong trong input keyword
	const keyword = $keyword.value;

	// Sử dụng hàm filter để lọc các thông tin phù hợp
	const result = listStudent.filter((student) =>
		student.name.toLowerCase().includes(keyword.toLowerCase())
	);

	renderListStudents(result);
};
// render pagination
const renderPagination = (array) => {
	const totalPages = Math.ceil(array.length / PAGE_SIZE);

	let stringHTMLLiTags = '';
	for (let i = 1; i <= totalPages; i++) {
		stringHTMLLiTags += `
		<li class="page-item ${
			pageCurrent === i ? 'active' : ''
		}" onclick="getPage(${i})">
			<a class="page-link" href="#">${i}</a>
		</li>
		`;
	}

	const htmlPagination = `
		<li class="page-item ${
			pageCurrent === 1 ? 'disabled' : ''
		}" onclick="getPage('previous')">
			<a class="page-link" href="#" tabindex="-1" aria-disabled="true">
				Previous
			</a>
		</li>
		${stringHTMLLiTags}
		<li class="page-item ${
			pageCurrent === totalPages ? 'disabled' : ''
		}" onclick="getPage('next')}">
			<a class="page-link" href="#">Next</a>
		</li>
	`;
	document.getElementById('pagination').innerHTML = htmlPagination;
};

const calAverageScore = (math_score, english_score, literature_score) =>
	((math_score + english_score + literature_score) / 3).toFixed(2);

const generateId = (array) => {
	const lastIndex = array.length - 1;
	const newId = array[lastIndex]?.id ?? 0;

	return newId + 1;
};

// Gán sự kiện onclick cho button Create student
$btnCreate.addEventListener('click', () => {
	// Lấy được thông tin người dùng đã nhập ở các ô input
	const { name, gender, math_score, english_score, literature_score } =
		getInputs();
	// validate input

	// Tạo một object mới
	const newStudent = {
		id: generateId(listStudent),
		name,
		gender,
		math_score: Number(math_score),
		english_score: Number(english_score),
		literature_score: Number(literature_score),
	};
	// Thêm object vào trong mảng
	listStudent.push(newStudent);
	// Cập nhật vào local storage
	localStorage.setItem('listStudent', JSON.stringify(listStudent));
	// Gọi lại hàm read
	renderListStudents();

	// Clear input
	setInputs();
});

const renderListStudents = (dataRender = listStudent) => {
	let stringHTML = '';

	console.log('dataRender: ', dataRender);

	const data = dataRender.slice(
		(pageCurrent - 1) * PAGE_SIZE,
		pageCurrent * PAGE_SIZE
	);

	for (let student of data) {
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

	renderPagination(dataRender);
};

const deleteStudent = (id) => {
	// Tìm được index của phần tử đó trong mảng
	const index = listStudent.findIndex((student) => student.id === id);

	// Xóa phần tử đó khỏi mảng
	listStudent.splice(index, 1);
	// Cập nhật vào local storage
	localStorage.setItem('listStudent', JSON.stringify(listStudent));
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

	// Cập nhật vào local storage
	localStorage.setItem('listStudent', JSON.stringify(listStudent));

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

// Cách 1: click vào button search mới tìm kiếm
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

// Cách 2: khi gõ keyword vào input sẽ tìm kiếm luôn
$keyword.oninput = () => {
	// Lấy được keyword người dùng nhập trong trong input keyword
	const keyword = $keyword.value;

	// Sử dụng hàm filter để lọc các thông tin phù hợp
	const result = listStudent.filter((student) =>
		student.name.toLowerCase().includes(keyword.toLowerCase())
	);

	// Gọi lại hàm read và truyền kết quả trả về của hàm filter
	renderListStudents(result);
};

renderListStudents();

window.deleteStudent = deleteStudent;
window.updateStudent = updateStudent;
window.getPage = getPage;
