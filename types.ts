export interface driver {
  id: number;
  nombre: string;
  apellido: string;
  dni: number | null;
  tipo: string;
  licencia_vigente?: boolean;
  fecha_emision?: any;
  salario?: string;
  ult_periodo?: any;
}

export interface Vehiculo {
  id: number;
  dominio: string;
  marca: string;
  modelo: string;
  kilometraje: number;
  disponible?: boolean;
  idEmpleado?: number;
  anio?: any;
  estado?: boolean;
  nombre?: string;
  apellido?: string;
}

export interface Licencia {
  idLicencia: number;
  tipo: string;
  vigencia: number;
}

export interface Liquidacion {
  idEmpleado: number;
  nombreEmpleado: string;
  sueldo: number;
}

export interface Trips {
  id: number;
  nombre: string;
  apellido: string;
  dni?: number;
  fecha: string;
  kilometros_recorridos?: number;
  marca: string;
  modelo: string;
  anio?: number;
  patente: string;
  kilometros: number;
  precio_kilometro: number;
  id_vehiculo: number;
  id_empleado: number;
}
