import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface commentAttributes {
  oid: string;
  userOid?: string;
  commentOid?: string;
  content?: string;
  catSignOid?: string;
  createDate?: string;
  updateDate?: string;
}

@Table({ tableName: "comment", timestamps: false, comment: "방명록 댓글" })
export class comment
  extends Model<commentAttributes, commentAttributes>
  implements commentAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(100) })
  @Index({ name: "comment_pkey", using: "btree", unique: true })
  oid!: string;

  @Column({ field: "user_oid", allowNull: true, type: DataType.STRING(100) })
  userOid?: string;

  @Column({ field: "comment_oid", allowNull: true, type: DataType.STRING(100) })
  commentOid?: string;

  @Column({ allowNull: true, type: DataType.STRING(300) })
  content?: string;

  @Column({
    field: "cat_sign_oid",
    allowNull: true,
    type: DataType.STRING(100),
    comment: "냥발(좋아요) 참조키",
  })
  catSignOid?: string;

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
