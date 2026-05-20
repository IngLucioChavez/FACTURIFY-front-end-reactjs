export interface ResponseMensajesConversacion {
    conversacion: Conversacion;
    mensajes: Mensaje[];
}

export interface Conversacion {
    id: number;
    usuario_1_id: number;
    usuario_2_id: number;
    created_at: Date;
    updated_at: Date;
}

export interface Mensaje {
    id: number;
    conversacion_id: number;
    usuario_id: number;
    mensaje: string;
    leido: number;
    created_at: Date;
    updated_at: Date;
    usuario: Usuario;
}

export interface Usuario {
    id: number;
    nombre: string;
    email: string;
    created_at: Date;
    updated_at: Date;
}

