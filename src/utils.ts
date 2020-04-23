/* đưa date ở dạng string về dạng Date, tách nhỏ string thành ngày tháng năm và pass vào Date */

export const dateStringToDate = (dateString: string): Date => {
  //29/10/2018 => ['29', '10', '2018']

  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });

  //dateParts[0] - 1 vì tháng 1 là 0, tháng 2 là 1 (index built in của Date nó thế)
  return new Date(dateParts[2], dateParts[0] - 1, dateParts[1]);
};
