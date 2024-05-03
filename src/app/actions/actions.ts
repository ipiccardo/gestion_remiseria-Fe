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

  revalidatePath("/vehicles/createvehicle");
  redirect("/vehicles");
}

export async function editVehicleAction(formData: FormData, id: any) {
  const vehicle = {
    dominio: formData.get("Dominio"),
    marca: formData.get("Marca"),
    modelo: formData.get("Modelo"),
    kilometraje: formData.get("Kilometraje"),
    estado: formData.get("Estado") === "disponible" ? true : false,
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

  revalidatePath("/vehicles/editemployee");
  redirect("/vehicles");
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

  revalidatePath("/trips/createtrip");
  redirect("/trips");
}

export async function editTripAction(formData: FormData, id: any) {
  console.log(formData, "formdata");

  const trip = {
    fecha: formData.get("Date"),
    kilometros: formData.get("Kilometres"),
    precio_kilometro: formData.get("Price (x Kilometres)"),
    id_empleado: formData.get("Driver"),
    id_vehiculo: formData.get("Vehicle"),
  };

  console.log(trip, "trip");

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

  revalidatePath("/trips/edittrip");
  redirect("/trips");
}
