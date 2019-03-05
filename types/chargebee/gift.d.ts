interface GiftGifter {
    customer_id: string;
    invoice_id: string;
    signature: string;
    note: string;
    object: string;
}

interface GiftGiftReceiver {
    customer_id: string;
    subscription_id: string;
    first_name: string;
    last_name: string;
    email: string;
    object: string;
}

interface GiftGiftTimeline {
    status: string;
    occurred_at: number;
    object: string;
}

interface Gift {
    id: string;
    status: string;
    scheduled_at: number;
    auto_claim: boolean;
    claim_expiry_date: number;
    resource_version: number;
    updated_at: number;
    gifter: GiftGifter | null;
    gift_receiver: GiftGiftReceiver | null;
    gift_timelines: GiftGiftTimeline[];
    object: string;
}

export { GiftGifter, GiftGiftReceiver, GiftGiftTimeline, Gift };
