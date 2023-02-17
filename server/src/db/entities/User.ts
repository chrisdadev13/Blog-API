import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    length: 30,
  })
  firstName: string;

  @Column({
    length: 30,
  })
  lastName: string;

  @Column({
    unique: true,
    length: 30,
  })
  email: string;

  @Column({
    length: 30,
  })
  password: string;
}

export default User;
