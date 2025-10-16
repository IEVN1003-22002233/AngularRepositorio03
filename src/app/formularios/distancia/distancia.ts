
export class Distancia {
  x1: any;
  y1: any;
  x2: any;
  y2: any;

  public calcular(): number {
    return Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
  }
}
