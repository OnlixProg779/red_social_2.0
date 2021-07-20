

CREATE TABLE "Historia" (
	"HistoriaId" uuid NOT NULL,
	"PerfilId" uuid,
	"Date" timestamp with time zone,
	"Imagen" text,
	"Video" text,
	"Texto" text,
	"Active" bool,
	PRIMARY KEY("HistoriaId")
);

CREATE TABLE "Publicacion" (
	"PublicacionId" uuid NOT NULL,
	"PerfilId" uuid,
	"PerfilPublicaPk" uuid,
	"Date" timestamp with time zone,
	"Texto" text,
	"Video" text,
	"Imagen" text,
	"Active" bool,
	PRIMARY KEY("PublicacionId")
);

CREATE TABLE "Usuario" (
	"UsuarioId" uuid NOT NULL,
	"Email" text,
	"Password" text,
	"Bloq" bool,
	"Active" bool,
	PRIMARY KEY("UsuarioId")
);

COMMENT ON TABLE "Usuario" IS 'Un usuario puede tener varios perfiles (el personal uno solo y perfil de pagina puede tener varios)';

CREATE TABLE "Comentario" (
	"ComentarioId" uuid NOT NULL,
	"PublicacionId" uuid,
	"Date" timestamp with time zone,
	"ComentarioRefId" uuid,
	"Texto" text,
	"Active" bool,
	PRIMARY KEY("ComentarioId")
);

CREATE TABLE "Reaccion" (
	"ReaccionId" uuid NOT NULL,
	"ComentarioId" uuid,
	"ReaccionText" text,
	"Active" bool,
	PRIMARY KEY("ReaccionId")
);

CREATE TABLE "MarketPlace" (
	"MarketPlaceId" uuid NOT NULL,
	"PerfilId" uuid,
	"Categoria" text,
	"Producto" text,
	"Ubicacion" text,
	"Precio" float4,
	"Date" timestamp with time zone,
	"Imagen" text,
	"Vendido" bool,
	"Active" bool,
	PRIMARY KEY("MarketPlaceId")
);

CREATE TABLE "Notificacion" (
	"NotificacionId" uuid NOT NULL,
	"UsuarioId" uuid NOT NULL,
	"Record" text,
	"AnyId" uuid,
	"Leido" bool,
	"Active" bool,
	PRIMARY KEY("NotificacionId")
);

CREATE TABLE "Grupo" (
	"GrupoId" uuid NOT NULL,
	"Date" timestamp with time zone,
	"Logo" text,
	"Portada" text,
	"Descripcion" text,
	"Tipo" text,
	"Active" bool,
	PRIMARY KEY("GrupoId")
);

CREATE TABLE "Chat" (
	"ChatId" uuid NOT NULL,
	"Type" text,
	"TextoEnviado" text,
	"TextoRecibido" text,
	"Date" timestamp with time zone,
	"Active" bool,
	PRIMARY KEY("ChatId")
);

COMMENT ON COLUMN "Chat"."Type" IS 'send o recived';

CREATE TABLE "Miembro" (
	"MiembroId" uuid NOT NULL,
	"UsuarioId" uuid NOT NULL,
	"GrupoId" uuid NOT NULL,
	"Rol" text,
	"Banneado" bool,
	PRIMARY KEY("MiembroId")
);

CREATE TABLE "Evento" (
	"EventoId" uuid NOT NULL,
	"Date" timestamp with time zone,
	"Logo" text,
	"Portada" text,
	"Descripcion" text,
	"Tipo" text,
	"Active" bool,
	PRIMARY KEY("EventoId")
);

CREATE TABLE "Participante" (
	"ParticipanteId" uuid NOT NULL,
	"UsuarioId" uuid NOT NULL,
	"EventoId" uuid NOT NULL,
	"Rol" text,
	"Respuesta" text,
	PRIMARY KEY("ParticipanteId")
);

COMMENT ON TABLE "Participante" IS 'Notificaciones de eventos según la fecha, una semana antes, un día antes, el día del evento
';

COMMENT ON COLUMN "Participante"."Respuesta" IS 'Permitir a los usuarios las opciones “me interesa”, “asistiré”, “no asistiré”';

