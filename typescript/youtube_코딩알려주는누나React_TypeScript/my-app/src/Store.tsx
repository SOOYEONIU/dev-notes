import React from "react";
import { Address, Restaurant } from "./model/resturant";

interface OwnProps { 
    info: Restaurant,
    changeAddress(address:Address): void // 리턴 타입이 없으면 void를 지정
}

const Store: React.FC<OwnProps> = ({ info }) => { /*props에 타입 지정*/ 
    return (
        <div>{ info.name }</div>
    )
}

export default Store;