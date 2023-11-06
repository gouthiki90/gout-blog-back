import * as dotenv from "dotenv";
dotenv.config();

import {
  IConfig,
  ModelBuilder,
  DialectMySQL,
} from "sequelize-typescript-generator";

(async () => {
  const config: IConfig = {
    connection: {
      dialect: "postgres",
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
    },
    metadata: {
      indices: true,
      case: "CAMEL",
    },
    output: {
      clean: true,
      outDir: "./models",
    },
    strict: true,
  };

  const dialect = new DialectMySQL();

  const builder = new ModelBuilder(config, dialect);

  try {
    await builder.build();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
