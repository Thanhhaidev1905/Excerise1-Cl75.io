//  Câu 1: var khai báo một biến có phạm vi trong block?

// False vì khi khai báo 1 biến var sẽ xảy ra hiện tượng hoisting

// **Câu 2:** `const` khai báo một biến có phạm vi trong block?

// True vì trong ES6 const và let sẽ không có hoisting mà chỉ có phạm vi truy cập là trong block nó
//  được khai báo

//  **Câu 3:** `let` khai báo một biến có phạm vi trong block?

//  True vì trong ES6 const và let sẽ không có hoisting mà chỉ có phạm vi truy cập là trong block nó
//  được khai báo

//  Câu 4: Giá trị sau cùng của obj trong ví dụ sau là gì?
//  3. `{foo: 1, bar: 2}`

//  Câu 5: Kết quả của ví dụ sau đây là gì?
//  4. 'The quick brown fox jumps over the lazy dog.’

//  Câu 6: Giá trị của câu lệnh obj[123] trong ví dụ sau: 
//  1. `undefined`

//  Câu 7: Giá trị của array trong ví dụ sau:
//  3. `[4, 5, 6, 1, 2, 3]`

//  Câu 8: Giá trị của a trong ví dụ sau?
//  2. `[1, 23, 4]`

//  Câu 9: Giá trị của biểu thức sau?
//  1. `3`

//  **Câu 10:** Giá trị của a và b với ví dụ sau?
//  2. a = 3, b = 12

//  Câu 11 Giá trị của obj sau trong ví dụ sau?
//  2. `{name: “Code Intensive”}`

//  **Câu 12:** Giá trị của biểu `arr` trong ví dụ sau?
//  2. `[2, 2, 6, 4, 10]`

//  Câu 13: Giá trị của total trong ví dụ sau?
//  4. `16`



console.log("Problem 1");

const users = [
    { name: "Angelina Jolie", age: 8 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

function Problem1(users) {
    let arrUsers = users.map((user) => {
        return `<div><h1>${user.name}</h1><h2>${user.age}</h2></div>`;
    });
    return arrUsers;
}
console.log(Problem1(users));


console.log("==========Problem 2==========");
const students = [
    { name: 'Lan', gender: 'female' },
    { name: 'Linh', gender: 'female' },
    { name: 'Trung', gender: 'male' },
    { name: 'Peter', gender: 'other' }
];

console.log("Cách 1");
const notFemaleStudent2 = [];
const notFemaleStudent = students.map(student => {
    if (student.gender != 'female') return student;
});

for (student of notFemaleStudent) {
    if (student) {
        notFemaleStudent2.push(student);
    }
}

console.log(notFemaleStudent2);

console.log("Cách 2");
const notFemaleStudent1 = students.filter(student => student.gender !== 'female');
console.log(notFemaleStudent1);




console.log("==========Problem 3==========");
strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const anagram = [];

for (let i = 0; i < strs.length; i++) {
    if (strs[i]) {
        const group = [];
        group.push(strs[i]);
        const currentArrWord = strs[i].split("");
        currentArrWord.sort();
        for (let j = i + 1; j < strs.length; j++) {
            const tempArrWord = strs[j].split("");
            tempArrWord.sort();
            if (JSON.stringify(currentArrWord) == JSON.stringify(tempArrWord)) {
                group.push(strs[j]);
                strs[j] = '';
            }
        }
        strs[i] = "";
        anagram.push(group);
    }
}

console.log(JSON.stringify(anagram));


console.log("==========Problem 4==========");
nums = [4, 1, 2, 1, 2];
let countNum = []
for (let i = 0; i < nums.length; i++) {
    if (!countNum[nums[i]]) {
        countNum[nums[i]] = 1;
    } else {
        countNum[nums[i]]++;
    }
}

for (let i = 0; i < countNum.length; i++) {
    if (countNum[i] == 1) {
        console.log(i);
    }
}