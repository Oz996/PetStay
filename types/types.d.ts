export interface User {
  id: string;
  email: string;
  password: string;
}

export interface Rental {
  id: string;
  name: string;
  type: string;
  description: string;
  city: string;
  city_short: string;
  address: string;
  country: string;
  dateArrival: string;
  dateDeparture: string;
  pet_policy: string;
  sound_level: string;
  latitude: number;
  longitude: number;
  people: number;
  isFee: boolean;
  price: number;
  rooms: number;
  beds: number;
  bathroom: number;
  amenities: Amenities;
  dog_amenities: DogAmenities;
  neighborhood: Neighborhood[];
  host: Host;
  feats: Feats[];
  gallery: Gallery[];
  rating: Rating;
  reviews: Review[];
}

export interface Amenities {
  id: string;
  self_check_in: boolean;
  wifi: boolean;
  free_parking: boolean;
  kitchen: boolean;
  bath_tub: boolean;
}

export interface DogAmenities {
  id: string;
  microwave: boolean;
  shower: boolean;
  dog_food: boolean;
  cats: boolean;
}

export interface Neighborhood {
  id: string;
  name: string;
  distance: number;
}

export interface Gallery {
  id: string;
  imageUrl: string;
}

export interface Rating {
  id: string;
  rating: number;
  votes: number;
}

export interface Feats {
  id: string;
  feat: string;
}

export interface Review {
  id: string;
  review: string;
  title: string;
  createdAt: string;
  user: User;
}

export interface Host {
  id: string;
  host: string;
  imageUrl: string;
  rating: number;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
}

export interface Credentials {
  firstName: string;
  lastName: string;
  phone: string;
  cardName: string;
  cardNumber: number;
}

export interface Booking {
  id: string;
  firstName: string;
  lastName: string;
  message: string;
  phone: string;
  user: User;
  rental: Rental;
}
