export class Bowling {
  private score: number[] = [];

  public roll(numberOfPins: number): void {
    this.score.push(numberOfPins);
  }

  public getScore(): number {
    // isStrike
    // isSpare
    // numberOfPoints

    let score = 0;
    let rollIndex = 0;

    for (let frame = 1; frame <= 10; frame++) {
      if (this.isStrike(rollIndex)) {
        score += 10 + this.strikeBonus(rollIndex);
        rollIndex + 1;
      } else if (this.isSpare(rollIndex)) {
        score += 10 + this.spareBonus(rollIndex, frame === 10);
        rollIndex += 2;
      } else {
        score += this.getTotalNumberOfPinsScored(rollIndex);
        rollIndex += 2;
      }
    }

    return score;
  }

  private isStrike(rollIndex: number): boolean {
    return this.score[rollIndex] === 10;
  }

  private isSpare(rollIndex: number): boolean {
    return this.score[rollIndex] + this.score[rollIndex + 1] === 10;
  }

  private strikeBonus(rollIndex: number): number {
    return this.score[rollIndex + 1] + this.score[rollIndex + 2];
  }

  private spareBonus(rollIndex: number, isFinalFrame?: boolean): number {
    if (isFinalFrame) {
      return this.score[rollIndex + 1];
    }
    return this.score[rollIndex + 2];
  }

  private getTotalNumberOfPinsScored(rollIndex: number): number {
    return this.score[rollIndex] + this.score[rollIndex + 1];
  }
}
