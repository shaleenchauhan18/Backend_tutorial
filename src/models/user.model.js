import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, lowercase: true, trim: true, minLength: 1, maxLength: 30 },
    password: { type: String, required: true, minLength: 6 }, // no maxLength - bcrypt hash is 60 chars
    email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
    loggedIn: { type: Boolean, default: false },
  },
  { timestamps: true } // adds createdAt & updatedAt
);

// Hash password before saving (only if changed)
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare plain password with hashed one
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("User", userSchema);
