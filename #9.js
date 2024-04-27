//!#9 Fetch API Với Javascript - GET Data Từ API Siêu Đơn Giản
function getTodos(id, callback){
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();

      request.onreadystatechange = function(){
        if(this.readyState === 4 && request.status === 200){
          const data = JSON.parse(request.response);
          resolve(data)
        }

        if(this.readyState === 4 && request.status !== 200){
          reject('Some thing wrongs' + id);
        }
      }

      request.open('GET', `https://jsonplaceholder.typicode.com/todos/${id}`, true);
      request.send();
    })
  }

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })

  //note: ở bài học này chúng ta biết cách lấy data về từ 1 request bằng cách sử dụng fetch()
  //note1: hàm fetch chỉ sử dụng vs method GET để lấy data về