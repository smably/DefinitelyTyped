interface QuoteLineItem {
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

interface QuoteDiscount {
    amount: number;
    description: string;
    entity_type: string;
    entity_id: string;
    object: string;
}

interface QuoteLineItemDiscount {
    line_item_id: string;
    discount_type: string;
    coupon_id: string;
    discount_amount: number;
    object: string;
}

interface QuoteTax {
    name: string;
    amount: number;
    description: string;
    object: string;
}

interface QuoteLineItemTax {
    line_item_id: string;
    tax_name: string;
    tax_rate: number;
    tax_amount: number;
    tax_juris_type: string;
    tax_juris_name: string;
    tax_juris_code: string;
    object: string;
}

interface QuoteShippingAddress {
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

interface QuoteBillingAddress {
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

interface Quote {
    id: string;
    po_number: string;
    customer_id: string;
    subscription_id: string;
    status: string;
    operation_type: string;
    vat_number: string;
    price_type: string;
    valid_till: number;
    date: number;
    sub_total: number;
    total: number;
    credits_applied: number;
    amount_paid: number;
    amount_due: number;
    resource_version: number;
    updated_at: number;
    currency_code: string;
    line_items: QuoteLineItem[];
    discounts: QuoteDiscount[];
    line_item_discounts: QuoteLineItemDiscount[];
    taxes: QuoteTax[];
    line_item_taxes: QuoteLineItemTax[];
    shipping_address: QuoteShippingAddress | null;
    billing_address: QuoteBillingAddress | null;
    object: string;
}

export {
    QuoteLineItem,
    QuoteDiscount,
    QuoteLineItemDiscount,
    QuoteTax,
    QuoteLineItemTax,
    QuoteShippingAddress,
    QuoteBillingAddress,
    Quote
};
