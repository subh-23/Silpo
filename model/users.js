const mongoose = require("mongoose");
//push this array into user order

//designing a friend model
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "free",
  },
  orders: {
    type: [
      {
        type: String,
        required: true,
      },
    ],
  },
  cart: {
    type: [
      {
        title: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        product_type: {
          type: String,
          required: true,
        },
      },
    ],
  },
});
module.exports = mongoose.model("users", UserSchema);
