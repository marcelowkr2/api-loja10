const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // Campos do modelo Order
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer'
  }
});

const Order = mongoose.model('Order', orderSchema);

const orderDetailSchema = new mongoose.Schema({
  // Campos do modelo Order_Detail
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

const customerSchema = new mongoose.Schema({
  // Campos do modelo Customer
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = {
  Order,
  OrderDetail,
  Customer
};
