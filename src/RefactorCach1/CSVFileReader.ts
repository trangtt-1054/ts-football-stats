import fs from "fs";

export abstract class CSVFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  //abtract method
  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}

/* MatchData chỉ dùng cho file csv hiện tại ở folder này thôi, muốn class này reuse đc thì phải làm cho nó ko liên quan gì, ko phụ thuộc vào MatchData nữa 

phải thay thế MatchData thành cái khác, ko dùng any đc mà dùng GENERICS, thay tất cả những chỗ có MatchData thành TypeOfData, thường chỉ viết là T thôi
*/
