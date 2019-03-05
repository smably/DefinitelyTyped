interface AddonTier {
    starting_unit: number;
    ending_unit: number;
    price: number;
    object: string;
}

interface Addon {
    id: string;
    name: string;
    invoice_name: string;
    description: string;
    pricing_model: string;
    type: string;
    charge_type: string;
    price: number;
    currency_code: string;
    period: number;
    period_unit: string;
    unit: string;
    status: string;
    archived_at: number;
    enabled_in_portal: boolean;
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
    invoice_notes: string;
    taxable: boolean;
    tax_profile_id: string;
    meta_data: number[];
    tiers: AddonTier[];
    custom_field: { [key: string]: any };
    object: string;
}

export { AddonTier, Addon };