CREATE TABLE "UsuarioClaim" (
	"UsuarioClaimId" uuid NOT NULL,
	"UsuarioId" uuid NOT NULL,
	"ClaimType" text NOT NULL,
	"ClaimValue" text NOT NULL,
	PRIMARY KEY("UsuarioClaimId")
);

CREATE TABLE "Perfil" (
	"PerfilId" uuid NOT NULL,
	"Foto" text,
	"Logo" text,
	"Portada" text,
	"Frase" text,
	"Nacimiento" date,
	"Trabajo" text,
	"Estudio" text,
	"Tipo" text,
	PRIMARY KEY("PerfilId")
);

COMMENT ON TABLE "Perfil" IS 'Un perfil puede pertenecer a varios usuarios siempre q el tipo sea = Pagina';

CREATE TABLE "EtiquetaHistoria" (
	"EtiquetaHistoriaId" uuid NOT NULL,
	"HistoriaId" uuid,
	"PerfilPk" uuid,
	"Active" bool,
	PRIMARY KEY("EtiquetaHistoriaId")
);

CREATE TABLE "Encuesta" (
	"EncuestaId" uuid NOT NULL,
	"PublicacionId" uuid,
	"Pregunta" text,
	"Active" bool,
	PRIMARY KEY("EncuestaId")
);

CREATE TABLE "RespuestaEncuesta" (
	"RespuestaEncuestaId" uuid NOT NULL,
	"EncuestaId" uuid,
	"Respuesta" text,
	"PerfilPk" uuid,
	"Active" bool,
	PRIMARY KEY("RespuestaEncuestaId")
);

COMMENT ON COLUMN "RespuestaEncuesta"."PerfilPk" IS 'Aqui se guarda una referencua al usuario que escribio esa respuesta';

CREATE TABLE "EtiquetaPublicacion" (
	"EtiquetaPublicacionId" uuid NOT NULL,
	"PublicacionId" uuid,
	"PerfilPk" uuid,
	"Active" bool,
	PRIMARY KEY("EtiquetaPublicacionId")
);

COMMENT ON COLUMN "EtiquetaPublicacion"."PerfilPk" IS 'Aqui se guarda referencia a el usuario etiquetado';

CREATE TABLE "ReaccionChat" (
	"ReaccionChatId" uuid NOT NULL,
	"ChatId" uuid,
	"ReaccionText" text,
	"Active" bool,
	PRIMARY KEY("ReaccionChatId")
);

CREATE TABLE "RolesPagina" (
	"RolesPaginaid" uuid NOT NULL,
	"PerfilId" uuid NOT NULL,
	"UsuarioId" uuid,
	"Rol" text,
	"Active" bool,
	PRIMARY KEY("RolesPaginaid")
);

COMMENT ON COLUMN "RolesPagina"."UsuarioId" IS 'Debe ser del tipo USUARIO para crearse el registro';

CREATE TABLE "ReaccionPublicacion" (
	"ReaccionPublicacionId" uuid NOT NULL,
	"PublicacionId" uuid,
	"ReaccionText" text,
	"Active" bool,
	PRIMARY KEY("ReaccionPublicacionId")
);

CREATE TABLE "ReaccionHistoria" (
	"ReaccionHistoriaId" uuid NOT NULL,
	"HistoriaId" uuid,
	"ReaccionText" text,
	"Active" bool,
	PRIMARY KEY("ReaccionHistoriaId")
);

CREATE TABLE "Usuario_has_Chat" (
	"Usuario_has_ChatId" uuid NOT NULL,
	"UsuarioId" uuid NOT NULL,
	"ChatId" uuid NOT NULL,
	"UsuarioRecivedId" uuid,
	PRIMARY KEY("Usuario_has_ChatId")
);

CREATE TABLE "ListaAmistades" (
	"ListaAmistadesId" uuid NOT NULL,
	"Owner" uuid,
	PRIMARY KEY("ListaAmistadesId")
);

CREATE TABLE "ListaSeguidores" (
	"ListaSeguidoresId" uuid NOT NULL,
	"Owner" uuid,
	PRIMARY KEY("ListaSeguidoresId")
);

CREATE TABLE "ListaAmistadesUsuario" (
	"ListaAmistadesUsuarioId" uuid NOT NULL,
	"ListaAmistadesId" uuid NOT NULL,
	"UsuarioId" uuid NOT NULL,
	"AcceptAmistad" bool,
	"Bloq" bool,
	"Active" bool,
	PRIMARY KEY("ListaAmistadesUsuarioId")
);

