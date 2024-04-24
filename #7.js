//!#7 Promises - Lời Hứa Để Giải Quyết Callback
//ở bài này học về cách sử dụng promise cho request
//học thêm về 2 thuộc tinh của Promise => then(), catch();
const callback = (error, data) => {
        if (error) {
          console.log("Some thing wrongs", error);
        }

        if (data) {
          console.log(">>> Calling callback with data: ", data);
        }
      };

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
              reject('Some thing wrongs');
            }
          };
  
          request.open("GET",`https://jsonplaceholder.typicode.com/todos/${id}`,true);
          request.send();
        })
        }

        getTodos(1)
        .then(data => {
          console.log('>>> Get data: ', data);

          getTodos(2)
          .then(data => {
            console.log('>>> Get data 2', data);
          })
        })
        .catch(error => {
          console.log('>>> ', error);
        })  

      // getTodos(1, (error, data) => {
      //   if (error) {
      //     console.log("Some thing wrongs", error);
      //   }

      //   if (data) {
      //     console.log(">>> Calling callback with data: ", data);

      //     getTodos(2, (error, data) => {
      //       if (error) {
      //         console.log("Some thing wrongs", error);
      //       }
      //       if (data) {
      //         console.log(">>> Calling callback with data: ", data);

      //         getTodos(3, (error, data) => {

      //           if (error) {
      //             console.log("Some thing wrongs", error);
      //           }
      //           if (data) {
      //             console.log(">>> Calling callback with data: ", data);
      //           }
      //         });
      //       }
      //     });
      //   }
      // });

      //promise example

      const promiseExp = () => {
        return new Promise((resolve, reject) => {
          // resolve({name: 'Take', age: 20});
          reject("Some thing wrongs");
        });
      };

        // promiseExp()
        //   .then((data) => {
        //     console.log(data);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

