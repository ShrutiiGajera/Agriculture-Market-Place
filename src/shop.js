import React, { useState } from 'react';

import './css/shop.css'
import carrot from './images/carrot.jpg'
import brocoli from './images/brocoli.jpg'
import poteto from './images/poteto.jpg'
import tometo from './images/tometo.jpg'
import CartView from './CartView'
import orange from './images/orange.jpg'
import grapes from './images/grapes.jpg'
import watermelon from './images/watermelon.jpg'
import apple from './images/apple.jpg'
import {Link, useNavigate} from 'react-router-dom';
import a from './images/a.jpg'
import b from './images/b.jpg'
import c from './images/c.jpg'
import d from './images/d.jpg'
import e from './images/e.jpg'
import g from './images/g.jpg'
import h from './images/h.jpg'
import i from './images/i.jpg'
import j from './images/j.jpg'
import k from './images/k.jpg'
import l from './images/l.jpg'
import m from './images/m.jpg'
import n from './images/n.jpg'
import o from './images/o.jpg'
import p from './images/p.jpg'
import f from './images/f.jpg'
import q from './images/q.jpg'
import a1 from './images/a1.jpg'
import b1 from './images/b1.jpg'
import c1 from './images/c1.jpg'
import d1 from './images/d1.jpg'
import e1 from './images/e1.jpg'
import f1 from './images/f1.jpg'
import g1 from './images/g1.jpg'
import h1 from './images/h1.jpg'
import i2 from './images/i2.jpg'
import j1 from './images/j1.jpg'
import k1 from './images/k1.jpg'
import l1 from './images/l1.jpg'
import m1 from './images/m1.jpg'
import n1 from './images/n1.jpg'
import o1 from './images/o1.jpg'
import p1 from './images/p1.jpg'
import q1 from './images/q1.jpg'
import r1 from './images/r1.jpg'
import s1 from './images/s1.jpg'
import t2 from './images/t2.jpg'
import u1 from './images/u1.jpg'
import v1 from './images/v1.jpg'
import w1 from './images/w1.jpg'
import x1 from './images/x1.jpg'
import y1 from './images/y1.jpg'
import z from './images/z.jpg'
import z1 from './images/z1.jpg'
import a1a from './images/a1a.jpg'
import a2a from './images/a2a.jpg'
import a3a from './images/a3a.jpg'
import a4a from './images/a4a.jpg'
import a5a from './images/a5a.jpg'
import a6a from './images/a6a.jpg'
import a7a from './images/a7a.jpg'
import a8a from './images/a8a.jpg'
import a9a from './images/a9a.jpg'
import a10a from './images/a10a.jpg'
import a11a from './images/a11a.jpg'




