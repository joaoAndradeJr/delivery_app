import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

export default function Rout() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/customer/checkout" component={ CustomerCheckout } />
      <Route path="/customer/orders" component={ CustomerOrder } />
      <Route path="/customer/orders/:id" component={ OrderDetails } />
      <Route path="/sellers/orders" component={ SellerOrders } />
      <Route path="/sellers/orders/:id" component={ SellerOrdersDetails } />
      <Route path="/admin/manage" component={ AdminManage } />
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
    </Switch>
  );
}