export interface Location {
  id: string;
  city: string;
  name: string;
  street: string;
  zip: string;
  place: string;
  phone: string;
  phoneHref: string;
  email: string;
  mapsQuery: string;
}

export const locations: Location[] = [
  {
    id: "rain",
    city: "Rain",
    name: "I. M. Engelhard UG (haftungsbeschränkt)",
    street: "Frankenstr. 7",
    zip: "86641",
    place: "Rain",
    phone: "0157 80561663",
    phoneHref: "+4915780561663",
    email: "fa.engelhard@web.de",
    mapsQuery: "Frankenstr. 7, 86641 Rain",
  },
];
