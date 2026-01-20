import { IsString, IsOptional, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateAidRecipientDto {
  @IsString()
  @IsNotEmpty()
  recipientId!: string; 

  @IsString()
  @IsNotEmpty()
  citizenId!: string; 

  @IsString()
  @IsNotEmpty()
  aidId!: string; 

  @IsDateString()
  @IsOptional()
  receiveDate?: string;

  @IsString()
  @IsOptional()
  recipientStatus?: string;
}