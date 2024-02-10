export interface Transactions {
  id: number;
  transaction_type: string;
  amount: number;
  description: string;
  account_id: number;
  recipient_account_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
}