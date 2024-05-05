import { driver, Vehiculo, Trips } from "../types";

const drivers: driver[] = [];

export const driverApi = {
  list: async (): Promise<driver[]> => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/empleados/`,
      { next: { tags: ["drivers"] } }
    )
      .then((res) => res.json())
      .then((data) => {
        return data.EMPLEADOS;
      });

    return data;
  },
  fetch: async (id: any): Promise<any> => {
    const driver = await driverApi.list().then((res) => {
      return res.find((empleado) => empleado.id?.toString() === id?.toString());
    });

    if (!driver) {
      throw new Error(`Driver with id ${id} not found`);
    }

    return driver;
  },
  search: async (query: string): Promise<driver[]> => {
    const results = await driverApi
      .list()
      .then((res) =>
        res.filter(
          (res) =>
            res.nombre.toLowerCase().includes(query?.toLowerCase()) ||
            res.apellido.toLowerCase().includes(query?.toLowerCase()) ||
            res?.dni?.toString().toLowerCase().includes(query?.toLowerCase()) ||
            res.tipo.toLowerCase().includes(query?.toString())
        )
      );

    return results;
  },
};

export const vehicleApi = {
  list: async (): Promise<Vehiculo[]> => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/vehiculos/`,
      { next: { tags: ["vehicles"] } }
    )
      .then((res) => res.json())
      .then((data) => {
        return data.VEHICULOS;
      });

    return data;
  },
  fetch: async (id: any): Promise<any> => {
    const vehicle = await vehicleApi
      .list()
      .then((res) =>
        res.find((vehicle) => vehicle.id?.toString() === id.id?.toString())
      );

    if (!vehicle) {
      throw new Error(`Vehicle with id ${id} not found`);
    }

    return vehicle;
  },

  search: async (query: string): Promise<Vehiculo[]> => {
    const results = await vehicleApi
      .list()
      .then((res: any) =>
        res.filter(
          (res: any) =>
            res.dominio.toLowerCase().includes(query?.toLowerCase()) ||
            res.marca.toLowerCase().includes(query?.toLowerCase()) ||
            res.modelo.toLowerCase().includes(query?.toLowerCase())
        )
      );

    return results;
  },
};

export const tripsApi = {
  list: async (): Promise<Trips[]> => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/viajes/`,
      { next: { tags: ["trips"] } }
    )
      .then((res) => res.json())
      .then((data) => {
        return data.VIAJES;
      });

    return data;
  },
  fetch: async (id: any): Promise<any> => {
    const trip = await tripsApi
      .list()
      .then((res) =>
        res.find((trip) => trip.id.toString() === id.id.toString())
      );

    if (!trip) {
      throw new Error(`trip with id ${id} not found`);
    }

    return trip;
  },
  search: async (query: string): Promise<Trips[]> => {
    const results = await tripsApi
      .list()
      .then((res) =>
        res?.filter(
          (res) =>
            res.apellido.toLowerCase().includes(query?.toLowerCase()) ||
            res.nombre.toLowerCase().includes(query?.toLowerCase()) ||
            res.patente.toLowerCase().includes(query?.toLowerCase()) ||
            res.marca.toLowerCase().includes(query?.toString()) ||
            res.modelo.toLowerCase().includes(query?.toString())
        )
      );

    return results;
  },
};
