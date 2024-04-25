//!#8 Chaining Promises - Promise Lồng Trong Promies
function getTodos(id, callback) {
    return new Promise((resolve, reject) => {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (this.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.response);
          const dataString = JSON.stringify(data);
          // callback(undefined, data);
          resolve(data);
        }

        if (this.readyState === 4 && request.status !== 200) {
          // callback("Some thing wrongs", undefined);
          reject('Some thing wrongs with: ' + id);
        }
      };
      //truyền vào 1 biến id vào link request để giúp mã dưới lấy id 1, 2, 3 v.v
      request.open(
        "GET",
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        true
      );  
      request.send();
    });
  }

  getTodos(1)
    .then((data) => {
      console.log('>>> data: ', data);
      return getTodos(2);
    })
    .then((data2) => {
      console.log('>>> data2: ', data2);
      return getTodos(3);
    })
    .then((data3) => {
      console.log('>>> data3: ', data3);
    })

    .catch((error) => {
      console.log(">>>", error);
    });
  //đoạn code dưới đây đang lấy data từ request có id1, id2, id3 v.v
  const promiseExp = () => {
    return new Promise((resolve, reject) => {
      resolve("Hi promise resolve");
      reject("Hi promise reject ");
    });
  };

  // promiseExp()
  // .then(data => {
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.log(error);
  // })
//note: ở đoạn mã này sử dụng Chaining Promises để giúp cho code sử dụng promise chạy theo trình tự
//và nhìn code trong sạch và gọn hơn