import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 20 })
    name: string;

    @Column()
    apellidos: string;

    @Column()
    sexo: string;

    @Column()
    edad: number;



}
