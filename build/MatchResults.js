"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult = exports.MatchResult || (exports.MatchResult = {}));
/* const printMatchResult = (): MatchResult => {
  if (match[5] === 'H') {
    return MatchResult.HomeWin;
  }
  return MatchResult.AwayWin;
} */
//tạo file riêng cho enum chứ ko export từ index.ts, thông thường ko nên export cái gì từ file index cả.
