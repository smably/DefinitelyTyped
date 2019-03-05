interface InvoiceEstimateLineItem {
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

interface InvoiceEstimateDiscount {
    amount: number;
    description: string;
    entity_type: string;
    entity_id: string;
    object: string;
}

interface InvoiceEstimateTax {
    name: string;
    amount: number;
    description: string;
    object: string;
}

interface InvoiceEstimateLineItemTax {
    line_item_id: string;
    tax_name: string;
    tax_rate: number;
    tax_amount: number;
    tax_juris_type: string;
    tax_juris_name: string;
    tax_juris_code: string;
    object: string;
}

interface InvoiceEstimateLineItemTier {
    line_item_id: string;
    starting_unit: number;
    ending_unit: number;
    quantity_used: number;
    unit_amount: number;
    object: string;
}

interface InvoiceEstimateLineItemDiscount {
    line_item_id: string;
    discount_type: string;
    coupon_id: string;
    discount_amount: number;
    object: string;
}

interface InvoiceEstimate {
    recurring: boolean;
    price_type: string;
    currency_code: string;
    sub_total: number;
    total: number;
    credits_applied: number;
    amount_paid: number;
    amount_due: number;
    line_items: InvoiceEstimateLineItem[];
    discounts: InvoiceEstimateDiscount[];
    taxes: InvoiceEstimateTax[];
    line_item_taxes: InvoiceEstimateLineItemTax[];
    line_item_tiers: InvoiceEstimateLineItemTier[];
    line_item_discounts: InvoiceEstimateLineItemDiscount[];
    round_off_amount: number;
    object: string;
}

export {
    InvoiceEstimateLineItem,
    InvoiceEstimateDiscount,
    InvoiceEstimateTax,
    InvoiceEstimateLineItemTax,
    InvoiceEstimateLineItemTier,
    InvoiceEstimateLineItemDiscount,
    InvoiceEstimate
};