function Shop() {

    const navigate = useNavigate();

    
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [showCart, setShowCart] = useState(false); // State to control cart view

    const addToCart = (name, price) => {
        const newItem = {
            id: cartItems.length + 1,
            name: name,
            price: price
        };
        console.log(newItem);
        setCartItems([...cartItems, newItem]);
        setCartCount(cartCount + 1); // Update cart count
    };
    const updateCartItems = (updatedItems) => {
        setCartItems(updatedItems);
    };
    const clearCart = () => {
        setCartItems([]);
        setCartCount(0);
    };

    const viewCart = () => {
        setShowCart(true);
    };

    
    // const redirectToViewCart = () => {
    //     navigate('/view-cart', { cartItems: cartItems.slice() }); // Pass a copy of cartItems
    // };
    const redirectToViewCart = () => {
        navigate('/view-cart', { state: { cartItems } }); // Pass updated cartItems
      };

    return (
        <>
            <nav>
                <div className="row">
                    <div className="col">
                   
                    <button type="button" className="cart" onClick={redirectToViewCart}>
                            Cart ({cartCount})
                        </button>
                         <button className="cartt" onClick={clearCart}>Clear Cart</button>
                    </div>
                </div>
            </nav>
            
            <div>
                <p className='veg'>VEGETABLES</p>
            </div>
            <div class="cooontainer">
                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={carrot} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>CARROT</p>
                                <p class="card-text">₹ 50.00 per Kg.</p>
                                <button onClick={() => addToCart("Carrot", 50)} className="add-to-cart btn btn-primary">Add to cart</button>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={poteto} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>POTETO</p>
                                <p class="card-text">₹ 40.00 per Kg.</p>
                                <button onClick={() => addToCart("Poteto", 40)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={brocoli} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>BROCOLI</p>
                                <p class="card-text">₹ 80.00 per Kg.</p>
                                <button onClick={() => addToCart("Brocoli", 80)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={tometo} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>TOMETO</p>
                                <p class="card-text">₹ 30.00 per Kg.</p>
                                <button onClick={() => addToCart("Tometo", 30)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>MIANT</p>
                                <p class="card-text">₹ 10.00 per Kg.</p>
                                <button onClick={() => addToCart("Miant", 10)} className="add-to-cart btn btn-primary">Add to cart</button>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={b} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>SPONGE GOURD</p>
                                <p class="card-text">₹ 30.00 per Kg.</p>
                                <button onClick={() => addToCart("Sponge Gourd", 30)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={c} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>MASHROOM</p>
                                <p class="card-text">₹ 100.00 per Kg.</p>
                                <button onClick={() => addToCart("Mashroom", 100)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={d} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>BITTER GOURD</p>
                                <p class="card-text">₹ 60.00 per Kg.</p>
                                <button onClick={() => addToCart("Bitter Gourd", 60)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={e} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>SPINACH</p>
                                <p class="card-text">₹ 50.00 per Kg.</p>
                                <button onClick={() => addToCart("Spinach", 50)} className="add-to-cart btn btn-primary">Add to cart</button>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={g} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>RADISH</p>
                                <p class="card-text">₹ 50.00 per Kg.</p>
                                <button onClick={() => addToCart("Radish", 50)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={h} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>CHILLI</p>
                                <p class="card-text">₹ 30.00 per Kg.</p>
                                <button onClick={() => addToCart("Chilli", 30)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={i} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>GREEN CHILLI</p>
                                <p class="card-text">₹ 40.00 per Kg.</p>
                                <button onClick={() => addToCart("Green Chilli", 40)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={j} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>GINGER</p>
                                <p class="card-text">₹ 140.00 per Kg.</p>
                                <button onClick={() => addToCart("Ginger", 140)} className="add-to-cart btn btn-primary">Add to cart</button>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={k} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>PEAS</p>
                                <p class="card-text">₹ 40.00 per Kg.</p>
                                <button onClick={() => addToCart("Peas", 40)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={l} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>FENUGREEK</p>
                                <p class="card-text">₹ 80.00 per Kg.</p>
                                <button onClick={() => addToCart("Fenugreek", 80)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={m} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>CORIANDER</p>
                                <p class="card-text">₹ 20.00 per Kg.</p>
                                <button onClick={() => addToCart("Coriander", 20)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={n} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>LEAMON</p>
                                <p class="card-text">₹ 100.00 per Kg.</p>
                                <button onClick={() => addToCart("Leamon", 100)} className="add-to-cart btn btn-primary">Add to cart</button>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={o} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>LADY FINGER</p>
                                <p class="card-text">₹ 30.00 per Kg.</p>
                                <button onClick={() => addToCart("Lady Finger", 30)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={p} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>CAULI FLOWER</p>
                                <p class="card-text">₹ 30.00 per Kg.</p>
                                <button onClick={() => addToCart("Cauli Flower", 30)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={q} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>CABBAGE</p>
                                <p class="card-text">₹ 20.00 per Kg.</p>
                                <button onClick={() => addToCart("Cabbage", 20)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={f} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>CAESICUM</p>
                                <p class="card-text">₹ 50.00 per Kg.</p>
                                <button onClick={() => addToCart("Caesicum", 50)} className="add-to-cart btn btn-primary">Add to cart</button>

                            </div>
                        </div>
                    </div>
                </div>
              
                <br/><br/>


                <div>
                <p className='veg'>FRUITS</p>
            </div>
                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={orange} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>ORANGE</p>
                                <p class="card-text">₹ 100.00 per Kg.</p>
                                <button onClick={() => addToCart("Orange", 100)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={grapes} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>GRAPES</p>
                                <p class="card-text">₹ 50.00 per Kg.</p>
                                <button onClick={() => addToCart("Grapes", 50)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={watermelon} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>WATERMELON</p>
                                <p class="card-text">₹ 30.00 per Kg.</p>
                                <button onClick={() => addToCart("Watermelon", 30)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={apple} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>APPLE</p>
                                <p class="card-text">₹ 120.00 per Kg.</p>
                                <button onClick={() => addToCart("Apple", 120)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>MANGO</p>
                                <p class="card-text">₹ 150.00 per Kg.</p>
                                <button onClick={() => addToCart("Mango", 150)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={b1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>BANANA</p>
                                <p class="card-text">₹ 60.00 per Kg.</p>
                                <button onClick={() => addToCart("Banana", 60)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={c1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>PINEAPPLE</p>
                                <p class="card-text">₹ 50.00 per Kg.</p>
                                <button onClick={() => addToCart("Pineapple", 50)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={d1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>STRAWBERRY</p>
                                <p class="card-text">₹ 100.00 per Kg.</p>
                                <button onClick={() => addToCart("Strawberry", 100)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={e1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>BLACKBERRY</p>
                                <p class="card-text">₹ 150.00 per Kg.</p>
                                <button onClick={() => addToCart("Black Berry", 150)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={f1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>FIG</p>
                                <p class="card-text">₹ 200.00 per Kg.</p>
                                <button onClick={() => addToCart("Fig", 200)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={g1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>MUSKMELON</p>
                                <p class="card-text">₹ 80.00 per Kg.</p>
                                <button onClick={() => addToCart("Muskmelon", 80)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={h1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>KIWI</p>
                                <p class="card-text">₹ 100.00 per Kg.</p>
                                <button onClick={() => addToCart("Kiwi", 100)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={i2} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>RASPBERRY</p>
                                <p class="card-text">₹ 150.00 per Kg.</p>
                                <button onClick={() => addToCart("Raspberry", 150)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={j1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>STARTFRUIT</p>
                                <p class="card-text">₹ 40.00 per Kg.</p>
                                <button onClick={() => addToCart("StarFruit", 40)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={k1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>PEAR</p>
                                <p class="card-text">₹ 180.00 per Kg.</p>
                                <button onClick={() => addToCart("Pear", 180)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={l1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>SWEET LIME</p>
                                <p class="card-text">₹ 50.00 per Kg.</p>
                                <button onClick={() => addToCart("Sweet Lime", 50)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={m1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>POMEGRANATE</p>
                                <p class="card-text">₹ 100.00 per Kg.</p>
                                <button onClick={() => addToCart("Pomegranate", 100)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={n1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>CHERRY</p>
                                <p class="card-text">₹ 210.00 per Kg.</p>
                                <button onClick={() => addToCart("Cherry", 210)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={o1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>CUSTARD APPLE</p>
                                <p class="card-text">₹ 180.00 per Kg.</p>
                                <button onClick={() => addToCart("Custard Apple", 180)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={p1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>PEACH</p>
                                <p class="card-text">₹ 200.00 per Kg.</p>
                                <button onClick={() => addToCart("Peach", 200)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={q1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>BLUEBERRY</p>
                                <p class="card-text">₹ 250.00 per Kg.</p>
                                <button onClick={() => addToCart("Bluebery", 250)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={r1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>GUAVA</p>
                                <p class="card-text">₹ 80.00 per Kg.</p>
                                <button onClick={() => addToCart("Guava", 80)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={s1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>COCONUT</p>
                                <p class="card-text">₹ 60.00 per Kg.</p>
                                <button onClick={() => addToCart("Coconut", 60)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={t2} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>TAMARIND</p>
                                <p class="card-text">₹ 120.00 per Kg.</p>
                                <button onClick={() => addToCart("Tamarind", 120)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={u1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>RAISINS</p>
                                <p class="card-text">₹ 150.00 per Kg.</p>
                                <button onClick={() => addToCart("Raisins", 150)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={v1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>ALMOND</p>
                                <p class="card-text">₹ 520.00 per Kg.</p>
                                <button onClick={() => addToCart("Almond", 520)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={w1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>AVOCADO</p>
                                <p class="card-text">₹ 80.00 per Kg.</p>
                                <button onClick={() => addToCart("Avocado", 80)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={x1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>SUGER CANE</p>
                                <p class="card-text">₹ 120.00 per Kg.</p>
                                <button onClick={() => addToCart("Suger Cane", 120)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={y1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>LYCHEE</p>
                                <p class="card-text">₹ 90.00 per Kg.</p>
                                <button onClick={() => addToCart("Lychee", 90)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={z} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>PAPAYA</p>
                                <p class="card-text">₹ 30.00 per Kg.</p>
                                <button onClick={() => addToCart("Papaya", 30)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={z1} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>DRAGON RUIT</p>
                                <p class="card-text">₹ 80.00 per Kg.</p>
                                <button onClick={() => addToCart("Dragon Fruit", 80)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" alt="Card image cap" />
                            <div class="card-block">
                            </div>
                        </div>
                    </div>
                </div>
               
                <br/><br/>
                

                <div>
                <p className='veg'>GRAINS</p>
            </div>
                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a1a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>BARELY</p>
                                <p class="card-text">₹ 80.00 per Kg.</p>
                                <button onClick={() => addToCart("Barely", 80)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a2a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>BEATEN PADDY</p>
                                <p class="card-text">₹ 90.00 per Kg.</p>
                                <button onClick={() => addToCart("Beaten Paddy", 90)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a3a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>BEANS</p>
                                <p class="card-text">₹ 120.00 per Kg.</p>
                                <button onClick={() => addToCart("Beans", 120)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a4a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>LINSEED</p>
                                <p class="card-text">₹ 220.00 per Kg.</p>
                                <button onClick={() => addToCart("Linseed", 220)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a5a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>GREAT MILLET</p>
                                <p class="card-text">₹ 90.00 per Kg.</p>
                                <button onClick={() => addToCart("Great Millet", 90)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a6a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>WHEAT</p>
                                <p class="card-text">₹ 140.00 per Kg.</p>
                                <button onClick={() => addToCart("Wheat", 140)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a7a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>MAIZE</p>
                                <p class="card-text">₹ 180.00 per Kg.</p>
                                <button onClick={() => addToCart("Maize", 180)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a8a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>MILLET</p>
                                <p class="card-text">₹ 250.00 per Kg.</p>
                                <button onClick={() => addToCart("Millet", 250)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a9a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>RICE</p>
                                <p class="card-text">₹ 45.00 per Kg.</p>
                                <button onClick={() => addToCart("Rice", 45)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a10a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>SESAMUM</p>
                                <p class="card-text">₹ 90.00 per Kg.</p>
                                <button onClick={() => addToCart("Sesamum", 90)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <img class="caard-img-top" src={a11a} alt="Card image cap" />
                            <div class="card-block">
                                <p class='tometo'>LENTIL</p>
                                <p class="card-text">₹ 80.00 per Kg.</p>
                                <button onClick={() => addToCart("Lentil", 80)} className="add-to-cart btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="caard">
                            <div class="card-block">
                            </div>
                        </div>
                    </div>       
                </div> 
            </div>
                    </>
    );

}
export default Shop
