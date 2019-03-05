interface UnbilledChargeTier {
    starting_unit: number;
    ending_unit: number;
    quantity_used: number;
    unit_amount: number;
    object: string;
}

interface UnbilledCharge {
    id: string;
    customer_id: string;
    subscription_id: string;
    date_from: number;
    date_to: number;
    unit_amount: number;
    pricing_model: string;
    quantity: number;
    amount: number;
    currency_code: string;
    discount_amount: number;
    description: string;
    entity_type: string;
    entity_id: string;
    is_voided: boolean;
    voided_at: number;
    tiers: UnbilledChargeTier[];
    deleted: boolean;
    object: string;
}

export { UnbilledChargeTier, UnbilledCharge };
