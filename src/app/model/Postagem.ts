import { Tema } from './Tema';
import { Usuario } from './Usuario';

export class Postagem{
  public idPostagem: number
  public tituloPost: string
  public textoPost: string
  public dataPost: Date
  public usuarios: Usuario
  public temas:Tema
}
