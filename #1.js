//!#1 What's Async Javascript - Khái niệm BẤT ĐỒNG BỘ JS
//Synchronous Function => hàm đồng bộ
console.log(1);
console.log(2);
console.log(3);
console.log(4);

//ở đoạn mã này chúng ta có thể thấy các log sẽ chạy theo thứ tự đầu đến cuối từ log1 rồi đến log2 v.v
//Asynchronous Function => Hàm bất đồng bộ
function delayedGreeting() {
    console.log('Chào bạn!'); // Bước 2: In ra chào bạn
    setTimeout(() => {
        console.log('Xin chào sau 2 giây!'); // Bước 4: In ra lời chào sau khi đợi 2 giây
    }, 2000);
}

console.log('Bắt đầu chương trình.'); // Bước 1: In ra thông báo bắt đầu chương trình

delayedGreeting(); // Gọi hàm delayedGreeting để in ra lời chào sau một khoảng thời gian

console.log('Tiếp tục thực hiện các công việc khác.'); // Bước 3: In ra thông báo tiếp tục thực hiện các công việc khác

//ở đoạn mã này chỉ ra 1 vd về hàm bất đồng bộ có dùng hàm setTimeout để cho thời gian
//chạy lâu hơn nhằm cho các đoạn mã không cần kh có setTimeout đều sẽ chạy song
//song và trả kết quả về khi nó chạy xong