const { Schema, model } = require("mongoose");
const Bid = require("./Bid");
const bcryptjs = require("bcryptjs");

const userSchema = new Schema({
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   default: () => new Types.ObjectId(),
  // },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  address: {
    type: String,
    // required: true,
  },
  bids: [{
    type: Schema.Types.ObjectId,
    ref: "Bid",
  }],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcryptjs.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcryptjs.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
