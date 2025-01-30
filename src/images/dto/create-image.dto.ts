import { IsString, IsNotEmpty, IsNumber, IsDate } from 'class-validator';


export class CreateImageDto {
    @IsString()
    @IsNotEmpty()
    id: string;

    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @IsString()
    @IsNotEmpty()
    imageUrl: string;

    @IsString()
    @IsNotEmpty()
    steganoPath: string;

    @IsDate()
    @IsNotEmpty()
    dateCreation: Date;
}
