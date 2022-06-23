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
infoArr.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);

//Hiển thị 4 contact ban đầu
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
    let fillIn = document.getElementsByTagName("input");
    let contacts = document.createElement("div");
    contacts.className = "contact";
    let name = document.createElement("span");
    // viết hoa chữ cái đầu tiên
    name.innerHTML = capitalizeFirstLetter(fillIn[0].value);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let phone = document.createElement("span");
    phone.innerHTML = fillIn[1].value;
    contacts.appendChild(name);
    contacts.appendChild(phone);
    // thêm contact mới vào mảng danh bạ
    contactArr[contactArr.length] = contacts.innerHTML;
    // infoArr[infoArr.length].name = name.innerText;
    // infoArr[infoArr.length].phone = phone.innerText;
    // xóa danh bạ cũ đi
    while (listInfo.hasChildNodes()) {
        listInfo.removeChild(listInfo.firstChild);
    }
    // Thêm danh bạ mới, và sắp xếp thứ tự
    for (let j = 0; j < contactArr.length; j++) {
        let contacts = document.createElement("div");
        contacts.className = "info";
        contactArr.sort();
        contacts.innerHTML = contactArr[j];
        listInfo.appendChild(contacts);
    }
};
console.log(contactArr);
// console.log(infoArr);

// Search
function searchInfo() {
    let fillIn = document.getElementsByTagName("input");
    let searchText = fillIn[3].value
    console.log(searchText);
    for (let i = 0; i < contactArr.length; i++) {
        let contact = listInfo.children[i].firstChild;
        console.log(contact.innerText);
        let searchNum = contact.innerText.indexOf(searchText)
        console.log(searchNum);
        if (searchNum == -1) {
            listInfo.children[i].style.display = "none";
        } else {
            listInfo.children[i].style.display = "flex";
        }
    }
}
