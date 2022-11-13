import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";

@Entity()
export class Scenery {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @Column({type: 'varchar'})
    public name: string;
    @Column({type: 'text'})
    public image: string;
    @Column({type: 'varchar'})
    public description: string;
    @ManyToOne(() => Category)
    public idCountry: Category;
}