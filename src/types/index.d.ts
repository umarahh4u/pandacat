// TYPES

interface Id {
  id: string;
}

type AdminProfile = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

type Services = {
  id: number;
  service: string;
  area: string;
};

type INav = {
  id: string;
  name: string;
  path: string;
  type: string;
};

