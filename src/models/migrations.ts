import {
  Model,
  Table,
  Column,
  DataType,
  Index,
  Sequelize,
  ForeignKey,
} from "sequelize-typescript";

export interface migrationsAttributes {
  id?: number;
  timestamp?: string;
  name?: string;
}

@Table({ tableName: "migrations", timestamps: false })
export class migrations
  extends Model<migrationsAttributes, migrationsAttributes>
  implements migrationsAttributes
{
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    defaultValue: Sequelize.literal("nextval('migrations_id_seq'::regclass)"),
  })
  @Index({
    name: "PK_8c82d7f526340ab734260ea46be",
    using: "btree",
    unique: true,
  })
  id?: number;

  @Column({ allowNull: true, type: DataType.BIGINT })
  timestamp?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  name?: string;
}
