import { PartialType } from '@nestjs/mapped-types';
import { CreateAidRecipientDto } from './create-aid-recipient.dto';

export class UpdateAidRecipientDto extends PartialType(CreateAidRecipientDto) {}
