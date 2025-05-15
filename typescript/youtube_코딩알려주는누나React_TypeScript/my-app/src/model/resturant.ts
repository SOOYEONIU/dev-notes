// let data = {
//     name: "OO식당",
//     address: {
//         city: 'incheon',
//         detail: 'somewhere',
//         zipCode: 204023
//     },
//     menu: [{ name: "rose pasta", price: 2000, category: "Pasta" }, { name: "garlic steak", price: 3000, category: "Steak" }]
// }
// type interface 차이점 비교
// export type Restaurant = {
//     name: string;
//     category: string;
//     address: {
//         city: string,
//         detail: string;
//         zipCode: Number;
//     };
//     menu: {
//         name: string;
//         price: number;
//         category: string;
//     }[]
// }
// 객체를 타입으로 만들 수 있다. 세분화하면 할 수록 쉽게 가져다 쓸 수 있음
export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
}

export type Address = {
    city: string;
    detail: string;
    zipCode?: Number; // ? 옵션은 zipCode가 있을 수도 있고 없을 수 도 있고~를 의미 / 없어도 오케이가 됨 굳이 체크하지 않게 되니까 주의해서 쓰는게 좋다.
}

export type Menu = {
    name: string;
    price: number;
    category: string;
}
// 더 붙이고 싶을 때 확장하고 싶을 때 extends를 씀

// type이랑 interface의 차이
// type에서만 쓸 수 있는 기능  (유틸리티 타입 -> 제네릭 타입으로 불린다.)
// -> 타입이 설정되어있는 옵션중 하나는 필요 없을 때 빼고 싶을때 Omit 사용
export type AdderssWithoutZip = Omit<Address, 'zipCode'>;

// 반대로 추가해주세요도 있다. -> Pick
export type RestanrantOnlyCategory = Pick<Restaurant, 'category'> 

// API 데이터 호출 시
/*
{
    data: [],
    totalPage: number,
    page: number
}
이런식으로 쓰면 된다. 제네릭은 어떤 타입이 들어올지 모를때 쓰면 좋다.
*/ 
export type ApiResponse<T> = {
    data: [],
    totalPage: number,
    page:number
}
export type RestaurantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>
