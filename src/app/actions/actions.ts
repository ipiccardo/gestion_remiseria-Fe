"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// EMPLOYEE ACCIONS

export async function createEmployeeAction(formData: FormData) {
  const driver = {
    nombre: formData.get("Nombre"),
    apellido: formData.get("Apellido"),
    dni: formData.get("DNI"),
    licencia: {
      id_licencia: formData.get("tipo") === "estandar" ? 2 : 1,
      duracion: formData.get("tipo") === "estandar" ? 1 : 5,
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

  revalidatePath("/dashboard/drivers/createemployee");
  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}

export async function editEmployeeAction(formData: FormData, id: any) {
  const driver = {
    nombre: formData.get("Nombre"),
    apellido: formData.get("Apellido"),
    dni: formData.get("DNI"),
    licencia: {
      id_licencia: formData.get("tipo") === "estandar" ? 2 : 1,
      duracion: formData.get("tipo") === "estandar" ? 1 : 5,
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

  revalidatePath(`/dashboard/drivers/editemployee/${id}`);
  revalidatePath("/dashboard/drivers");
  redirect("/dashboard/drivers");
}
export async function deleteEmployeeAction(id: any) {
  await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/empleados/eliminar/${id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  revalidatePath("/dashboard/drivers");
  revalidatePath("/dashboard/vehicles");
  revalidatePath("/dashboard/trips");
  redirect("/dashboard/drivers");
}

// VEHICLES ACCIONS

export async function createVehicleAccion(formData: FormData) {
  const vehicle = {
    dominio: formData.get("Dominio"),
    marca: formData.get("Marca"),
    modelo: formData.get("Modelo"),
    kilometraje: formData.get("Kilometraje"),
    estado: formData.get("Estado") === "disponible" ? true : false,
    anio: formData.get("Anio"),
  };

  await fetch(`${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/vehiculos/crear`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(vehicle),
  });

  revalidatePath("/dashboard/vehicles/createvehicle");
  revalidatePath("/dashboard/vehicles");
  redirect("/dashboard/vehicles");
}

export async function editVehicleAction(formData: FormData, id: any) {
  const vehicle = {
    dominio: formData.get("Dominio"),
    marca: formData.get("Marca"),
    modelo: formData.get("Modelo"),
    kilometraje: formData.get("Kilometraje"),
    estado:
      formData.get("Estado") === "taller" || !formData.get("Estado")
        ? false
        : true,
    anio: formData.get("Anio"),
    id_empleado: formData.get("Empleado") ? formData.get("Empleado") : null,
  };

  await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/vehiculos/editar/${id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(vehicle),
    }
  );

  revalidatePath("/dashboard/vehicles/editevehicle");
  revalidatePath("/dashboard/vehicles");
  redirect("/dashboard/vehicles");
}
export async function deleteVehicleAction(id: any) {
  await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/vehiculos/eliminar/${id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  revalidatePath("/dashboard/vehicles");
  redirect("/dashboard/vehicles");
}

// TRIPS ACCIONS

export async function createTripAction(formData: FormData) {
  const trip = {
    fecha: formData.get("Date"),
    kilometros: formData.get("Kilometres"),
    precio_kilometro: formData.get("Price (x Kilometres)"),
    id_empleado: formData.get("Driver"),
    id_vehiculo: formData.get("Vehicle"),
  };

  await fetch(`${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/viajes/crear`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(trip),
  });

  revalidatePath("/dashboard/trips/createtrip");
  revalidatePath("/dashboard/trips");
  redirect("/dashboard/trips");
}

export async function editTripAction(formData: FormData, id: any) {
  const trip = {
    fecha: formData.get("Date"),
    kilometros: formData.get("Kilometres"),
    precio_kilometro: formData.get("Price (x Kilometres)"),
    id_empleado: formData.get("Driver"),
    id_vehiculo: formData.get("Vehicle"),
  };

  await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/viajes/editar/${id}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(trip),
    }
  );

  revalidatePath("/dashboard/trips/edittrip");
  revalidatePath("/dashboard/trips");
  redirect("/dashboard/trips");
}

export async function deleteTripAction(id: any) {
  await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/viajes/eliminar/${id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  revalidatePath("/dashboard/trips");
  redirect("/dashboard/trips");
}
