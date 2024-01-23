let listUser = [];
if (localStorage.getItem('users') !== null) {
	listUser = JSON.parse(localStorage.getItem('users'));
}

const validateEmail = (email) => {
	const re = /\S+@\S+\.\S+/;
	return re.test(email);
};

document.getElementById('register').addEventListener('click', function () {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const rePassword = document.getElementById('re-password').value;

	// validate
	if (name === '' || email === '' || password === '' || rePassword === '') {
		alert('Yêu cầu nhập đầy đủ thông tin');
		return;
	}

	if (name.length < 2) {
		alert('Tên chưa hợp lệ');
		return;
	}
	if (validateEmail(email) !== true) {
		alert('Email chưa đúng định dạng');
		return;
	}
	if (password.length < 6) {
		alert('Password chưa đủ mạnh');
		return;
	}
	if (rePassword !== password) {
		alert('2 password chưa trùng nhau');
		return;
	}

	const newUser = {
		name: name,
		email: email,
		password: password,
		rePassword: rePassword,
	};

	let isExistEmail = false;
	let isLoginSuccess = false;

	for (let user of listUser) {
		// Đăng ký
		if (user.email === email) {
			alert('Email đã tồn tại');
			isExistEmail = true;
		}
		// Đăng nhập
		// if (user.email === email && user.password === password) {
		// 	alert('Đăng nhập thành công');
		// 	isLoginSuccess = true;
		// }
	}
	if (isExistEmail === false) {
		listUser.push(newUser);
		localStorage.setItem('users', JSON.stringify(listUser));
		alert('Đăng ký thành công');
	}

	// Đăng nhập
	// if (isLoginSuccess === false) {
	// 	alert('Đăng nhập không thành công');
	// }
});
