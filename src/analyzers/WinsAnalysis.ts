import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResults";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === "China" && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === "China" && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `Team ${this.team} won ${wins} game`;
  }
}

/*bước Analyzer là optional, kể cả ko implement thì khi pass argument vào class Summary TS vẫn check cho mình, nhưng implement thì dễ hiểu hơn 

*/
