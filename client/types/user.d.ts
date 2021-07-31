interface IGeo {
  lat: string
  lng: string
}

interface IUserAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: IGeo
}

interface IUserCompany {
  name: string
  catchPhrase: string
  bs: string
}

type User = {
  id: number
  name: string
  username: string
  email: string
  address: IUserAddress
  phone: string
  website: string
  company: string
}
