const users = [];
users[0] = {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow", "Pink", "White", "Purple"],
    isHavePet: "Yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: "2016"
        }
    ],
    favoriteRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]
};
users[1] = {
    education: [
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: "2019"
        }
    ]

};
users[2] = {
    education: [
        {
            name: "SMA 03",
            city: "Tangerang"
        }
    ]

};
users[3] = {
    name: "Wendy",
    gender: "Male",
    age: "23",
    email: "wendi@dingdong.com",
    favoriteColor: ["Blue", "Black", "Gray"],
    isHavePet: "No",
    education: [
        {
            name: "SD 02",
            city: "Jakarta",
            graduate: "2010"
        }
    ],
    favoriteRestaurant: ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]

};
users[4] = {
    education: [
        {
            name: "SMP 03",
            city: "Bogor",
            graduate: "2013"
        }
    ]

};
users[5] = {
    education: [
        {
            name: "SMA 01",
            city: "Surabaya",
            graduate: "2016"
        }
    ]

};
users[6] = {
    education: [
        {
            name: "Universitas Maju",
            city: "Tangerang"
        }
    ]

};


console.log("Nama : " + users[3].name);
console.log("Sekolah : " + users[5].education[0].name);
console.log("Kota : " + users[5].education[0].city);
console.log("Makanan Favorit : " + users[3].favoriteRestaurant[5]);
