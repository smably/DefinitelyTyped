interface CreditNoteLineItem {
    id: string;
    subscription_id: string;
    date_from: number;
    date_to: number;
    unit_amount: number;
    quantity: number;
    amount: number;
    pricing_model: string;
    is_taxed: boolean;
    tax_amount: number;
    tax_rate: number;
    discount_amount: number;
    item_level_discount_amount: number;
    description: string;
    entity_type: string;
    tax_exempt_reason: string;
    entity_id: string;
    object: string;
}

interface CreditNoteDiscount {
    amount: number;
    description: string;
    entity_type: string;
    entity_id: string;
    object: string;
}

interface CreditNoteLineItemDiscount {
    line_item_id: string;
    discount_type: string;
    coupon_id: string;
    discount_amount: number;
    object: string;
}

interface CreditNoteLineItemTier {
    line_item_id: string;
    starting_unit: number;
    ending_unit: number;
    quantity_used: number;
    unit_amount: number;
    object: string;
}

interface CreditNoteTax {
    name: string;
    amount: number;
    description: string;
    object: string;
}

interface CreditNoteLineItemTax {
    line_item_id: string;
    tax_name: string;
    tax_rate: number;
    tax_amount: number;
    tax_juris_type: string;
    tax_juris_name: string;
    tax_juris_code: string;
    object: string;
}

interface CreditNoteLinkedRefund {
    txn_id: string;
    applied_amount: number;
    applied_at: number;
    txn_status: string;
    txn_date: number;
    txn_amount: number;
    object: string;
}

interface CreditNoteAllocation {
    invoice_id: string;
    allocated_amount: number;
    allocated_at: number;
    invoice_date: number;
    invoice_status: string;
    object: string;
}

interface CreditNote {
    id: string;
    customer_id: string;
    subscription_id: string;
    reference_invoice_id: string;
    type: string;
    reason_code: string;
    status: string;
    vat_number: string;
    date: number;
    price_type: string;
    currency_code: string;
    total: number;
    amount_allocated: number;
    amount_refunded: number;
    amount_available: number;
    refunded_at: number;
    voided_at: number;
    resource_version: number;
    updated_at: number;
    sub_total: number;
    round_off_amount: number;
    line_items: CreditNoteLineItem[];
    discounts: CreditNoteDiscount[];
    line_item_discounts: CreditNoteLineItemDiscount[];
    line_item_tiers: CreditNoteLineItemTier[];
    taxes: CreditNoteTax[];
    line_item_taxes: CreditNoteLineItemTax[];
    linked_refunds: CreditNoteLinkedRefund[];
    allocations: CreditNoteAllocation[];
    deleted: boolean;
    object: string;
}

export {
    CreditNoteLineItem,
    CreditNoteDiscount,
    CreditNoteLineItemDiscount,
    CreditNoteLineItemTier,
    CreditNoteTax,
    CreditNoteLineItemTax,
    CreditNoteLinkedRefund,
    CreditNoteAllocation,
    CreditNote
};
