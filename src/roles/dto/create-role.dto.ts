import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  roleId!: string;
  
  @IsString()
  @IsNotEmpty()
  roleName!: string;
}