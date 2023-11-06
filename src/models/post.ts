import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface postAttributes {
  oid: string;
  menuOid?: string;
  title?: string;
  content?: string;
  serise?: number;
  createDate?: Date;
  updateDate?: string;
}

@Table({ tableName: "post", timestamps: false, comment: "게시글" })
export class post
  extends Model<postAttributes, postAttributes>
  implements postAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING })
  @Index({ name: "post_pkey", using: "btree", unique: true })
  oid!: string;

  @Column({ field: "menu_oid", allowNull: true, type: DataType.STRING(100) })
  menuOid?: string;

  @Column({ allowNull: true, type: DataType.STRING(50) })
  title?: string;

  @Column({ allowNull: true, type: DataType.STRING(5000) })
  content?: string;

  @Column({ allowNull: true, type: DataType.INTEGER })
  serise?: number;

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
    type: DataType.STRING,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  })
  updateDate?: string;
}
