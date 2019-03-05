interface ResourceMigration {
    from_site: string;
    entity_type: string;
    entity_id: string;
    status: string;
    errors: string;
    created_at: number;
    updated_at: number;
    object: string;
}

export { ResourceMigration };
