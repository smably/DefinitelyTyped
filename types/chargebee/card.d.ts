interface Card {
    payment_source_id: string;
    status: string;
    gateway: string;
    gateway_account_id: string;
    first_name: string;
    last_name: string;
    iin: string;
    last4: string;
    card_type: string;
    funding_type: string;
    expiry_month: number;
    expiry_year: number;
    issuing_country: string;
    billing_addr1: string;
    billing_addr2: string;
    billing_city: string;
    billing_state_code: string;
    billing_state: string;
    billing_country: string;
    billing_zip: string;
    ip_address: string;
    customer_id: string;
    masked_number: string;
    object: string;
}

export { Card };
