import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class Genres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique:true,nullable:false})
  name: string;
  
  // @Column({ default: false })
  // verified: boolean;

  // @OneToMany('Adds', (add: Adds) => add.user)
  // adds: Adds[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    // select: false,
    select:false
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    select: false,
  })
  updatedAt: Date;

  // @OneToMany(
  //   () => FavoriteAdds,
  //   (favoriteAdds: FavoriteAdds) => favoriteAdds.user,
  // )
  // favoriteAdds: Array<FavoriteAdds>;

}
