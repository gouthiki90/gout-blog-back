import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface adminAttributes {
  oid: string;
  userId?: string;
  password?: Uint8Array;
  createDate?: Date;
  updateDate?: Date;
}

@Table({ tableName: "admin", timestamps: false, comment: "블로그 관리자" })
export class admin
  extends Model<adminAttributes, adminAttributes>
  implements adminAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(100) })
  @Index({ name: "admin_pkey", using: "btree", unique: true })
  oid!: string;

  @Column({ field: "user_id", allowNull: true, type: DataType.STRING(50) })
  userId?: string;

  @Column({ allowNull: true, type: DataType.BLOB })
  password?: Uint8Array;

  @Column({
    field: "create_date",
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  })
  createDate?: Date;

  @Column({
    field: "update_date",
    allowNull: true,
    type: DataType.DATE,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  })
  updateDate?: Date;
}
