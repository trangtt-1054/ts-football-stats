"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CSVFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map(function (row) {
            return row.split(",");
        })
            .map(this.mapRow);
    };
    return CSVFileReader;
}());
exports.CSVFileReader = CSVFileReader;
/* MatchData chỉ dùng cho file csv hiện tại ở folder này thôi, muốn class này reuse đc thì phải làm cho nó ko liên quan gì, ko phụ thuộc vào MatchData nữa

phải thay thế MatchData thành cái khác, ko dùng any đc mà dùng GENERICS, thay tất cả những chỗ có MatchData thành TypeOfData, thường chỉ viết là T thôi
*/
