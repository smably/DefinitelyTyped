interface EstimateSubscriptionEstimateShippingAddress {
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

interface EstimateSubscriptionEstimate {
    id: string;
    currency_code: string;
    status: string;
    next_billing_at: number;
    pause_date: number;
    resume_date: number;
    shipping_address: EstimateSubscriptionEstimateShippingAddress | null;
    object: string;
}

interface EstimateInvoiceEstimateLineItem {
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

interface EstimateInvoiceEstimateDiscount {
    amount: number;
    description: string;
    entity_type: string;
    entity_id: string;
    object: string;
}

interface EstimateInvoiceEstimateTax {
    name: string;
    amount: number;
    description: string;
    object: string;
}

interface EstimateInvoiceEstimateLineItemTax {
    line_item_id: string;
    tax_name: string;
    tax_rate: number;
    tax_amount: number;
    tax_juris_type: string;
    tax_juris_name: string;
    tax_juris_code: string;
    object: string;
}

interface EstimateInvoiceEstimateLineItemTier {
    line_item_id: string;
    starting_unit: number;
    ending_unit: number;
    quantity_used: number;
    unit_amount: number;
    object: string;
}

interface EstimateInvoiceEstimateLineItemDiscount {
    line_item_id: string;
    discount_type: string;
    coupon_id: string;
    discount_amount: number;
    object: string;
}

interface EstimateInvoiceEstimate {
    recurring: boolean;
    price_type: string;
    currency_code: string;
    sub_total: number;
    total: number;
    credits_applied: number;
    amount_paid: number;
    amount_due: number;
    line_items: EstimateInvoiceEstimateLineItem[];
    discounts: EstimateInvoiceEstimateDiscount[];
    taxes: EstimateInvoiceEstimateTax[];
    line_item_taxes: EstimateInvoiceEstimateLineItemTax[];
    line_item_tiers: EstimateInvoiceEstimateLineItemTier[];
    line_item_discounts: EstimateInvoiceEstimateLineItemDiscount[];
    round_off_amount: number;
    object: string;
}

interface EstimateCreditNoteEstimateLineItem {
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

interface EstimateCreditNoteEstimateDiscount {
    amount: number;
    description: string;
    entity_type: string;
    entity_id: string;
    object: string;
}

interface EstimateCreditNoteEstimateTax {
    name: string;
    amount: number;
    description: string;
    object: string;
}

interface EstimateCreditNoteEstimateLineItemTax {
    line_item_id: string;
    tax_name: string;
    tax_rate: number;
    tax_amount: number;
    tax_juris_type: string;
    tax_juris_name: string;
    tax_juris_code: string;
    object: string;
}

interface EstimateCreditNoteEstimateLineItemDiscount {
    line_item_id: string;
    discount_type: string;
    coupon_id: string;
    discount_amount: number;
    object: string;
}

interface EstimateCreditNoteEstimateLineItemTier {
    line_item_id: string;
    starting_unit: number;
    ending_unit: number;
    quantity_used: number;
    unit_amount: number;
    object: string;
}

interface EstimateCreditNoteEstimate {
    reference_invoice_id: string;
    type: string;
    price_type: string;
    currency_code: string;
    sub_total: number;
    total: number;
    amount_allocated: number;
    amount_available: number;
    line_items: EstimateCreditNoteEstimateLineItem[];
    discounts: EstimateCreditNoteEstimateDiscount[];
    taxes: EstimateCreditNoteEstimateTax[];
    line_item_taxes: EstimateCreditNoteEstimateLineItemTax[];
    line_item_discounts: EstimateCreditNoteEstimateLineItemDiscount[];
    line_item_tiers: EstimateCreditNoteEstimateLineItemTier[];
    round_off_amount: number;
    object: string;
}

interface EstimateUnbilledChargeTier {
    starting_unit: number;
    ending_unit: number;
    quantity_used: number;
    unit_amount: number;
    object: string;
}

interface EstimateUnbilledCharge {
    id: string;
    customer_id: string;
    subscription_id: string;
    date_from: number;
    date_to: number;
    unit_amount: number;
    pricing_model: string;
    quantity: number;
    amount: number;
    currency_code: string;
    discount_amount: number;
    description: string;
    entity_type: string;
    entity_id: string;
    is_voided: boolean;
    voided_at: number;
    tiers: EstimateUnbilledChargeTier[];
    deleted: boolean;
    object: string;
}

interface Estimate {
    created_at: number;
    subscription_estimate: EstimateSubscriptionEstimate | null;
    invoice_estimate: EstimateInvoiceEstimate | null;
    invoice_estimates: EstimateInvoiceEstimate[];
    next_invoice_estimate: EstimateInvoiceEstimate | null;
    credit_note_estimates: EstimateCreditNoteEstimate[];
    unbilled_charge_estimates: EstimateUnbilledCharge[];
    object: string;
}

export {
    EstimateSubscriptionEstimateShippingAddress,
    EstimateSubscriptionEstimate,
    EstimateInvoiceEstimateLineItem,
    EstimateInvoiceEstimateDiscount,
    EstimateInvoiceEstimateTax,
    EstimateInvoiceEstimateLineItemTax,
    EstimateInvoiceEstimateLineItemTier,
    EstimateInvoiceEstimateLineItemDiscount,
    EstimateInvoiceEstimate,
    EstimateCreditNoteEstimateLineItem,
    EstimateCreditNoteEstimateDiscount,
    EstimateCreditNoteEstimateTax,
    EstimateCreditNoteEstimateLineItemTax,
    EstimateCreditNoteEstimateLineItemDiscount,
    EstimateCreditNoteEstimateLineItemTier,
    EstimateCreditNoteEstimate,
    EstimateUnbilledChargeTier,
    EstimateUnbilledCharge,
    Estimate
};
