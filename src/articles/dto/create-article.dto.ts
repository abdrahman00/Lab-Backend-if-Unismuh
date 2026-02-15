import { IsString, IsNotEmpty, MinLength, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty({ description: 'Article title', example: 'My First Article' })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  title: string;

  @ApiProperty({ description: 'Article description', example: 'Short description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Article body content', example: 'This is the full content' })
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ description: 'Published status', example: false, required: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean;
}

export class UpdateArticleDto {
  @ApiProperty({ description: 'Article title', example: 'Updated Title', required: false })
  @IsString()
  @IsOptional()
  @MinLength(5)
  title?: string;

  @ApiProperty({ description: 'Article description', example: 'Updated description', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Article body content', example: 'Updated content', required: false })
  @IsString()
  @IsOptional()
  body?: string;

  @ApiProperty({ description: 'Published status', example: true, required: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean;
}