CREATE TABLE "ListaSeguidoresUsuario" (
	"ListaSeguidoresUsuarioId" uuid NOT NULL,
	"ListaSeguidoresId" uuid NOT NULL,
	"UsuarioId" uuid NOT NULL,
	PRIMARY KEY("ListaSeguidoresUsuarioId")
);

CREATE TABLE "ListaBloqueados" (
	"ListaBloqueadosId" uuid NOT NULL,
	"Owner" uuid,
	PRIMARY KEY("ListaBloqueadosId")
);

CREATE TABLE "ListaBloqueadosUsuario" (
	"ListaBloqueadosUsuarioId" uuid NOT NULL,
	"ListaBloqueadosId" uuid NOT NULL,
	"UsuarioId" uuid NOT NULL,
	"Active" bool,
	PRIMARY KEY("ListaBloqueadosUsuarioId")
);

CREATE TABLE "RespuestaComentario" (
	"RespuestaComentarioId" uuid NOT NULL,
	"ComentarioId" uuid,
	"Date" timestamp with time zone,
	"Texto" text,
	"Active" bool,
	PRIMARY KEY("RespuestaComentarioId")
);

CREATE TABLE "ReaccionRespuestaCom" (
	"ReaccionRespuestaComId" uuid NOT NULL,
	"RespuestaComentarioId" uuid,
	"ReaccionText" text,
	"Active" bool,
	PRIMARY KEY("ReaccionRespuestaComId")
);

CREATE TABLE "EtiquetaComentario" (
	"EtiquetaComentarioId" uuid NOT NULL,
	"ComentarioId" uuid,
	"PerfilPk" uuid,
	"Active" bool,
	PRIMARY KEY("EtiquetaComentarioId")
);

COMMENT ON COLUMN "EtiquetaComentario"."PerfilPk" IS 'Aqui se guarda referencia a el usuario etiquetado';

CREATE TABLE "EtiquetaRespuestaCom" (
	"EtiquetaRespuestaComId" uuid NOT NULL,
	"RespuestaComentarioId" uuid,
	"PerfilPk" uuid,
	"Active" bool,
	PRIMARY KEY("EtiquetaRespuestaComId")
);

COMMENT ON COLUMN "EtiquetaRespuestaCom"."PerfilPk" IS 'Aqui se guarda referencia a el usuario etiquetado';


