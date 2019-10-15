export interface JobHistoryTable {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  status: string;
  wF: string;
  dbErr: string;
  launchedBy: string;
}
export interface StateGroup {
  letter: string;
  names: string[];
}