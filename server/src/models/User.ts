import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type TGender = 'male' | 'female';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  firstName!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  surName!: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  username!: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  email!: string;

  @Field({ nullable: true })
  @Column({ unique: true, nullable: true })
  phone!: string;

  @Field()
  @Column()
  password!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  gender!: TGender;

  @Field({nullable: true})
  @Column({nullable: true})
  date_of_birth!: Date;

  @Field({ nullable: true })
  @CreateDateColumn({ nullable: true })
  createdAt!: Date;
}