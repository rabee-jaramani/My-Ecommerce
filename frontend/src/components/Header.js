import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCart } from '../actions/cartActions';
import { signout } from '../actions/userActions';
import { FaShoppingCart, FaSignInAlt, FaUserCheck } from 'react-icons/fa'
import '../header'
import { MdStars } from "react-icons/md";
export default function Header() {
    // use selector is selecting from STOOORREE
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const signoutHandler = () => {
        dispatch(signout());
        //added
        dispatch(deleteCart());
    }
    return (
        <header className="header-div" id='navbar'>
            <div >
                <Link className="brand" to="/">

                    E-Star
                    <MdStars className='logo-icon'></MdStars>
                </Link>
            </div>

            <div>
                <Link to="/cart">
                    Cart
                    <FaShoppingCart className='cart-icon'></FaShoppingCart>
                    {cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                    )}
                </Link>

                {
                    (userInfo)
                        ? <div className='dropdown'>
                            <Link to="#">{userInfo.name}<FaUserCheck className='user-icon'></FaUserCheck>
                                {' '} </Link>
                            <ul className='dropdown-content'>
                                <li>
                                    <Link to="/profile">User Profile</Link>
                                </li>
                                <li>
                                    <Link to="/orderhistory">Order History</Link>
                                </li>
                                <li>
                                    <Link to='/' onClick={signoutHandler}>Sign Out </Link>
                                </li>
                            </ul>
                        </div>
                        : <Link to="/signin">Sign In <FaSignInAlt className="signin-icon">
                        </FaSignInAlt></Link>
                }
            </div>
        </header>

    )
}
