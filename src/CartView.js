import React from 'react';

const CartView = ({ cartItems, onClose }) => {
    return (
        <div className="modal fade" id="cart" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Cart</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table className="show-cart table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div>Total price: $<span className="total-cart">{cartItems.reduce((total, item) => total + item.price, 0)}</span></div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartView;
