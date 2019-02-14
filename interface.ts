// 接口  ：对「对象的形状（Shape）」进行描述。
interface MyGirl {
    gender: string
    interest: string
    aga: number
    rich?: boolean //可选参数
}

let someGirl: MyGirl = {
    gender: 'female',
    interest: 'coding',
    aga: 18,
    rich: true

}
console.log(typeof someGirl)

// 接口中规范函数

interface SearchMan {
    (source: string, subSource: string): boolean;
}

let mySearch: SearchMan = function (source: string, subSource: string): boolean {
    return source.includes(subSource);
}

console.log('search result::', mySearch('高富帅', '穷'))