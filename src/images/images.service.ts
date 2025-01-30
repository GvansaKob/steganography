import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/image.entity';
import { User } from '../users/users.entity';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,
  ) {}

  /**
   * Acheter un certificat pour une image (certification)
   */
  async purchaseCertificate(imageId: string, user: User): Promise<Image> {
    const image = await this.imageRepository.findOne({ where: { id: imageId } });

    if (!image) {
      throw new NotFoundException('Image non trouvée.');
    }

    if (image.isCertified) {
      throw new BadRequestException('Cette image est déjà certifiée.');
    }

    image.user = user; // ✅ Associer l'utilisateur correctement
    image.isCertified = true;
    image.certificatePurchasedAt = new Date();

    return await this.imageRepository.save(image);
  }

  /**
   * Vérifier une image pour voir si elle est certifiée
   */
  async verifyImage(imageId: string) {
    const image = await this.imageRepository.findOne({
      where: { id: imageId },
      relations: ['user'], // ✅ Charger l'utilisateur associé
    });

    if (!image) {
      throw new NotFoundException('Image non trouvée.');
    }

    image.verificationCount += 1;
    await this.imageRepository.save(image);

    return image.isCertified
      ? { ownerId: image.user?.id, message: 'Cette image appartient à un utilisateur certifié.' }
      : { message: "Cette image n'a pas de propriétaire." };
  }

  /**
   * Récupérer les images certifiées d'un utilisateur
   */
  async getUserCertifiedImages(userId: string) {
    return await this.imageRepository.find({
      where: { user: { id: userId }, isCertified: true }, // ✅ Filtrage sur user.id
      relations: ['user'],
    });
  }

  /**
   * Créer une image
   */
  async create(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = this.imageRepository.create(createImageDto);
    return await this.imageRepository.save(newImage);
  }

  /**
   * Récupérer toutes les images
   */
  async findAll(): Promise<Image[]> {
    return await this.imageRepository.find({ relations: ['user'] }); // ✅ Charger les relations
  }

  /**
   * Récupérer une image par ID
   */
  async findOne(id: string): Promise<Image> {
    const image = await this.imageRepository.findOne({ where: { id }, relations: ['user'] });
    if (!image) {
      throw new NotFoundException(`Image avec l'ID ${id} non trouvée.`);
    }
    return image;
  }

  /**
   * Mettre à jour une image
   */
  async update(id: string, updateImageDto: UpdateImageDto): Promise<Image> {
    await this.imageRepository.update(id, updateImageDto);
    return await this.findOne(id);
  }

  /**
   * Supprimer une image
   */
  async remove(id: string): Promise<{ message: string }> {
    const image = await this.findOne(id);
    await this.imageRepository.remove(image);
    return { message: `L'image #${id} a été supprimée.` };
  }
}
