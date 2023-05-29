const Orders = require('./order')
const Order_Details = require('./order_detail')
const Customers = require('./customer')


Orders.hasMany(Order_Details, {
    foreignKey: "id_order",
});
Order_Details.belongsTo(Orders, {
    foreignKey: "id_order",
});
Customers.hasMany(Orders, {
    foreignKey: "id_customer",
});
Orders.belongsTo(Customers, {
    foreignKey: "id_customer",
});

module.exports = {
    Orders,
    Order_Details,
    Customers
}
