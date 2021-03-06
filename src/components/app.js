import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import ReactToggle from 'react-toggle';
import 'react-toggle/style.css';
import noop from './../utils/no-op';

import ProductList from './product-list';
import Cart from './cart';
import Counter from './cart/counter';

import products from './../utils/products';

const cartProducts = products
  .map(p => ({
    ...p,
    quantity: 1,
  }))
  .slice(0, 2);

const counter = 3;
const amount = 1337;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Redux Shopping Cart</a>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav pullRight>
            <NavItem eventKey={1}>
              <div className="toggle-container">
                <span>Display only items in stock</span>
                <ReactToggle />
              </div>
            </NavItem>
            <NavItem eventKey={2}>
              <Counter count={counter} />
            </NavItem>

          </Nav>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={6}>
              <h2>Our products</h2>
              <ProductList
                products={products}
                addToCart={noop}
              />
            </Col>
            <Col sm={6}>
              <h2>Your shopping cart</h2>
              <Cart
                products={cartProducts}
                amount={amount}
                addToCart={noop}
                removeFromCart={noop}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
