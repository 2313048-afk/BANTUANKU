import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  user_id!: string;  
  
  @IsString()
  @IsNotEmpty()
  username!: string; 

  @IsString()
  @IsNotEmpty()
  password!: string; 
  
  @IsString()
  @IsNotEmpty()
  id_role!: string;  
}