interface HostedPage {
    id: string;
    type: string;
    url: string;
    state: string;
    failure_reason: string;
    pass_thru_content: string;
    embed: boolean;
    created_at: number;
    expires_at: number;
    content: number[];
    updated_at: number;
    resource_version: number;
    checkout_info: number[];
    object: string;
}

export { HostedPage };
