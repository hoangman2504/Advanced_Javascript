//!#2 HTTP Requests - Tạo Request Với JavaScript Thuần
//1 dòng này để khai báo 1 lời gọi request
var request = new XMLHttpRequest();

//4 đoạn mã này để lấy data về từ 1 request
request.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log(">>> Check request", request);
  }
};
//2 dòng này để khởi tạo 1 request
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); 

//3 dòng này để chạy 1 request
request.send(); 
//note: trong bài code này đây cũng là ví dụ 1 asynchronous => bất đồng bộ khi các code không chạy theo
//trình tự nhưng vẫn lấy data về khi truy cập đến 1 request
//note: trình từ chạy code //1 => //2, 3, 4 v.v

