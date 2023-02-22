import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar")
  firstName: string;

  @Column("varchar")
  lastName: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  password: string;
}

export default User;
