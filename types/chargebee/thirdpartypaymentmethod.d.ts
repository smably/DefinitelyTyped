interface ThirdPartyPaymentMethod {
    type: string;
    gateway: string;
    gateway_account_id: string;
    reference_id: string;
    object: string;
}

export { ThirdPartyPaymentMethod };
