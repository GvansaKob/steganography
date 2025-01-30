import { 
  Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request 
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Public()
  @Post()
  create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.create(createImageDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.imagesService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.imagesService.findOne(id); // ✅ Correction (id est une string)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(id, updateImageDto); // ✅ Correction
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }

  
  @UseGuards(JwtGuard)
  @Post(':id/certify')
  async certifyImage(@Param('id') id: string, @Request() req) { 
    return this.imagesService.purchaseCertificate(id, req.user.userId);
  }

  @Public()
  @Post(':id/verify')
  async verifyImage(@Param('id') id: string) {
    return this.imagesService.verifyImage(id);
  }
}
