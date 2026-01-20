import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AidRecipientsService } from './aid-recipients.service';
import { CreateAidRecipientDto } from './dto/create-aid-recipient.dto';
import { UpdateAidRecipientDto } from './dto/update-aid-recipient.dto';

@Controller('aid-recipients')
export class AidRecipientsController {
  constructor(private readonly aidRecipientsService: AidRecipientsService) {}

  @Post()
  create(@Body() createAidRecipientDto: CreateAidRecipientDto) {
    return this.aidRecipientsService.create(createAidRecipientDto);
  }

  @Get()
  findAll() {
    return this.aidRecipientsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aidRecipientsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAidRecipientDto: UpdateAidRecipientDto) {
    return this.aidRecipientsService.update(id, updateAidRecipientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aidRecipientsService.remove(id);
  }
}
