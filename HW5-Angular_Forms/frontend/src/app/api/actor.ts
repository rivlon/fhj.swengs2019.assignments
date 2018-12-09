export interface Actor {
  id?: number;
  firstName: string;
  lastName: string;
  rating?: number;
  dayOfBirth?: Date;
  gender?: string;
  alive?: string;
  movies?: Array<any>;
  color?: string;
  income?: number;
  clothingSize?: string;
}
