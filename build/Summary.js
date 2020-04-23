"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var HtmlReport_1 = require("./reporters/HtmlReport");
var Summary = /** @class */ (function () {
    //static: cho gọi method mà ko cần phải tạo instance của class, thường dùng để preconfig instance cho 1 class. In this case, when we call it, it will gives back a copy (or an instance) of Summary that already has Analysis and Report loaded up
    function Summary(analyzer, output) {
        this.analyzer = analyzer;
        this.output = output;
    }
    Summary.winsCountAndHtmlReport = function (team) {
        return new Summary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var output = this.analyzer.run(matches);
        this.output.print(output);
    };
    return Summary;
}());
exports.Summary = Summary;
/* khi instantiate Summary, sẽ phải pass vào 2 instance thoả mãn Analyzer và Output Target */
