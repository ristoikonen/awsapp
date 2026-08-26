export interface User {
  userIdentifiers: string;
  emailAddress: string;
  phoneNumber: string;
  address: Address;
  timeStamp: string;
  mobileId: string;
}

export interface Address {
  givenname: string;
  familyName: string;
  regionCode: string;
  postalCode: string;
  addressLine: string;
  city: string;
  administrativeArea: string;
}

export type SampleUser = User;

export const address1 : Address = {
  givenname:"asdaswd" ,
  familyName: "string",
  regionCode: "string",
  postalCode: "string",
  addressLine: "string",
  city: "string",
  administrativeArea: "string",
};

export type UserGroup = 'player1';// | 'player2' | 'player3';

export const userGroup1: Record<UserGroup,User> = { 
  player1:
  {
    userIdentifiers:"ABC",
    emailAddress:"asdji@yahoo.com",
    phoneNumber:"asdji@yahoo.com"
    ,address:address1
    ,timeStamp: "1"
    ,mobileId:"041"
  }
};

export interface UsersProps {
  users: User[];
  onEdit: (userIdentifiers: string) => void;
}