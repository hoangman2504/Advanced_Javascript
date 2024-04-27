//!#10 Async & Await - Xử Lý Bất Đồng Bộ Sao Dễ Vậy
const getNewTodos = async(id) => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let data = await response.json();
    return data;
  }

  getNewTodos(2)
  .then((data) => {
    console.log(data);
  })

  //note: method async và await sử dụng khi phải lấy data từ api hoặc kết nối đến db v.v
  //note: khi sử dụng await thì phải có async trước => await là để chờ nó lấy data v.v
  //note: bản chất khi log trả về 1 promise tức là 1 tác vụ phải tốn tg thì khi đó phải
  //sử dụng async, await