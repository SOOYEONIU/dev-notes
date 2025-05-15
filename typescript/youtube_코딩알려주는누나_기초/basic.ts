// 변수 타입
// number
// string
// boolean
// null
// undefined
// any

let a: number = 3;
// a = "My name is sooyeon"; // Error: 'string' 형식은 'number' 형식에 할당할 수 없습니다.
let b: string = 'hi sooyeon';
// b = 3; // Error: 'number' 형식은 'string' 형식에 할당할 수 없습니다.
let c: any = 4;
c = "My name is sooyeon"; // Not Error => but, 사용을 줄여야한다. any를 남발하다보면 TypeScript를 쓰는 이유가 없어진다.

//숫자, 문자 둘중에 뭐가 올지 모르겠다.
let d: number | string;
d = 1; // Ok
d = "sooyeon"; // Ok
// d = null // Error: 'null' 형식은 'string | number' 형식에 할당할 수 없습니다.

// Array
let e: string[] = ['apple', 'mango'];

// function
const addNumber = (a:number, b:number):number => { 
    return a + b;
}
addNumber(3, 6);

// tsc는 typeScript를 JavaScript로 변환해주는 명령어