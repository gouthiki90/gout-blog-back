import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { admin, menu, post, tag } from "src/models";
import { PostRepository } from "./post.repository";

@Module({
  imports: [SequelizeModule.forFeature([post, menu, admin, tag])],
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule {}
