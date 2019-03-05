interface SubscriptionAddon {
    id: string;
    quantity: number;
    unit_price: number;
    amount: number;
    trial_end: number;
    remaining_billing_cycles: number;
    object: string;
}

interface SubscriptionEventBasedAddon {
    id: string;
    quantity: number;
    unit_price: number;
    on_event: string;
    charge_once: boolean;
    object: string;
}

interface SubscriptionChargedEventBasedAddon {
    id: string;
    last_charged_at: number;
    object: string;
}

interface SubscriptionCoupon {
    coupon_id: string;
    apply_till: number;
    applied_count: number;
    coupon_code: string;
    object: string;
}

interface SubscriptionShippingAddress {
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

interface SubscriptionReferralInfo {
    referral_code: string;
    coupon_code: string;
    referrer_id: string;
    external_reference_id: string;
    reward_status: string;
    referral_system: string;
    account_id: string;
    campaign_id: string;
    external_campaign_id: string;
    friend_offer_type: string;
    referrer_reward_type: string;
    notify_referral_system: string;
    destination_url: string;
    post_purchase_widget_enabled: boolean;
    object: string;
}

interface Subscription {
    id: string;
    customer_id: string;
    currency_code: string;
    plan_id: string;
    plan_quantity: number;
    plan_unit_price: number;
    setup_fee: number;
    plan_amount: number;
    billing_period: number;
    billing_period_unit: string;
    plan_free_quantity: number;
    status: string;
    start_date: number;
    trial_start: number;
    trial_end: number;
    current_term_start: number;
    current_term_end: number;
    next_billing_at: number;
    remaining_billing_cycles: number;
    po_number: string;
    created_at: number;
    started_at: number;
    activated_at: number;
    gift_id: string;
    pause_date: number;
    resume_date: number;
    cancelled_at: number;
    cancel_reason: string;
    affiliate_token: string;
    created_from_ip: string;
    resource_version: number;
    updated_at: number;
    has_scheduled_changes: boolean;
    payment_source_id: string;
    auto_collection: string;
    due_invoices_count: number;
    due_since: number;
    total_dues: number;
    mrr: number;
    exchange_rate: number;
    base_currency_code: string;
    addons: SubscriptionAddon[];
    event_based_addons: SubscriptionEventBasedAddon[];
    charged_event_based_addons: SubscriptionChargedEventBasedAddon[];
    coupon: string;
    coupons: SubscriptionCoupon[];
    shipping_address: SubscriptionShippingAddress | null;
    referral_info: SubscriptionReferralInfo | null;
    invoice_notes: string;
    meta_data: number[];
    deleted: boolean;
    custom_field: { [key: string]: any };
    object: string;
}

export {
    SubscriptionAddon,
    SubscriptionEventBasedAddon,
    SubscriptionChargedEventBasedAddon,
    SubscriptionCoupon,
    SubscriptionShippingAddress,
    SubscriptionReferralInfo,
    Subscription
};
