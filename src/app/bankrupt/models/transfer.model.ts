import { Timestamp } from './timestamp.model';

export interface TransferReceipt {
  paymentReference: string;
  source: string;
  amount: number;
  target: string;
  description: string;
  timestamp: Timestamp;
}

export class TransferCommand {
  source: string;
  target: string;
  amount: number;
  description: string;
}
