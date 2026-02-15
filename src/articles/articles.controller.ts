import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { CreateArticleDto, UpdateArticleDto } from './dto/create-article.dto';
import { ArticleEntity } from './entities/article.entity';

@ApiTags('articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'List all articles',
    type: [ArticleEntity],
  })
  async findAll() {
    const articles = await this.articlesService.findAll();
    return plainToInstance(ArticleEntity, articles, { strategy: 'excludeAll' });
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get article by ID',
    type: ArticleEntity,
  })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const article = await this.articlesService.findOne(id);
    return plainToInstance(ArticleEntity, article, { strategy: 'excludeAll' });
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Create new article',
    type: ArticleEntity,
  })
  async create(@Body() createArticleDto: CreateArticleDto) {
    const article = await this.articlesService.create(createArticleDto);
    return plainToInstance(ArticleEntity, article, { strategy: 'excludeAll' });
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Update article',
    type: ArticleEntity,
  })
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateArticleDto: UpdateArticleDto) {
    const article = await this.articlesService.update(id, updateArticleDto);
    return plainToInstance(ArticleEntity, article, { strategy: 'excludeAll' });
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Delete article',
  })
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.articlesService.delete(id);
  }
}

