"use strict"

const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
            ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
            ]
    },
    {
        id: 8,
        price: 78,
    },
];

//фильтр
let filtProducts = products2.filter(item => item.photos !== undefined && item.photos.length !== 0);
console.log(filtProducts);

//сортировка
products2.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    else if (a.price < b.price) {
      return -1;
    }
});

console.log(products2);