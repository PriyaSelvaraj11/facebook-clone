import { Field, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type TComment = {
  userId: string,
  description: string,
}

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  public readonly id!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  userId!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description!: string;

  @Field({ nullable: true })
  @Column({
    transformer: {
      to: (value: string) => Buffer.from(value),
      from: (value: Buffer) => value.toString()
    }
   })
  imageUrl!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  sharesCount!: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  likesCount!: number;

  @Field({ nullable: true })
  @CreateDateColumn({ nullable: true })
  createdAt!: Date;
}