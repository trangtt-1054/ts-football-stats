import { CSVFileReader } from "./CSVFileReader";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResults";

type MatchData = [Date, string, string, number, number, MatchResult, string];

//vì class mẹ (CSVFilểader) require 1 generic argument nên khi extend cũng phải pass type argument vào, chính là MatchData
export class MatchReader extends CSVFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1], //giữ nguyên row[1] và row[2]
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, //row[5] will be H, A or D
      row[6],
    ];
  }
}
