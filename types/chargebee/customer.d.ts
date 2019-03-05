interface CustomerBillingAddress {
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

interface CustomerReferralUrl {
    external_customer_id: string;
    referral_sharing_url: string;
    created_at: number;
    updated_at: number;
    referral_campaign_id: string;
    referral_account_id: string;
    referral_external_campaign_id: string;
    referral_system: string;
    object: string;
}

interface CustomerContact {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    label: string;
    enabled: boolean;
    send_account_email: boolean;
    send_billing_email: boolean;
    object: string;
}

interface CustomerPaymentMethod {
    type: string;
    gateway: string;
    gateway_account_id: string;
    status: string;
    reference_id: string;
    object: string;
}

interface CustomerBalance {
    promotional_credits: number;
    excess_payments: number;
    refundable_credits: number;
    unbilled_charges: number;
    currency_code: string;
    balance_currency_code: string;
    object: string;
}

interface Customer {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    company: string;
    vat_number: string;
    auto_collection: string;
    net_term_days: number;
    vat_number_validated_time: number;
    vat_number_status: string;
    allow_direct_debit: boolean;
    is_location_valid: boolean;
    created_at: number;
    created_from_ip: string;
    taxability: string;
    entity_code: string;
    exempt_number: string;
    resource_version: number;
    updated_at: number;
    locale: string;
    consolidated_invoicing: boolean;
    billing_date: number;
    billing_date_mode: string;
    billing_day_of_week: string;
    billing_day_of_week_mode: string;
    pii_cleared: string;
    card_status: string;
    fraud_flag: string;
    primary_payment_source_id: string;
    backup_payment_source_id: string;
    billing_address: CustomerBillingAddress | null;
    referral_urls: CustomerReferralUrl[];
    contacts: CustomerContact[];
    payment_method: CustomerPaymentMethod | null;
    invoice_notes: string;
    preferred_currency_code: string;
    promotional_credits: number;
    unbilled_charges: number;
    refundable_credits: number;
    excess_payments: number;
    balances: CustomerBalance[];
    meta_data: number[];
    deleted: boolean;
    registered_for_gst: boolean;
    custom_field: { [key: string]: any };
    consents: { [key: string]: any };
    object: string;
}

export {
    CustomerBillingAddress,
    CustomerReferralUrl,
    CustomerContact,
    CustomerPaymentMethod,
    CustomerBalance,
    Customer
};
