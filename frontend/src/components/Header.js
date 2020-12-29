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
                        <a className="aa" href="/cart">

                            Cart
                    <FaShoppingCart className='cart-icon'></FaShoppingCart>
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}

                        </a>
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
                                                <a href="/profile" className='dropdown-link aa'>User Profile</a>
                                            </li>
                                            <li className='lii'>
                                                <a className="aa" href="/orderhistory" className='dropdown-link'>Order History</a>
                                            </li>
                                            <li className='lii'>
                                                <a className="aa" href='/' onClick={signoutHandler} className='dropdown-link'>Sign Out </a>
                                            </li>
                                        </ul>
                                    </div>
                                    : <a className="aa" href="/signin">
                                        Sign In <FaSignInAlt className="signin-icon">
                                        </FaSignInAlt>

                                    </a>
                            }
                        </div>
                    </li>
                </ul>


            </nav>
            <div className='background-div'></div>
        </>
    );
}
