//!#2 HTTP Requests - Tạo Request Với JavaScript Thuần
var request = new XMLHttpRequest(); //1 dòng này để khai báo 1 lời gọi request

//4
request.onreadystatechange = function () {
  if (this.readyState == 4) {
    // Typical action to be performed when the document is ready:
    console.log(">>> Check request", request);
  }
};
//4 => đoạn mã này để lấy data về từ 1 request

request.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); //2 dòng này để khởi tạo 1 request

request.send(); //3 dòng này để chạy 1 request
//note: trong bài code này đây cũng là ví dụ 1 asynchronous => bất đồng bộ khi các code không chạy theo
//trình tự nhưng vẫn lấy data về khi truy cập đến 1 request
//note: trình từ chạy code //1 => //2, 3, 4 v.v

