import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateBansosValidationDto {
  @IsString()
  @IsOptional()
  validationId!: string;

  @IsString()
  @IsOptional()
  userId?: string;

  @IsString()
  @IsOptional()
  citizenId?: string;

  @IsBoolean()
  @IsOptional()
  validationResult?: boolean;

  @IsString()
  @IsOptional()
  notes?: string;
}