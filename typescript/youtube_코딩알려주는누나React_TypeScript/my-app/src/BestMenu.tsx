import React from "react";
import { Menu } from "./model/resturant";

// 이미 타입 지정해둔게 있다 그러면 interface에서 extends쓰임
interface OwnProps extends Omit<Menu, 'price'> { 
    // 여기에 추가하고 싶은게 있다 하면 추가로 작성하면 됨.
    showBestMenuName(name:string):string
}

// type은 &를 활용
/*
type typeProps = Menu & {
    showBestMenuName(name:string):string
}
*/

const BestMenu: React.FC<OwnProps> = ({ name, category, showBestMenuName }) => { 
    return (
        <div>{ name }</div>
    )
}

export default BestMenu;