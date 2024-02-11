// task 1

// class Product {
//     constructor(name, price, count) {
//         this.name = name
//         this.price = price
//         this.count = count
//     }
//     TotalPrice(...products) {
//         let totalPrice = 0;
//         for (let i = 0; i < products.length; i++) {
//             const product = products[i];
//             totalPrice += product.price * product.count;
//         }
//         console.log("Total Price:", totalPrice, "AZN");
//     }
// }

// let kofe = new Product("kofe", 0.5, 2);
// let cay = new Product("cay", 4, 3);
// let cola = new Product("cola", 2, 2);

// const umumimebleg = new Product();
// umumimebleg.TotalPrice(kofe, cay, cola,);



// task 2


// function smallest(arr, callback) {
//     let min = arr[0]
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//     }
//     return callback(min)
// }

// function Output(output) {
//     console.log(output);
// }

// let arr = [94, 7, 23, 49, 90]
// let a = Array.isArray(arr);

// if (a) {
//     smallest(arr, Output);
// }
// else {
//     console.log("array deyil");
// }



// task 3

// class Animal {
//     Eat(yemek) {
//         this.eat = yemek
//         console.log(eat);
//     }
//     Walk(gezmek) {
//         this.walk = gezmek
//         console.log(walk);
//     }
//     Getinfo() {
//         return `heyvanin yemeyi:${this.eat}  heyvanin gezdiyi:${this.walk}`
//     }
// }

// class Bird extends Animal {
//     constructor(ad, yemek, metr) {
//         super(metr, yemek);
//         this.nameanimal = ad;
//         this.eat = yemek
//         this.gezmek = metr


//     }
//     Getinfo() {
//         return `heyvanin adi:${this.nameanimal}  heyvanin yemeyi:${this.eat}  heyvanin gezdiyi:${this.gezmek} m`
//     }
// }
// let newAnimal = new Bird("aslan", "et", 5)
// console.log(newAnimal.Getinfo());
