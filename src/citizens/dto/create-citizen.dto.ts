import { IsString, IsOptional, IsInt, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateCitizenDto {
  @IsOptional()
  @IsString()
  userId?: string;

  @IsOptional()
  @IsString()
  rtId?: string;

  @IsString()
  @IsNotEmpty()
  idCardNumber!: string; 

  @IsOptional()
  @IsString()
  familyCardNumber?: string;

  @IsString()
  @IsNotEmpty()
  firstName?: string;

  @IsOptional()
  @IsDateString()
  birthDate?: string; 

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsInt()
  age?: number;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  occupation?: string;

  @IsOptional()
  @IsString()
  monthlyIncome?: string;

  @IsOptional()
  @IsString()
  aidStatus?: string;
}