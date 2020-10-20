let array = [];// khai báo mảng rỗng
let menu = ['com', 'bun', 'pho', 'mien'];// init array: khởi tạo menu
menu.push ('mi'); //create array: tạo thêm 1 phần tử vào menu - mì
console.log(menu[1]);// read array: đọc 1 phần tử trong menu vị trí 1 - bún
menu[1] = 'mi tom';//update array: thay đổi 1 nội dung phần tử trong vị trí số 1 - bún thành mì tôm
menu.splice(0, 1);// delete: xóa 1 phần tử ở vị trí thứ 0 trong menu - com
let n = menu.length // n là biến để đọc độ dài mảng hoặc đọc mảng có bn phần tử
// read all array:
{
for (let i=0; i<n; i++) // for (let i=0; i<menu.length; i++)
{
    console.log(i);
}
}
// update all array:
{
for (let i=0; i<menu.length; i++)
{
    menu[i] = ''; //thay nội dung toàn menu thành " "
}
}
// for: lặp có hạn; while: lặp vô hạn
while (true) // lặp lại nd trong vòng lặp nếu sai
{
    let n = Number(prompt ('Enter n:')); // y.c nhập từ bàn phím vào 1 số
    if (n) 
    {
        break; // nếu đúng là số thì break khỏi vòng lặp
    }
}
