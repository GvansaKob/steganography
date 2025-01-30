import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) { }

  async purchaseCertificate(imageId: string, userId: number): Promise<Image> {
    const image = await this.imageRepository.findOne({ where: { id: imageId } });

    if (!image) {
      throw new Error('Image non trouvée.');
    }

    if (image.isCertified) {
      throw new Error('Cette image est déjà certifiée.');
    }

    image.userId = userId;
    image.isCertified = true;
    image.certificatePurchasedAt = new Date();

    return await this.imageRepository.save(image);
  }

  async verifyImage(imageId: string) {
    const image = await this.imageRepository.findOne({ where: { id: imageId } });

    if (!image) {
      throw new Error('Image non trouvée.');
    }

    image.verificationCount += 1;
    await this.imageRepository.save(image);

    return image.isCertified
      ? { ownerId: image.userId, message: 'Cette image appartient à un utilisateur certifié.' }
      : { message: "Cette image n'a pas de propriétaire." };
  }

  async getUserCertifiedImages(userId: number) {
    return await this.imageRepository.find({
      where: { userId, isCertified: true },
    });
  }

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = this.imageRepository.create(createImageDto);
    return await this.imageRepository.save(newImage);
  }


  async findAll(): Promise<Image[]> {
    return await this.imageRepository.find();
  }

  async findOne(id: string): Promise<Image> {
    const image = await this.imageRepository.findOne({ where: { id } });
    if (!image) {
      throw new Error(`Image avec l'ID ${id} non trouvée.`);
    }
    return image;
  }


  async update(id: string, updateImageDto: UpdateImageDto): Promise<Image> {
    await this.imageRepository.update(id, updateImageDto);
    return await this.findOne(id);
  }


  async remove(id: string): Promise<{ message: string }> {
    const image = await this.findOne(id);
    await this.imageRepository.remove(image);
    return { message: `L'image #${id} a été supprimée.` };
  }
}
