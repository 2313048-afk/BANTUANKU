import { IsString, IsOptional, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateDistributionReportDto {
  @IsString()
  @IsNotEmpty()
  reportId!: string;

  @IsString()
  @IsOptional()
  governmentId?: string; 

  @IsString()
  @IsOptional()
  aidId?: string; 

  @IsString()
  @IsOptional()
  totalRecipients?: string; 

  @IsDateString()
  @IsOptional()
  reportDate?: string;
}