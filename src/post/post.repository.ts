import { Injectable, Logger } from "@nestjs/common";
import { Sequelize } from "sequelize-typescript";
import sequelize from "sequelize";

@Injectable()
export class PostRepository {
  constructor(private readonly sequelize: Sequelize) {}
  async findAll() {
    try {
      return await this.sequelize.query(
        `
        SELECT
          p.oid,
          p.title,
          p.content
          p.serise,
          p.update_date AS "updateDate",
          m.name AS "menuName"
        FROM
        post AS p
        LEFT JOIN
        menu AS m ON p.menu_oid = m.code
        `,
        { type: sequelize.QueryTypes.SELECT }
      );
    } catch (error) {
      console.log(error);
      Logger.error(error);
    }
  }

  async findOne(query: any) {
    const { title } = query;
    try {
      return await this.sequelize.query(
        `
        SELECT
          p.oid,
          p.title,
          p.content,
          p.serise,
          p.update_date AS "updateDate",
          m.name AS "menuName"
        FROM
        post AS p
        LEFT JOIN
        menu AS m ON p.menu_oid = m.code
        WHERE TRUE
        -- AND p.title LIKE :title
        AND m.oid = :code
        `,
        { type: sequelize.QueryTypes.SELECT, replacements: query }
      );
    } catch (error) {
      console.log(error);
      Logger.error(error);
    }
  }
}
