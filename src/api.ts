import { driver, Vehiculo, Trips } from "../types";

const drivers: driver[] = [];

export const driverApi = {
  list: async (): Promise<driver[]> => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/empleados/`
      //   { next: { tags: ["drivers"] } }
    )
      .then((res) => res.json())
      .then((data) => {
        return data.EMPLEADOS;
      });

    return data;
  },
  //   fetch: async (id: Restaurant["id"]): Promise<Restaurant> => {
  //     await sleep(750);

  //     const driver = restaurants.find((restaurant) => restaurant.id === id);

  //     if (!restaurant) {
  //       throw new Error(`Restaurant with id ${id} not found`);
  //     }

  //     return restaurant;
  //   },
  search: async (query: string): Promise<driver[]> => {
    const results = await driverApi
      .list()
      .then((restos) =>
        restos.filter((res) =>
          res.nombre.toLowerCase().includes(query?.toLowerCase())
        )
      );

    return results;
  },
};

export const vehicleApi = {
  list: async (): Promise<Vehiculo[]> => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/vehiculos/`
      //   { next: { tags: ["drivers"] }
    )
      .then((res) => res.json())
      .then((data) => {
        return data.VEHICULOS;
      });

    return data;
  },

  search: async (query: string): Promise<Vehiculo[]> => {
    const results = await vehicleApi
      .list()
      .then((restos) =>
        restos.filter((res) =>
          res.dominio.toLowerCase().includes(query?.toLowerCase())
        )
      );

    return results;
  },
};

export const tripsApi = {
  list: async (): Promise<Trips[]> => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_PORT}/api/viajes/`
      //   { next: { tags: ["drivers"] } }
    )
      .then((res) => res.json())
      .then((data) => {
        return data.VIAJES;
      });

    return data;
  },
  search: async (query: string): Promise<Trips[]> => {
    const results = await tripsApi
      .list()
      .then((restos) =>
        restos.filter((res) =>
          res.apellido.toLowerCase().includes(query?.toLowerCase())
        )
      );

    return results;
  },
};
