import * as Jimp from 'jimp';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SteganographyService {
  async embedText(imagePath: string, text: string, outputPath: string): Promise<string> {
    const image = await Jimp.read(imagePath);

    // Convertir le texte en binaire
    const binaryText = text
      .split('')
      .map(char => char.charCodeAt(0).toString(2).padStart(8, '0')) // Chaque caractère en binaire (8 bits)
      .join('');

    let index = 0;

    // Modifier les pixels pour cacher le texte
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
      if (index < binaryText.length) {
        image.bitmap.data[idx + 3] = (image.bitmap.data[idx + 3] & 0xFE) | parseInt(binaryText[index]); // Modifier le bit de poids faible d'alpha
        index++;
      }
    });

    await image.writeAsync(outputPath);
    return outputPath;
  }
}
