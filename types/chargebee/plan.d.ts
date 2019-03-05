interface PlanTier {
    starting_unit: number;
    ending_unit: number;
    price: number;
    object: string;
}

interface PlanApplicableAddon {
    id: string;
    object: string;
}

interface PlanAttachedAddon {
    id: string;
    quantity: number;
    billing_cycles: number;
    type: string;
    object: string;
}

interface PlanEventBasedAddon {
    id: string;
    quantity: number;
    on_event: string;
    charge_once: boolean;
    object: string;
}

interface Plan {
    id: string;
    name: string;
    invoice_name: string;
    description: string;
    price: number;
    currency_code: string;
    period: number;
    period_unit: string;
    trial_period: number;
    trial_period_unit: string;
    pricing_model: string;
    charge_model: string;
    free_quantity: number;
    setup_cost: number;
    downgrade_penalty: number;
    status: string;
    archived_at: number;
    billing_cycles: number;
    redirect_url: string;
    enabled_in_hosted_pages: boolean;
    enabled_in_portal: boolean;
    addon_applicability: string;
    tax_code: string;
    sku: string;
    accounting_code: string;
    accounting_category1: string;
    accounting_category2: string;
    is_shippable: boolean;
    shipping_frequency_period: number;
    shipping_frequency_period_unit: string;
    resource_version: number;
    updated_at: number;
    giftable: boolean;
    claim_url: string;
    invoice_notes: string;
    taxable: boolean;
    tax_profile_id: string;
    meta_data: number[];
    tiers: PlanTier[];
    applicable_addons: PlanApplicableAddon[];
    attached_addons: PlanAttachedAddon[];
    event_based_addons: PlanEventBasedAddon[];
    custom_field: { [key: string]: any };
    object: string;
}

export { PlanTier, PlanApplicableAddon, PlanAttachedAddon, PlanEventBasedAddon, Plan };
