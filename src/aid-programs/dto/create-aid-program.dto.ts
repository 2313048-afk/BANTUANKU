import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateAidProgramDto {
  @IsString()
  @IsOptional()
  aidId?: string; 

  @IsString()
  @IsOptional()
  aidName?: string;

  @IsString()
  @IsOptional()
  descriptionOfSocialAssistance?: string;

  @IsDateString() 
  @IsOptional()
  startDate?: string;

  @IsDateString()
  @IsOptional()
  endDate?: string;

  @IsString()
  @IsOptional()
  status?: string;
}