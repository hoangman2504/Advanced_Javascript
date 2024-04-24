//!#6 Callback Hell - Bạn Nên Gặp Ít Nhất Một Lần Trong Đời
const callback = (error, data) => {
    if (error) {
      console.log("Some thing wrongs", error);
    }

    if (data) {
      console.log(">>> Calling callback with data: ", data);
    }
  };

  function getTodos(id, callback) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
      if (this.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.response);
        const dataString = JSON.stringify(data);
        callback(undefined, data);
      }

      if (this.readyState === 4 && request.status !== 200) {
        callback("Some thing wrongs", undefined);
      }
    };
//truyền vào 1 biến id vào link request để giúp mã dưới lấy id 1, 2, 3 v.v
    request.open("GET",`https://jsonplaceholder.typicode.com/todos/${id}`,true );
    request.send();
  }

//đoạn code dưới đây đang lấy data từ request có id1, id2, id3 v.v
  getTodos(1, (error, data) => {
    if (error) {
      console.log("Some thing wrongs", error);
    }

    if (data) {
      console.log(">>> Calling callback with data: ", data);

      getTodos(2, (error, data) => {
        if (error) {
          console.log("Some thing wrongs", error);
        }
        if (data) {
          console.log(">>> Calling callback with data: ", data);

          getTodos(3, (error, data) => {

            if (error) {
              console.log("Some thing wrongs", error);
            }
            if (data) {
              console.log(">>> Calling callback with data: ", data);
            }
          });
        }
      });
    }
  });

  //note: trong đoạn mã này đang thực hiện 1 callback hell vì đã cho các đoạn mã bất đồng bộ
  //trên lồng nhiều vòng lặp qua lại để lấy data khác nhau v.v
//Api: là 1 nền tảng giúp chia sẻ các tính năng cho các api khác có thể sử dụng các tính năng của chúng