import {
  IsNotEmpty,
  IsOptional,
  IsInt,
  Min,
  Max,
  IsString,
  IsDefined,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
  IsDateString,
  IsBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';

export class TaskMetadataDto {
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5)
  priority?: number = 0;

  @IsOptional()
  @IsString()
  description?: string = 'default description';

  @IsBoolean()
  done?: boolean = false;

  @IsOptional()
  @IsDateString()
  deadline?: Date = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1),
  );
}

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title = 'default title';

  @IsDefined()
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => TaskMetadataDto)
  metadata!: TaskMetadataDto;
}
