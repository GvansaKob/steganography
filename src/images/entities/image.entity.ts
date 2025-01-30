import { User } from 'src/users/users.entity'; 
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'image' })
export class Image {
    @PrimaryGeneratedColumn('uuid')
    id: string;


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

    @ManyToOne(() => User, (user) => user.images, { nullable: false, onDelete: 'CASCADE' })
    user: User;  
}
