//!#12 Toán Tử 3 Dấu Chấm - Giản Lược Hóa Cùng Destructuring Assignment
let objA = {
    log1: 'Chopper',
    log2: 'Ussop',
    log3: 'Luffy'
};
let objB = {Log0: 'Robin',...objA, log4: 'Nami'};

console.log(objA);
console.log(objB);

//đoạn mã trên sử dụng ... copy obj từ objA và thêm 2 key mới vào objB

let arrA = [1, 2, 3, 4, 7, 8];
let arrB = [0, 3, ...arrA, 5, 6]

console.log(arrA)
console.log(arrB)

//đoạn mã sử dụng ... để copy arrA qua arrB và thêm 0, 3, 5, 6 cho arB

//c1: Lấy nhiều key obj ra cùng lúc
let obj = {
    name: 'Man',
    address: 'Quang Nam',
    nickname: 'Kin Dev'
}
let { name, address, nickname } = obj;

//c2: lấy nhiều key arr ra cùng lúc
console.log('>>> Check key obj: ', name, address, nickname);
let arr = ['Man', 'Quang Nam'];
let [ firstName, lastName] = arr;

console.log('>>> Check key arr: ', firstName, lastName);


