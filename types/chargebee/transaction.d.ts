interface TransactionLinkedInvoice {
    invoice_id: string;
    applied_amount: number;
    applied_at: number;
    invoice_date: number;
    invoice_total: number;
    invoice_status: string;
    object: string;
}

interface TransactionLinkedCreditNote {
    cn_id: string;
    applied_amount: number;
    applied_at: number;
    cn_reason_code: string;
    cn_date: number;
    cn_total: number;
    cn_status: string;
    cn_reference_invoice_id: string;
    object: string;
}

interface TransactionLinkedRefund {
    txn_id: string;
    txn_status: string;
    txn_date: number;
    txn_amount: number;
    object: string;
}

interface TransactionLinkedPayment {
    id: string;
    status: string;
    amount: number;
    date: number;
    object: string;
}

interface Transaction {
    id: string;
    customer_id: string;
    subscription_id: string;
    gateway_account_id: string;
    payment_source_id: string;
    payment_method: string;
    reference_number: string;
    gateway: string;
    type: string;
    date: number;
    settled_at: number;
    currency_code: string;
    amount: number;
    id_at_gateway: string;
    status: string;
    fraud_flag: string;
    authorization_reason: string;
    error_code: string;
    error_text: string;
    voided_at: number;
    resource_version: number;
    updated_at: number;
    fraud_reason: string;
    amount_unused: number;
    masked_card_number: string;
    reference_transaction_id: string;
    refunded_txn_id: string;
    reference_authorization_id: string;
    amount_capturable: number;
    reversal_transaction_id: string;
    linked_invoices: TransactionLinkedInvoice[];
    linked_credit_notes: TransactionLinkedCreditNote[];
    linked_refunds: TransactionLinkedRefund[];
    linked_payments: TransactionLinkedPayment[];
    deleted: boolean;
    object: string;
}

export {
    TransactionLinkedInvoice,
    TransactionLinkedCreditNote,
    TransactionLinkedRefund,
    TransactionLinkedPayment,
    Transaction
};
