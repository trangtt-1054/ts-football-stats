import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reporters/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsCountAndHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  //static: cho gọi method mà ko cần phải tạo instance của class, thường dùng để preconfig instance cho 1 class. In this case, when we call it, it will gives back a copy (or an instance) of Summary that already has Analysis and Report loaded up

  constructor(public analyzer: Analyzer, public output: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.output.print(output);
  }
}

/* khi instantiate Summary, sẽ phải pass vào 2 instance thoả mãn Analyzer và Output Target */
