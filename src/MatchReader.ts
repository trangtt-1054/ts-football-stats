import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResults";
import { MatchData } from "./MatchData";
import { CSVFileReader } from "./CSVFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CSVFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {} //reader is a CSV file reader or API reader or any kind

  //load method, load data from the Reader and do the conversion process

  load(): void {
    this.reader.read(); //bước read là đưa data về thành từng row rồi, nhưng row đấy vẫn là các string

    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  } //sau khi produce 1 cái array mới ở đây thì phải save nó somewhere, save nó lên property => thêm this.matches =
}
