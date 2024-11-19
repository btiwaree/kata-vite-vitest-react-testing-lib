export class ChristmasLight {
  private matrix = Array(5)
    .fill(0)
    .map(() => Array(5).fill(0));

  public getState(x: number, y: number) {
    return this.matrix[x][y];
  }

  public isOn(x: number, y: number): boolean {
    return this.getState(x, y) === 1;
  }

  public isOff(x: number, y: number): boolean {
    return this.getState(x, y) === 0;
  }

  public turnOn(x: number, y: number): void {
    this.matrix[x][y] = 1;
  }

  public turnOff(x: number, y: number): void {
    this.matrix[x][y] = 0;
  }

  public toggle(x: number, y: number): void {
    const prevState = this.getState(x, y);
    this.matrix[x][y] = !prevState;
  }

  public toggleRange([a, b]: number[], [c, d]: number[]): void {
    for (let i = a; i <= c; i++) {
      for (let j = b; j <= d; j++) {
        const currentState = this.matrix[i][j];
        this.matrix[i][j] = !currentState;
      }
    }
  }

  public getNumberOfLitLights() {
    let count = 0;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const currentState = this.matrix[i][j];
        if (currentState === true) {
          count++;
        }
      }
    }

    return count;
  }
}
