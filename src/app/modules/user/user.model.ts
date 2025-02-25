import { model, Schema } from 'mongoose';
import { IUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    immutable: true,
  },
  photo: String,
  password: {
    type: String,
    required: true,
    select:false
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  userStatus: {
    type: String,
    enum: ['active', 'inactive'],
    required:true,
    default:'active'
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
userSchema.post ('save',function (doc,next) {
  doc.password="";
  next()
}) 
const User = model('User', userSchema);
export default User;
