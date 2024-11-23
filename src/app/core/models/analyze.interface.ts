export interface IAnalyze {
  pulse: number;
  pressure: number;
  saturation: number;
  breath: number;
}

export interface IAnalyzeData {
  analyz: IAnalyze;
  state: string;
  time: string;
}
