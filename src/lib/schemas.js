import { z } from "zod";

export const contactSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Correo inválido",
    })
    .email()
    .min(5),
  nombre: z.string({
    invalid_type_error: "Nombre inválido",
    required_error: "El nombre es requerido",
  }).min(2, "El nombre debe tener al menos 2 caracteres"),
  apellidos: z.string({
    invalid_type_error: "Apellidos inválidos",
    required_error: "Los apellidos son requeridos",
  }).min(2, "El apellido debe tener al menos 2 caracteres"),
});
