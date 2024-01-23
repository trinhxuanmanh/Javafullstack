// // Tìm kiếm phần tử theo id
// console.log(document.getElementById('heading'));

// // Tìm kiếm phần tử theo class
// console.log(document.getElementsByClassName('paragraph'));

// // Tìm kiếm phần tử theo tên thẻ
// console.log(document.getElementsByTagName('p'));

// Tìm kiếm kết hợp
// =>Trả về phần tử hợp lệ đầu tiên tìm thấy
// console.log(document.querySelector('p#paragraph.paragraph'));
// // =>Trả về tất cả các phần tử hợp lệ tìm thấy
// console.log(document.querySelectorAll('#paragraph.paragraph'));

// Thay đổi nội dung
// document.getElementById('title').innerText =
// 	'<h1 style="font-size: 80px">New text</h1>';

// document.getElementById('title').innerHTML =
// 	'<h1 style="font-size: 80px">New text</h1>';

// THay đổi giá trị của thuộc tính trong thẻ
// document.getElementById('tagA').href = 'https://youtube.com';
// document.getElementById('tagA').setAttribute('href', 'http://youtube.com');

// Lấy giá trị của thuộc tính
// console.log(
// 	"document.getElementById('tagA').href: ",
// 	document.getElementById('tagA').href
// );
// console.log(document.getElementById('tagA').getAttribute('href'));

// Xóa attribute
// document.getElementById('tagA').removeAttribute('target')

// thay đổi style
// document.getElementById('title').style.marginTop = '100px';

// const $h1 = document.createElement('h1');
// $h1.innerHTML = 'Test thêm nội dung';
// $h1.setAttribute('id', 'h1');

// document.body.appendChild($h1);

// document.getElementById('title').remove();

// const listTagLi = document.getElementsByClassName('favorite-list-item');
// // listTagLi[0].innerHTML = 'I lovee this thing';
// for (let tagLi of listTagLi) {
// 	tagLi.innerText = 'I love this thing';
// 	tagLi.style.color = 'red';
// }

// let input_t = prompt('Thêm vào list');
// let newli = document.createElement('li');
// newli.innerText = input_t;
// document.getElementById('favorite-list').appendChild(newli);

// document.getElementById('favorite-list').classList.toggle('new-class');

// function sayHi() {
// 	alert('Hi friend');
// }

// document.getElementById('btn').onclick = sayHi;

// document.getElementById('btn').onclick = function () {
// 	console.log('Hello');
// };

// document.getElementById('btn').onclick = function () {
// 	console.log('Hello 2');
// };

document.getElementById('btn').addEventListener('click', function () {
	console.log('addEventListener1');
});

document.getElementById('btn').addEventListener('click', function () {
	console.log('addEventListener2');
});
document.getElementById('btn').addEventListener('click', function () {
	console.log('addEventListener3');
});
