// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const monicasColor = ["Yellow", "Pink", "White", "Purple"];
const monicasEducation = [{
    "name": "SD 01", 
    "city": "Jakarta", 
    "graduate": 2016
},{
    "name": "SMP 02", 
    "city": "Jakarta",
    "graduate": 2019
},{
    "name":" SMA 03", 
    "city": "Tangerang",
}];

const monicasRestourant = new Set();
monicasRestourant.add("Bento");
monicasRestourant.add("Sushi");
monicasRestourant.add("Pancake");
monicasRestourant.add("Eggy");
monicasRestourant.add("Tempura");
monicasRestourant.add("Bento");
monicasRestourant.add("Eggy");
monicasRestourant.add("Padang");
monicasRestourant.add("Tteok");
monicasRestourant.add("Sushi");
monicasRestourant.add("Sushi");

const firstUser = {
    "name":"Monica",
    "gender":"Female",
    "age":17,
    "email":"monica@dingdong.com",
    "favoriteColor":monicasColor,
    "isHavePet": "Yes",
    "education":[...monicasEducation],
    "favoriteRestaurant":[...monicasRestourant],
};


const wendysColor  = ["Blue", "Black", "Grey"];
const wendysEducation = [{
    "name": "SD 02",
    "city": "Jakarta",
    "graduate": 2010,
},{
    "name": "SMP 03",
    "city": "Bogor",
    "graduate": 2013,
},{
    "name": "SMA 02",
    "city": "Surabaya",
    "graduate": 2016,
},{
    "name": "Universitas Maju",
    "city": "Tangerang",
    "graduate": null,
}];

const wendysRestourant = new Set();
wendysRestourant.add("Tempura");
wendysRestourant.add("Bento");
wendysRestourant.add("Sushi");
wendysRestourant.add("Pancake");
wendysRestourant.add("Padang");
wendysRestourant.add("Katsu");
wendysRestourant.add("Geprek");
wendysRestourant.add("Pancake");
wendysRestourant.add("Eggy");

const secondUser = {
    "name":"Wendy",
    "gender": "male",
    "age": "23",
    "email": "wendy@dingdong.com",
    "favoriteColor":wendysColor,
    "isHavePet": "No",
    "education":[...wendysEducation],
    "favoriteRestaurant":[...wendysRestourant],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser,secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};