interface PortalSessionLinkedCustomer {
    customer_id: string;
    email: string;
    has_billing_address: boolean;
    has_payment_method: boolean;
    has_active_subscription: boolean;
    object: string;
}

interface PortalSession {
    id: string;
    token: string;
    access_url: string;
    redirect_url: string;
    status: string;
    created_at: number;
    expires_at: number;
    customer_id: string;
    login_at: number;
    logout_at: number;
    login_ipaddress: string;
    logout_ipaddress: string;
    linked_customers: PortalSessionLinkedCustomer[];
    object: string;
}

export { PortalSessionLinkedCustomer, PortalSession };
