interface PromotionalCredit {
    id: string;
    customer_id: string;
    type: string;
    amount: number;
    currency_code: string;
    description: string;
    credit_type: string;
    reference: string;
    closing_balance: number;
    done_by: string;
    created_at: number;
    object: string;
}

export { PromotionalCredit };
