/* import fs from "fs";
file system https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
have to install type definition file
npm install @types/node vì đây là node module */

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

/* REFACTOR CÁCH 1
import { MatchResult } from "./MatchResults";
import { MatchReader } from "./RefactorCach1/MatchReader";

const reader = new MatchReader("football.csv");
reader.read();

let chinaWins = 0;

for (let match of reader.data) {
  if (match[1] === "China" && match[5] === MatchResult.HomeWin) {
    chinaWins++;
  } else if (match[2] === "China" && match[5] === MatchResult.AwayWin) {
    chinaWins++;
  }
}

console.log(`china win ${chinaWins} games`); */

/*REFACTOR CÁCH 2
import { MatchResult } from "./MatchResults";
import { CSVFileReader } from "./CSVFileReader";
import { MatchReader } from "./MatchReader";

//Step 1: Create an object that satisfies the 'DataReader' interface
const csvReader = new CSVFileReader("football.csv");

//Step 2: Create an instance of MatchReader and pass in something that match the type of DataReader
const matchReader = new MatchReader(csvReader);
matchReader.load();

//now we can access matchReader.matches */

//REFACTOR TOÀN APP
import { MatchReader } from "./MatchReader";
// import { CSVFileReader } from "./CSVFileReader";
// import { ConsoleReport } from "./reporters/ConsoleReport";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
// import { HtmlReport } from "./reporters/HtmlReport";

// const csvReader = new CSVFileReader("football.csv");
// const matchReader = new MatchReader(csvReader);
//matchReader.load();

//viết như này quá dài, dùng luôn static method của Summary
// const summary = new Summary(new WinsAnalysis("China"), new HtmlReport());

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = Summary.winsCountAndHtmlReport("China");

summary.buildAndPrintReport(matchReader.matches);
