import { useSearchParams } from "react-router-dom"; // 사용자가 검색한 쿼리 스트링을 받아오겠다
import { searchMenu } from "../api/MenuApi";
import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import boxStyle from './Menu.module.css';
import Menu from "./Menu";

function MenuSearchResult() {
    
    const [searchParam] = useSearchParams();
    const searchMenuName = searchParam.get("menuName"); // 쿼리스트링파라미터
    const [menuList, setMenuList] = useState([]);

    useEffect(
        () => {
            setMenuList(searchMenu(searchMenuName));
        }, []
    );

    return (
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.MenuBox}>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );
}
export default MenuSearchResult;