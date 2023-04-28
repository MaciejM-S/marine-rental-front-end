export {}

export type FetchedUser = {
  fname: string,
  lname: string,
  email: string,
  avatar?:{data:Buffer},
  telephone?:string,
}