interface VirtualBankAccount {
    id: string;
    customer_id: string;
    email: string;
    bank_name: string;
    account_number: string;
    routing_number: string;
    swift_code: string;
    gateway: string;
    gateway_account_id: string;
    reference_id: string;
    deleted: boolean;
    object: string;
}

export { VirtualBankAccount };
