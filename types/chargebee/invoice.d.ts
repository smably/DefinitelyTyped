interface InvoiceLineItem {
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

interface InvoiceDiscount {
    amount: number;
    description: string;
    entity_type: string;
    entity_id: string;
    object: string;
}

interface InvoiceLineItemDiscount {
    line_item_id: string;
    discount_type: string;
    coupon_id: string;
    discount_amount: number;
    object: string;
}

interface InvoiceTax {
    name: string;
    amount: number;
    description: string;
    object: string;
}

interface InvoiceLineItemTax {
    line_item_id: string;
    tax_name: string;
    tax_rate: number;
    tax_amount: number;
    tax_juris_type: string;
    tax_juris_name: string;
    tax_juris_code: string;
    object: string;
}

interface InvoiceLineItemTier {
    line_item_id: string;
    starting_unit: number;
    ending_unit: number;
    quantity_used: number;
    unit_amount: number;
    object: string;
}

interface InvoiceLinkedPayment {
    txn_id: string;
    applied_amount: number;
    applied_at: number;
    txn_status: string;
    txn_date: number;
    txn_amount: number;
    object: string;
}

interface InvoiceAppliedCredit {
    cn_id: string;
    applied_amount: number;
    applied_at: number;
    cn_reason_code: string;
    cn_date: number;
    cn_status: string;
    object: string;
}

interface InvoiceAdjustmentCreditNote {
    cn_id: string;
    cn_reason_code: string;
    cn_date: number;
    cn_total: number;
    cn_status: string;
    object: string;
}

interface InvoiceIssuedCreditNote {
    cn_id: string;
    cn_reason_code: string;
    cn_date: number;
    cn_total: number;
    cn_status: string;
    object: string;
}

interface InvoiceLinkedOrder {
    id: string;
    document_number: string;
    status: string;
    order_type: string;
    reference_id: string;
    fulfillment_status: string;
    batch_id: string;
    created_at: number;
    object: string;
}

interface InvoiceNote {
    entity_type: string;
    note: string;
    entity_id: string;
    object: string;
}

interface InvoiceShippingAddress {
    first_name: string;
    last_name: string;
    email: string;
    company: string;
    phone: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state_code: string;
    state: string;
    country: string;
    zip: string;
    validation_status: string;
    object: string;
}

interface InvoiceBillingAddress {
    first_name: string;
    last_name: string;
    email: string;
    company: string;
    phone: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    state_code: string;
    state: string;
    country: string;
    zip: string;
    validation_status: string;
    object: string;
}

interface Invoice {
    id: string;
    po_number: string;
    customer_id: string;
    subscription_id: string;
    recurring: boolean;
    status: string;
    vat_number: string;
    price_type: string;
    date: number;
    due_date: number;
    net_term_days: number;
    currency_code: string;
    total: number;
    amount_paid: number;
    amount_adjusted: number;
    write_off_amount: number;
    credits_applied: number;
    amount_due: number;
    paid_at: number;
    dunning_status: string;
    next_retry_at: number;
    voided_at: number;
    resource_version: number;
    updated_at: number;
    sub_total: number;
    tax: number;
    first_invoice: boolean;
    has_advance_charges: boolean;
    term_finalized: boolean;
    is_gifted: boolean;
    expected_payment_date: number;
    amount_to_collect: number;
    round_off_amount: number;
    line_items: InvoiceLineItem[];
    discounts: InvoiceDiscount[];
    line_item_discounts: InvoiceLineItemDiscount[];
    taxes: InvoiceTax[];
    line_item_taxes: InvoiceLineItemTax[];
    line_item_tiers: InvoiceLineItemTier[];
    linked_payments: InvoiceLinkedPayment[];
    applied_credits: InvoiceAppliedCredit[];
    adjustment_credit_notes: InvoiceAdjustmentCreditNote[];
    issued_credit_notes: InvoiceIssuedCreditNote[];
    linked_orders: InvoiceLinkedOrder[];
    notes: InvoiceNote[];
    shipping_address: InvoiceShippingAddress | null;
    billing_address: InvoiceBillingAddress | null;
    deleted: boolean;
    object: string;
}

export {
    InvoiceLineItem,
    InvoiceDiscount,
    InvoiceLineItemDiscount,
    InvoiceTax,
    InvoiceLineItemTax,
    InvoiceLineItemTier,
    InvoiceLinkedPayment,
    InvoiceAppliedCredit,
    InvoiceAdjustmentCreditNote,
    InvoiceIssuedCreditNote,
    InvoiceLinkedOrder,
    InvoiceNote,
    InvoiceShippingAddress,
    InvoiceBillingAddress,
    Invoice
};
