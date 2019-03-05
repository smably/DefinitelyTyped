interface OrderOrderLineItem {
    id: string;
    invoice_id: string;
    invoice_line_item_id: string;
    unit_price: number;
    description: string;
    amount: number;
    fulfillment_quantity: number;
    fulfillment_amount: number;
    tax_amount: number;
    amount_paid: number;
    amount_adjusted: number;
    refundable_credits_issued: number;
    refundable_credits: number;
    is_shippable: boolean;
    sku: string;
    status: string;
    entity_type: string;
    item_level_discount_amount: number;
    discount_amount: number;
    entity_id: string;
    object: string;
}

interface OrderShippingAddress {
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

interface OrderBillingAddress {
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

interface OrderLineItemTax {
    line_item_id: string;
    tax_name: string;
    tax_rate: number;
    tax_amount: number;
    tax_juris_type: string;
    tax_juris_name: string;
    tax_juris_code: string;
    object: string;
}

interface OrderLineItemDiscount {
    line_item_id: string;
    discount_type: string;
    coupon_id: string;
    discount_amount: number;
    object: string;
}

interface OrderLinkedCreditNote {
    amount: number;
    type: string;
    id: string;
    status: string;
    amount_adjusted: number;
    amount_refunded: number;
    object: string;
}

interface Order {
    id: string;
    document_number: string;
    invoice_id: string;
    subscription_id: string;
    customer_id: string;
    status: string;
    cancellation_reason: string;
    payment_status: string;
    order_type: string;
    price_type: string;
    reference_id: string;
    fulfillment_status: string;
    order_date: number;
    shipping_date: number;
    note: string;
    tracking_id: string;
    batch_id: string;
    created_by: string;
    shipment_carrier: string;
    invoice_round_off_amount: number;
    tax: number;
    amount_paid: number;
    amount_adjusted: number;
    refundable_credits_issued: number;
    refundable_credits: number;
    rounding_adjustement: number;
    paid_on: number;
    shipping_cut_off_date: number;
    created_at: number;
    status_update_at: number;
    delivered_at: number;
    shipped_at: number;
    resource_version: number;
    updated_at: number;
    cancelled_at: number;
    order_line_items: OrderOrderLineItem[];
    shipping_address: OrderShippingAddress | null;
    billing_address: OrderBillingAddress | null;
    discount: number;
    sub_total: number;
    total: number;
    line_item_taxes: OrderLineItemTax[];
    line_item_discounts: OrderLineItemDiscount[];
    linked_credit_notes: OrderLinkedCreditNote[];
    deleted: boolean;
    currency_code: string;
    is_gifted: boolean;
    gift_note: string;
    gift_id: string;
    object: string;
}

export {
    OrderOrderLineItem,
    OrderShippingAddress,
    OrderBillingAddress,
    OrderLineItemTax,
    OrderLineItemDiscount,
    OrderLinkedCreditNote,
    Order
};
