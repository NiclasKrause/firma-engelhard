export interface TeamMember {
  name: string;
  position?: string;
  phone: string;
  phoneHref: string;
  email: string;
}

export interface Department {
  name: string;
  members: TeamMember[];
}

export const departments: Department[] = [
  {
    name: "Geschäftsführung",
    members: [
      {
        name: "Marco Engelhard",
        position: "Geschäftsführer",
        phone: "0157 80561663",
        phoneHref: "+4915780561663",
        email: "fa.engelhard@web.de",
      },
    ],
  },
];
