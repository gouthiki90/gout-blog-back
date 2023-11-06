import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface tagAttributes {
  oid: string;
  postOid?: string;
  content?: string;
  subjectOid?: string;
  createDate?: string;
  updateDate?: string;
}

@Table({ tableName: "tag", timestamps: false, comment: "태그" })
export class tag
  extends Model<tagAttributes, tagAttributes>
  implements tagAttributes
{
  @Column({ primaryKey: true, type: DataType.STRING(100) })
  @Index({ name: "tag_pkey", using: "btree", unique: true })
  oid!: string;

  @Column({ field: "post_oid", allowNull: true, type: DataType.STRING(100) })
  postOid?: string;

  @Column({ allowNull: true, type: DataType.STRING(50) })
  content?: string;

  @Column({ field: "subject_oid", allowNull: true, type: DataType.STRING(100) })
  subjectOid?: string;

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
