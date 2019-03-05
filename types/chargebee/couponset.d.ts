interface CouponSet {
    id: string;
    coupon_id: string;
    name: string;
    total_count: number;
    redeemed_count: number;
    archived_count: number;
    meta_data: number[];
    object: string;
}

export { CouponSet };
