export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  edad: number;
  correo: string;
  direccion: string;
  telefono: string;
  curso: string | null;
}

export type AlumnoPayload = Omit<Alumno, 'id'>;
