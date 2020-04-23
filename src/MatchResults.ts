export enum MatchResult { //enum can be a type, khi compile qua JS sẽ là 1 object
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

/* const printMatchResult = (): MatchResult => {
  if (match[5] === 'H') {
    return MatchResult.HomeWin;
  }
  return MatchResult.AwayWin;
} */

//tạo file riêng cho enum chứ ko export từ index.ts, thông thường ko nên export cái gì từ file index cả.
