import { Exclude, Expose, Type } from 'class-transformer';
import { UserEntity } from '../../users/entities/user.entity';

export class ArticleEntity {
  @Expose()
  id: number;

  @Expose()
  title: string;

  @Expose()
  description?: string;

  @Expose()
  body: string;

  @Expose()
  published: boolean;

  @Expose()
  authorId: number;

  @Expose()
  @Type(() => UserEntity)
  author?: UserEntity;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  constructor(partial: Partial<ArticleEntity>) {
    Object.assign(this, partial);
  }
}