ALTER TABLE "Historia" ADD CONSTRAINT "Ref_Historia_to_Perfil" FOREIGN KEY ("PerfilId")
	REFERENCES "Perfil"("PerfilId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Publicacion" ADD CONSTRAINT "Ref_Publicacion_to_Perfil" FOREIGN KEY ("PerfilId")
	REFERENCES "Perfil"("PerfilId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Comentario" ADD CONSTRAINT "Ref_Comentario_to_Publicacion" FOREIGN KEY ("PublicacionId")
	REFERENCES "Publicacion"("PublicacionId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Reaccion" ADD CONSTRAINT "Ref_Reaccion_to_Comentario" FOREIGN KEY ("ComentarioId")
	REFERENCES "Comentario"("ComentarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "MarketPlace" ADD CONSTRAINT "Ref_MarketPlace_to_Perfil" FOREIGN KEY ("PerfilId")
	REFERENCES "Perfil"("PerfilId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Notificacion" ADD CONSTRAINT "Ref_Notificacion_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Miembro" ADD CONSTRAINT "Ref_Usuario_has_Grupo_to_Grupo" FOREIGN KEY ("GrupoId")
	REFERENCES "Grupo"("GrupoId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Miembro" ADD CONSTRAINT "Ref_Usuario_has_Grupo_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Participante" ADD CONSTRAINT "Ref_Usuario_has_Evento_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Participante" ADD CONSTRAINT "Ref_Usuario_has_Evento_to_Evento" FOREIGN KEY ("EventoId")
	REFERENCES "Evento"("EventoId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "UsuarioClaim" ADD CONSTRAINT "Ref_UsuarioClaim_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "EtiquetaHistoria" ADD CONSTRAINT "Ref_EtiquetaHistoria_to_Historia" FOREIGN KEY ("HistoriaId")
	REFERENCES "Historia"("HistoriaId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Encuesta" ADD CONSTRAINT "Ref_Encuesta_to_Publicacion" FOREIGN KEY ("PublicacionId")
	REFERENCES "Publicacion"("PublicacionId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "RespuestaEncuesta" ADD CONSTRAINT "Ref_RespuestaEncuesta_to_Encuesta" FOREIGN KEY ("EncuestaId")
	REFERENCES "Encuesta"("EncuestaId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "EtiquetaPublicacion" ADD CONSTRAINT "Ref_EtiquetaPublicacion_to_Publicacion" FOREIGN KEY ("PublicacionId")
	REFERENCES "Publicacion"("PublicacionId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ReaccionChat" ADD CONSTRAINT "Ref_ReaccionChat_to_Chat" FOREIGN KEY ("ChatId")
	REFERENCES "Chat"("ChatId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "RolesPagina" ADD CONSTRAINT "Ref_RolesPagina_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "RolesPagina" ADD CONSTRAINT "Ref_RolesPagina_to_Perfil" FOREIGN KEY ("PerfilId")
	REFERENCES "Perfil"("PerfilId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ReaccionPublicacion" ADD CONSTRAINT "Ref_ReaccionPublicacion_to_Publicacion" FOREIGN KEY ("PublicacionId")
	REFERENCES "Publicacion"("PublicacionId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ReaccionHistoria" ADD CONSTRAINT "Ref_ReaccionHistoria_to_Historia" FOREIGN KEY ("HistoriaId")
	REFERENCES "Historia"("HistoriaId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Usuario_has_Chat" ADD CONSTRAINT "Ref_Usuario_has_Chat_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "Usuario_has_Chat" ADD CONSTRAINT "Ref_Usuario_has_Chat_to_Chat" FOREIGN KEY ("ChatId")
	REFERENCES "Chat"("ChatId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ListaAmistadesUsuario" ADD CONSTRAINT "Ref_ListaAmistades_has_Usuario_to_ListaAmistades" FOREIGN KEY ("ListaAmistadesId")
	REFERENCES "ListaAmistades"("ListaAmistadesId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ListaAmistadesUsuario" ADD CONSTRAINT "Ref_ListaAmistades_has_Usuario_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ListaSeguidoresUsuario" ADD CONSTRAINT "Ref_ListaSeguidores_has_Usuario_to_ListaSeguidores" FOREIGN KEY ("ListaSeguidoresId")
	REFERENCES "ListaSeguidores"("ListaSeguidoresId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ListaSeguidoresUsuario" ADD CONSTRAINT "Ref_ListaSeguidores_has_Usuario_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ListaBloqueadosUsuario" ADD CONSTRAINT "Ref_ListaBloqueados_has_Usuario_to_ListaBloqueados" FOREIGN KEY ("ListaBloqueadosId")
	REFERENCES "ListaBloqueados"("ListaBloqueadosId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ListaBloqueadosUsuario" ADD CONSTRAINT "Ref_ListaBloqueados_has_Usuario_to_Usuario" FOREIGN KEY ("UsuarioId")
	REFERENCES "Usuario"("UsuarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "RespuestaComentario" ADD CONSTRAINT "Ref_RespuestaComentario_to_Comentario" FOREIGN KEY ("ComentarioId")
	REFERENCES "Comentario"("ComentarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "ReaccionRespuestaCom" ADD CONSTRAINT "Ref_ReaccionRespuestaCom_to_RespuestaComentario" FOREIGN KEY ("RespuestaComentarioId")
	REFERENCES "RespuestaComentario"("RespuestaComentarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "EtiquetaComentario" ADD CONSTRAINT "Ref_EtiquetaComentario_to_Comentario" FOREIGN KEY ("ComentarioId")
	REFERENCES "Comentario"("ComentarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;

ALTER TABLE "EtiquetaRespuestaCom" ADD CONSTRAINT "Ref_EtiquetaRespuestaCom_to_RespuestaComentario" FOREIGN KEY ("RespuestaComentarioId")
	REFERENCES "RespuestaComentario"("RespuestaComentarioId")
	MATCH SIMPLE
	ON DELETE NO ACTION
	ON UPDATE NO ACTION
	NOT DEFERRABLE;


