export interface MisConversacionesResponse {
    status: string;
    conversaciones: Conversaciones[];
}

export interface Conversaciones {
    id: number;
    usuario_1_id: number;
    usuario_2_id: number;
    created_at: Date;
    updated_at: Date;
    usuario1: Usuario;
    usuario2: Usuario;
}

export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}
