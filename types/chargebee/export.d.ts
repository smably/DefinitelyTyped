interface ExportDownload {
    download_url: string;
    valid_till: number;
    object: string;
}

interface Export {
    id: string;
    operation_type: string;
    mime_type: string;
    status: string;
    created_at: number;
    download: ExportDownload | null;
    object: string;
}

export { ExportDownload, Export };
