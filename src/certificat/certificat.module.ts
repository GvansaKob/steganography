import { Module } from '@nestjs/common';
import { CertificatService } from './certificat.service';
import { CertificatController } from './certificat.controller';

@Module({
  controllers: [CertificatController],
  providers: [CertificatService],
})
export class CertificatModule {}
