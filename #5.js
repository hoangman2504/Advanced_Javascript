//!#5 Using JSON data - Đọc File JSON Với Javascript Thuần "Chủng"
//!#4 Callback functions - Khi Cần Thì Gọi Lại
const callback = (error, data) => {
    if(error){
      console.log('Some thing wrongs', error);
    }

    if(data){
      console.log('>>> Calling callback with data: ', data);
    }
  }

  function getTodos(callback){
    var request = new XMLHttpRequest;

    request.onreadystatechange = function(){
      if(this.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        const dataString = JSON.stringify(data);
        callback(undefined, data); //đây là data cho máy móc sử dụng
        callback(undefined, dataString); //đây là data cho backend và frontend giao tiếp qua lại
        //với nhau
        callback(undefined, request.responseText); //đây là data dạng JSON        
      }

      if(this.readyState === 4 && request.status !== 200){
        callback('Some thing wrongs', undefined);
      }
    }

    request.open('GET', './data.json', true);
    request.send();
  }

  console.log(1);
  console.log(2);
  getTodos(callback);
  console.log(3);
  console.log(4);