"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createEmployeeAction(formData: FormData) {
  const driver = {
    nombre: formData.get("Nombre"),
    apellido: formData.get("Apellido"),
    dni: formData.get("DNI"),
    licencia: {
      id_licencia: formData.get("tipo") === "estandar" ? 1 : 2,
      duracion: formData.get("tipo") === "estandar" ? 5 : 1,
    },
    fecha_emision: formData.get("Fecha Emision"),
  };

  await fetch(`${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/empleados/crear`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(driver),
  });

  revalidatePath("/drivers/createemployee");
  redirect("/drivers");
}

export async function editEmployeeAction(formData: FormData, id: any) {
  const driver = {
    nombre: formData.get("Nombre"),
    apellido: formData.get("Apellido"),
    dni: formData.get("DNI"),
    licencia: {
      id_licencia: formData.get("tipo") === "estandar" ? 1 : 2,
      duracion: formData.get("tipo") === "estandar" ? 5 : 1,
    },
    fecha_emision: formData.get("Fecha Emision"),
  };

  await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/empleados/editar/${id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(driver),
    }
  );

  revalidatePath("/drivers/editemployee");
  redirect("/drivers");
}
