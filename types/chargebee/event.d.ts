interface EventWebhook {
    id: string;
    webhook_status: string;
    object: string;
}

interface Event {
    id: string;
    occurred_at: number;
    source: string;
    user: string;
    webhook_status: string;
    webhook_failure_reason: string;
    webhooks: EventWebhook[];
    event_type: string;
    api_version: string;
    content: number[];
    object: string;
}

export { EventWebhook, Event };
