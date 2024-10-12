import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export const USERS_COLLECTION_NAME = 'users';

@Schema({ timestamps: true, collection: USERS_COLLECTION_NAME })
export class User {
  _id?: Types.ObjectId;
  updatedAt?: Date;
  createdAt?: Date;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
