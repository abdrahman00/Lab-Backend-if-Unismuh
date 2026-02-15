import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ArticlesService {
  private prisma = new PrismaClient();

  private stripAuthorPassword(article: any) {
    if (article && article.author) {
      delete article.author.password;
    }
    return article;
  }

  async findAll() {
    const articles = await this.prisma.article.findMany({
      include: { author: true },
    });
    return articles.map(a => this.stripAuthorPassword(a));
  }

  async findOne(id: number) {
    const article = await this.prisma.article.findUnique({
      where: { id },
      include: { author: true },
    });
    return this.stripAuthorPassword(article);
  }

  async create(data: any) {
    const article = await this.prisma.article.create({
      data,
      include: { author: true },
    });
    return this.stripAuthorPassword(article);
  }

  async update(id: number, data: any) {
    const article = await this.prisma.article.update({
      where: { id },
      data,
      include: { author: true },
    });
    return this.stripAuthorPassword(article);
  }

  async delete(id: number) {
    const article = await this.prisma.article.delete({
      where: { id },
      include: { author: true },
    });
    return this.stripAuthorPassword(article);
  }
}


