import { useContext, useEffect, useMemo, useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { userContext } from "@/context/userContext";
import { Navigate } from "react-router";
import { GetMisConversaciones } from "@/actions/GetMisConversaciones";
import { GetMensajesConversacion } from "@/actions/GetMensajesConversacion";

type UserConversacion = {
    id: number;
    name: string;
    idConversacion?: number;
};

type Message = {
    id: number;
    from: string | number;
    to: string;
    text: string;
    timestamp: number;
};

export const Mensajes = () => {
    const [selectedUserCon, setSelectedUserCon] = useState<UserConversacion | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [text, setText] = useState("");
    const [open, setOpen] = useState(false);
    const [usuariosConversaciones, setUsuariosConversaciones] = useState<UserConversacion[]>([]);

    const { authStatus, user, token } = useContext(userContext);

    if (authStatus !== "autenticado") {
        return <Navigate to={"/"} />
    }

    useEffect(() => {
        GetMisConversaciones(token ?? "")
            .then((r) => {
                const usuarios: UserConversacion[] = r.conversaciones.map((con): UserConversacion => {
                    return {
                        id: user?.id === con.usuario_1_id ? con.usuario_2_id : con.usuario_1_id,
                        name: user?.id === con.usuario_1_id ? con.usuario2.nombre : con.usuario1.nombre,
                        idConversacion: con.id
                    }
                })
                setUsuariosConversaciones(usuarios);
            });
    }, [])

    useEffect(() => {
        if (selectedUserCon === null)
            return;

        GetMensajesConversacion(selectedUserCon.idConversacion ?? 0, token ?? "")
            .then((r) => {
                const mensajes: Message[] = r.mensajes.map((mensaje): Message => {
                    return {
                        id: mensaje.id,
                        from: mensaje.usuario.nombre,
                        to: "me",
                        text: mensaje.mensaje,
                        timestamp: 0
                    }
                })
                setMessages(mensajes);
            });

    }, [selectedUserCon])

    const currentUserId = user?.id.toString();

    const filteredMessages = useMemo(() => {
        // if (!selectedUserCon) return [];
        // return messages.filter(
        //     (m) =>
        //         (m.from === currentUserId && m.to === selectedUserCon.id) ||
        //         (m.from === selectedUserCon.id && m.to === currentUserId)
        // );
    }, [messages, selectedUserCon]);

    const sendMessage = () => {
        // if (!selectedUserCon || !text.trim()) return;

        // const newMsg: Message = {
        //     id: crypto.randomUUID(),
        //     from: currentUserId,
        //     to: selectedUserCon.id,
        //     text,
        //     timestamp: Date.now(),
        // };

        // setMessages((prev) => [...prev, newMsg]);
        // setText("");
    };

    const Sidebar = () => (
        <div className="w-80 border-r border-yellow-500/20 bg-black flex flex-col h-full relative">
            <Card className="rounded-none border-0 bg-black">
                <CardHeader className="text-yellow-400 text-lg font-bold">
                    Conversaciones
                </CardHeader>
                <Separator className="bg-yellow-500/20" />
            </Card>

            <ScrollArea className="flex-1">
                {usuariosConversaciones.map((userCon) => (
                    <div
                        key={userCon.id}
                        onClick={() => {
                            setSelectedUserCon(userCon);
                            setOpen(false);
                        }}
                        className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-yellow-500/10 transition ${selectedUserCon?.id === userCon.id ? "bg-yellow-500/20" : ""
                            }`}
                    >
                        <Avatar className="bg-yellow-500 text-black">
                            <AvatarFallback>{userCon.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{userCon.name}</span>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black text-yellow-400">
            {/* BACKGROUND GOLD CIRCLES */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl top-10 left-10" />
                <div className="absolute w-[32rem] h-[32rem] bg-yellow-400/10 rounded-full blur-3xl bottom-10 right-10" />
                <div className="absolute w-72 h-72 bg-yellow-300/10 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="h-screen w-full flex flex-col md:flex-row">
                {/* MOBILE HEADER */}
                <div className="md:hidden flex items-center gap-3 p-3 border-b border-yellow-500/20 bg-black/60 backdrop-blur">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger>
                            <Button variant="ghost" size="icon">
                                <Menu className="text-yellow-400" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="p-0 bg-black border-yellow-500/20">
                            <Sidebar />
                        </SheetContent>
                    </Sheet>

                    <div className="font-semibold">
                        {selectedUserCon ? selectedUserCon.name : "Chat"}
                    </div>
                </div>

                {/* DESKTOP SIDEBAR */}
                <div className="hidden md:block">
                    <Sidebar />
                </div>

                {/* CHAT AREA */}
                <div className="flex-1 flex flex-col h-full">
                    <div className="hidden md:block p-4 border-b border-yellow-500/20 bg-black/40 backdrop-blur">
                        {selectedUserCon ? (
                            <div className="font-semibold text-yellow-300">
                                Chat con {selectedUserCon.name}
                            </div>
                        ) : (
                            <div className="text-yellow-500/60">Selecciona un usuario</div>
                        )}
                    </div>

                    <ScrollArea className="flex-1 p-4">
                        <div className="space-y-3">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`max-w-xs px-4 py-2 rounded-xl text-sm shadow-md ${msg.from === user?.nombre
                                        ? "ml-auto bg-yellow-500 text-black"
                                        : "bg-yellow-500/10 border border-yellow-500/20 text-yellow-200"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>

                    <div className="p-3 border-t border-yellow-500/20 flex gap-2 bg-black/60 backdrop-blur">
                        <Input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Escribe un mensaje..."
                            className="bg-black border-yellow-500/30 text-yellow-300"
                        />
                        <Button
                            onClick={sendMessage}
                            className="bg-yellow-500 text-black hover:bg-yellow-400"
                        >
                            Enviar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
