import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
    const [number, setNumber] = useState(0);

    const activeStyle = {
        backgroundColor: 'black',
        color : 'white'
    }

    const onClick = () => {
        setNumber(number + 1);
    }

    return (
        <>
            {
                // <div>
                //     <ul>
                //         <li><a href={"/"}>Home</a></li>
                //         <li><a href={"/mypage"}>마이페이지</a></li>
                //         <li><a href={"/login"}>로그인</a></li>
                //     </ul>
                // </div>

                // <div>
                //     <ul>
                //         <li><Link to="/">HOME</Link></li>
                //         <li><Link to="/mypage">MYPAGE</Link></li>
                //         <li><Link to="/login">LOGIN</Link></li>
                //     </ul>
                // </div>
            }
            <div>
                <ul>
                    <li><NavLink to="/" style={({ isActive/*객체*/ }) => isActive ? activeStyle : undefined}>HOME</NavLink></li>
                    <li><NavLink to="/mypage" style={({ isActive }) => isActive ? activeStyle : undefined}>MYPAGE</NavLink></li>
                    <li><NavLink to="/login" style={({ isActive }) => isActive ? activeStyle : undefined}>LOGIN</NavLink></li>
                </ul>
            </div>

            <p>{number}</p>
            <button onClick={onClick}>state 테스트</button>
        </>
    )
}
export default Navbar;
