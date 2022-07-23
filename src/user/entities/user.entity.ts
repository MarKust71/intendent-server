import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => String)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column({ unique: true })
  nickName: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field(() => Boolean, { defaultValue: false })
  @Column({ default: false })
  isDeleted: boolean;

  @Field(() => Date, { defaultValue: () => new Date() })
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Field(() => Date, { defaultValue: () => new Date() })
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  deletedAt: Date;
}
