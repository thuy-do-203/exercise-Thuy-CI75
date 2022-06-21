let infoArr = [
    {
        name: "Cris",
        phone: "(864)-309-4841",
    },
    {
        name: "Alice",
        phone: "(816)-403-5456",
    },
    {
        name: "Bob",
        phone: "(572)-566-2397",
    },
    {
        name: "Daniel",
        phone: "(816)-403-5456",
    }
];
let listInfo = document.getElementById("listInfo");
let contactArr = [];

// Sắp xếp theo tên
function compare(a, b) {
    if (a.name < b.name){
    return -1;
    }
    if (a.name > b.name){
    return 1;
    }
    return 0;
}
infoArr.sort(compare);

for (let i = 0; i < infoArr.length; i++) {
    let contacts = document.createElement("div");
    contacts.className = "info";
    let name = document.createElement("span");
    name.innerHTML = infoArr[i].name;
    let phone = document.createElement("span");
    phone.innerHTML = infoArr[i].phone;
    contacts.appendChild(name);
    contacts.appendChild(phone);
    listInfo.appendChild(contacts);
    contactArr[i] = contacts.innerHTML;
}

// Thêm thông tin sau khi nhấn nút "Thêm"
function addInfo() {
    let fillIn = document.getElementsByTagName('input');
    let contacts = document.createElement("div");
    contacts.className = "info";
    let name = document.createElement("span");
    // viết hoa chữ cái đầu tiên
    name.innerHTML = capitalizeFirstLetter(fillIn[0].value);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let phone = document.createElement("span");
    // kiểm tra xem số điện thoại
    phone.innerHTML = fillIn[1].value;
    function checkLetter(string) {
        return /[a-zA-z]/.test(string);
    }
    // nếu số điện thoại có chữ cái thì thông báo
    if (checkLetter(fillIn[1].value) == true) {
        alert("please do not type any letter in the phone number!");
    } else {
        contacts.appendChild(name);
        contacts.appendChild(phone);
        // thêm contact mới vào mảng danh bạ
        contactArr[contactArr.length] = contacts.innerHTML;
        // xóa danh bạ cũ đi
        while (listInfo.hasChildNodes()) {
            listInfo.removeChild(listInfo.firstChild);
        }
        // bổ sung danh bạ mới, đã được sắp xếp thứ tự
        for (let j = 0; j < contactArr.length; j++) {
            let contacts = document.createElement("div");
            contacts.className = "info";
            contactArr.sort();
            contacts.innerHTML = contactArr[j];
            listInfo.appendChild(contacts);
        }
    }
};
