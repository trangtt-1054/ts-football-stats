"use strict";
/* đưa date ở dạng string về dạng Date, tách nhỏ string thành ngày tháng năm và pass vào Date */
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    //29/10/2018 => ['29', '10', '2018']
    var dateParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    //dateParts[0] - 1 vì tháng 1 là 0, tháng 2 là 1 (index built in của Date nó thế)
    return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
};
