interface PaymentSourceCard {
    first_name: string;
    last_name: string;
    iin: string;
    last4: string;
    brand: string;
    funding_type: string;
    expiry_month: number;
    expiry_year: number;
    billing_addr1: string;
    billing_addr2: string;
    billing_city: string;
    billing_state_code: string;
    billing_state: string;
    billing_country: string;
    billing_zip: string;
    masked_number: string;
    object: string;
}

interface PaymentSourceBankAccount {
    last4: string;
    name_on_account: string;
    bank_name: string;
    mandate_id: string;
    account_type: string;
    echeck_type: string;
    account_holder_type: string;
    object: string;
}

interface PaymentSourceAmazonPayment {
    email: string;
    agreement_id: string;
    object: string;
}

interface PaymentSourcePaypal {
    email: string;
    agreement_id: string;
    object: string;
}

interface PaymentSource {
    id: string;
    customer_id: string;
    type: string;
    reference_id: string;
    status: string;
    gateway: string;
    gateway_account_id: string;
    ip_address: string;
    issuing_country: string;
    card: PaymentSourceCard | null;
    bank_account: PaymentSourceBankAccount | null;
    amazon_payment: PaymentSourceAmazonPayment | null;
    paypal: PaymentSourcePaypal | null;
    deleted: boolean;
    object: string;
}

export { PaymentSourceCard, PaymentSourceBankAccount, PaymentSourceAmazonPayment, PaymentSourcePaypal, PaymentSource };
