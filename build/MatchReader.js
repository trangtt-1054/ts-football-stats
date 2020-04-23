"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var CSVFileReader_1 = require("./CSVFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this.reader = reader;
        this.matches = [];
    } //reader is a CSV file reader or API reader or any kind
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CSVFileReader_1.CSVFileReader(filename));
    };
    //load method, load data from the Reader and do the conversion process
    MatchReader.prototype.load = function () {
        this.reader.read(); //bước read là đưa data về thành từng row rồi, nhưng row đấy vẫn là các string
        this.matches = this.reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6],
            ];
        });
    }; //sau khi produce 1 cái array mới ở đây thì phải save nó somewhere, save nó lên property => thêm this.matches =
    return MatchReader;
}());
exports.MatchReader = MatchReader;
