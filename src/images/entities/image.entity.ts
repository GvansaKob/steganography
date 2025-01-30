import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'image' })
export class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    userId: number;

    @Column()
    imageUrl: string;

    @Column()
    steganoPath: string;

    @Column()
    dateCreation: Date;

    @Column({ default: false })
    isCertified: boolean;

    @Column({ type: 'timestamp', nullable: true })
    certificatePurchasedAt?: Date;

    @Column({ default: 0 })
    verificationCount: number;
}
