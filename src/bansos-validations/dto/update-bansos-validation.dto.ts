import { PartialType } from '@nestjs/mapped-types';
import { CreateBansosValidationDto } from './create-bansos-validation.dto';

export class UpdateBansosValidationDto extends PartialType(CreateBansosValidationDto) {}
