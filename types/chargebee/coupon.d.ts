interface Coupon {
    id: string;
    name: string;
    invoice_name: string;
    discount_type: string;
    discount_percentage: number;
    discount_amount: number;
    discount_quantity: number;
    currency_code: string;
    duration_type: string;
    duration_month: number;
    valid_till: number;
    max_redemptions: number;
    status: string;
    apply_discount_on: string;
    apply_on: string;
    plan_constraint: string;
    addon_constraint: string;
    created_at: number;
    archived_at: number;
    resource_version: number;
    updated_at: number;
    plan_ids: string[];
    addon_ids: string[];
    redemptions: number;
    invoice_notes: string;
    meta_data: number[];
    object: string;
}

export { Coupon };
