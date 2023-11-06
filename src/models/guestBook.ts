import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface guestBookAttributes {
  oid: string;
  guestName?: string;
  content?: string;
  createDate?: string;
  updateDate?: string;
}

@Table({ tableName: "guest_book", timestamps: false, comment: "방명록" })
export class guestBook
  extends Model<guestBookAttributes, guestBookAttributes>
  implements guestBookAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(100) })
  @Index({ name: "guest_book_pkey", using: "btree", unique: true })
  oid!: string;

  @Column({ field: "guest_name", allowNull: true, type: DataType.STRING(50) })
  guestName?: string;

  @Column({ allowNull: true, type: DataType.STRING(3000) })
  content?: string;

  @Column({
    field: "create_date",
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  })
  createDate?: string;

  @Column({
    field: "update_date",
    allowNull: true,
    type: DataType.STRING,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  })
  updateDate?: string;
}
