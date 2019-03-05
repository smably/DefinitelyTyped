interface SiteMigrationDetail {
    entity_id: string;
    other_site_name: string;
    entity_id_at_other_site: string;
    migrated_at: number;
    entity_type: string;
    status: string;
    object: string;
}

export { SiteMigrationDetail };
