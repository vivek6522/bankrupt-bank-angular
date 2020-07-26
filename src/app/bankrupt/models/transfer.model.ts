
export interface TransferReceipt {
  paymentReference: string;
  source: string;
  amount: number;
  target: string;
  description: string;
  timestamp: string;
}

export class TransferCommand {
  source: string;
  target: string;
  amount: number;
  description: string;
}
