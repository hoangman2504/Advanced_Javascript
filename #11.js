//!#11 Throwing Errors - Xử Lý Lỗi Với Javascript
//c1
const getNewTodos = async(id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    if(response && response.status !== 200){
      throw new Error('Some thing wrongs with status code: ' + response.status);
    } //reject
    let data = await response.json()
    return data; //resolve
   }

   getNewTodos('freyu')
     .then((data1) => {
      console.log('Get data1: ', data1);
     })
     .catch(err => {
      console.log('>>> Check error: ', err.message);
     })

     //đoạn mã này để báo lỗi khi requuest bị sai đường truyền là id thay vì truyền vào nó
     //là 1 string không xác định

//c2
const getTodos = async(id) => {
    try{
      let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      if(response && response.status !== 200){
        throw new Error('Some thing wrongs with status code: ' + response.status);
      } //reject
      let data = await response.json()
      return data; //resolve
    } catch(e) {
      console.log('>>> Check catch error: ', e.message);
    }
   }
   
   getTodos('freyu')
     .then((data1) => {
      console.log('Get data1: ', data1);
     })
     .catch(err => {
      console.log('>>> Check error: ', err.message);
     })

     //đoạn mã này báo lỗi khi request bị sai đường truyền khi lấy data về từ 1 request