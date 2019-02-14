"use strict";
var someGirl = {
    gender: 'female',
    interest: 'coding',
    aga: 18,
    rich: true
};
console.log(typeof someGirl);
var mySearch = function (source, subSource) {
    return source.includes(subSource);
};
console.log('search result::', mySearch('高富帅', '穷'));
