var request = new XMLHttpRequest(); //1 dòng này để khai báo 1 lời gọi request
        request.onreadystatechange = function() {
    if (this.readyState == 4 && request.status === 200) {
       // Typical action to be performed when the document is ready:
       console.log('>>> Check request', request);
    } else {
        console.log('>>> status', request.status);
    }
};
request.open("GET", "https://jsonplaceholder.typicode.com/todoss", true); //2 dòng này để khởi tạo 1 request
request.send(); //3 dòng này để chạy 1 request
//ở đoạn code này giúp biết được status => trạng thái của của 1 request 200 ok => truy vấn và lấy data
//từ 1 request về thành công, 404 => url không được đúng hay không được trình duyệt tìm thấy link
// https bị sai v.v
//link tham khảo status: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status