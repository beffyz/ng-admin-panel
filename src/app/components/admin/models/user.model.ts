export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: UserAddress;
  company: UserCompany;
}

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: UserAddressGeo;
}

interface UserAddressGeo {
  lat: string;
  lng: string;
}

interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
