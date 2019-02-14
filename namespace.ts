// 命名空间

namespace shuaiGe {
    export class DeHua {
        public name: string = '刘德华'

        public talk() {
            console.log('我是帅哥刘德华')
        }

    }
}

namespace bajie {
    export class DeHua {
        public name: string = '刘德华'

        public talk(): void {
            console.log('我是二师兄马德华')
        }

    }
}


let dehua1: shuaiGe.DeHua = new shuaiGe.DeHua()
let dehua2: bajie.DeHua = new bajie.DeHua()

dehua1.talk();
dehua2.talk();


let myFavoriteNumber: string | number = 7;
myFavoriteNumber = 'asd'