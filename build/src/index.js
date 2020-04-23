"use strict";
/* import fs from "fs";
file system https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
have to install type definition file
npm install @types/node vì đây là node module */
Object.defineProperty(exports, "__esModule", { value: true });
/* const matches = fs
  .readFileSync("football.csv", {
      encoding: "utf-8",
    })
    .split("\n")
    .map((row: string): string[] => {
        return row.split(",");
      }); */
// encoding: 'utf-8': expect text content encoded with utf-8, means tell fs to return a string to us
//console.log(matches); //all data is a BIG string => parse into reusable structure => xem evernote, dùng split + map để đưa về dạng string[][]
var CSVFileReader_1 = require("./CSVFileReader");
var MatchResults_1 = require("./MatchResults");
var reader = new CSVFileReader_1.CSVFileReader("football.csv");
reader.read();
var chinaWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "China" && match[5] === MatchResults_1.MatchResult.HomeWin) {
        chinaWins++;
    }
    else if (match[2] === "China" && match[5] === MatchResults_1.MatchResult.AwayWin) {
        chinaWins++;
    }
}
console.log("china win " + chinaWins + " games");
