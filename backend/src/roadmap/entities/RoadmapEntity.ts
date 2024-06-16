import { EtapaEntity } from "src/etapa/entities/EtapaEntity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StackEnum } from "../dto/StackEnum";

@Entity({name: 'roadmap'})
export class RoadmapEntity{
    @PrimaryGeneratedColumn('rowid')
    id: number
    @Column({name : "name" , nullable : false} )
    name : string
    @Column({name : "description" , nullable : false} )
    description : string
    @Column({ type: 'enum', enum: StackEnum, default: StackEnum.FRONTEND })
    stack: StackEnum;

    @OneToMany(() => EtapaEntity, (etapa) => etapa.roadmap)
    etapas? : EtapaEntity[]
}