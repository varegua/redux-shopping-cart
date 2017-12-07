import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  addToCart,
  removeFromCart,
  sendCart,
} from './../actions';

import isStockLimitReached from './../store/selectors/is-stock-limit-reached';
import getProductsInCart from './../store/selectors/get-products-in-cart';
import getTotalAmount from './../store/selectors/get-total-amount';
import isLoading from './../store/selectors/is-loading';

import Cart from './../components/cart';

import toJS from './../utils/to-js';

const isCartSaving = isLoading('cart');

const mapStateToProps = (state) => ({
  amount: getTotalAmount(state),
  isSaving: isCartSaving(state),
  products: getProductsInCart(state)
    .map(p => p.set('isAddDisabled', isStockLimitReached(state, p.get('id')))),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  addToCart,
  removeFromCart,
  save: sendCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Cart));
