import { NavLink } from "react-router-dom";

function Navbar() {
    const activeStyle = {
        backgroundColor: 'yellow',
        color: 'blue'
    }

    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/main" style={
                        (isActive) => 
                            isActive? activeStyle: null
                    }>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/about" style={
                        (isActive) => 
                            isActive? activeStyle: null
                    }>소개</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" style={
                        (isActive) => 
                            isActive? activeStyle: null
                    }>메뉴목록</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;