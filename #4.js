//!#4 Callback functions - Khi Cần Thì Gọi Lại
//b1: nên khai báo 1 const callback để xử lý đk trước
const callback = (error, data) => {
    if(error){
      console.log('something wrongs', error);
    }

    if(data){
      console.log('calling callback with data:', data);
    }
  }

  //b2: tạo function cho tham số là callback để xử lý các bước khai báo, khởi tạo, gửi request và đk
  //khi xử lý với request v.v
  function getTodos(callback){
     //1 dòng này để khai báo 1 lời gọi request
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState === 4 && request.status === 200) {
        const data = request.responseText;
        callback(undefined, data);
      }
      
      if(this.readyState === 4 && request.status !== 200) {
        callback('Something wrongs', undefined);
      }
    };

     //2 dòng này để khởi tạo 1 request
    request.open("GET","https://jsonplaceholder.typicode.com/todos",true);
     //3 dòng này để gửi 1 request
    request.send();
  }
  //b3: getTodos(callback); bước này là bước cuối để chạy các đk và lấy data về từ request

  //dòng 38-42 để test code log với đoạn mã bất đồng bộ
  console.log(1);
  console.log(2);
  getTodos(callback);
  console.log(3);
  console.log(4);

  //note: không nên sử dụng readyState với hàm synchronous(đồng bộ)
  //note: các bước code để lấy data về từ 1 request ở code trên như sau: => xem trực tiếp các bước
  //ở trên code 
