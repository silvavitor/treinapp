export class CreateTrainingDto {
  name: string;
  athletes: string[];
  exercises: {
    name: string;
    sets_qtd: number;
  }[];
}
