interface SubscriptionEstimateShippingAddress {
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

interface SubscriptionEstimate {
    id: string;
    currency_code: string;
    status: string;
    next_billing_at: number;
    pause_date: number;
    resume_date: number;
    shipping_address: SubscriptionEstimateShippingAddress | null;
    object: string;
}

export { SubscriptionEstimateShippingAddress, SubscriptionEstimate };
