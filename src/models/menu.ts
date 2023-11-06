import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface menuAttributes {
  oid: string;
  name?: string;
  code?: string;
  subCode?: string;
  createDate?: string;
  updateDate?: string;
}

@Table({ tableName: "menu", timestamps: false, comment: "게시글 메뉴" })
export class menu
  extends Model<menuAttributes, menuAttributes>
  implements menuAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(100) })
  @Index({ name: "menu_pkey", using: "btree", unique: true })
  oid!: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  name?: string;

  @Column({ allowNull: true, type: DataType.STRING(100) })
  code?: string;

  @Column({ field: "sub_code", allowNull: true, type: DataType.STRING(100) })
  subCode?: string;

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
