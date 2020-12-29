import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCart } from '../actions/cartActions';
import { signout } from '../actions/userActions';
import { FaShoppingCart, FaSignInAlt, FaUserCheck } from 'react-icons/fa'

import { MdStars } from "react-icons/md";
export default function StyledHeader() {
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
        <>
            <nav className="navv">
                <input type="checkbox" id="checkk" />
                <label for="checkk" class="checkbtnn">
                    <i class="fa fa-bars"></i>
                </label>
                <label class="logo">
                    <Link className="brand" to="/">
                        E-Star
                    <MdStars className='logo-icon'></MdStars>
                    </Link>
                </label>
                <ul className='ull'>
                    <li className='lii'>
                        <a className="aa" href="/">
                            Home
                        </a>
                    </li>
                    <li className='lii'>
                        <a className="aa" href="/">About</a>
                    </li>
                    <li className='lii'>
                        <a className="aa" href="/">Services</a>
                    </li>
                    <li className='lii'>
                        <Link to="/cart" className="aa">
                            Cart
                    <FaShoppingCart className='cart-icon'></FaShoppingCart>
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                    </li>
                    <li className='lii'>
                        <div>
                            {
                                (userInfo)
                                    ? <div className='dropdown'>
                                        <Link to="#" className="aa" >{userInfo.name}<FaUserCheck className='user-icon'></FaUserCheck>
                                            {' '} </Link>
                                        <ul className='dropdown-content'>
                                            <li className='lii'>
                                                <Link to="/profile" className='dropdown-link'>User Profile</Link>
                                            </li>
                                            <li className='lii'>
                                                <Link to="/orderhistory" className='dropdown-link'>Order History</Link>
                                            </li>
                                            <li className='lii'>
                                                <Link to='/' onClick={signoutHandler} className='dropdown-link'>Sign Out </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    : <Link to="/signin" className="aa" href='signin-div'>Sign In <FaSignInAlt className="signin-icon">
                                    </FaSignInAlt></Link>
                            }
                        </div>
                    </li>
                </ul>


            </nav>
            <div className='background-div'></div>
        </>
    );
}
