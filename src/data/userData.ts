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
  familyName: "grt",
  regionCode: "2",
  postalCode: "2912",
  addressLine: "8 Hallon Street",
  city: "CBra",
  administrativeArea: "3",
};
export const address2 : Address = {
  givenname:"Mark" ,
  familyName: "Smith",
  regionCode: "2",
  postalCode: "2911",
  addressLine: "3 B Eleure Building",
  city: "CBra",
  administrativeArea: "2",
};

export type UserGroup = 'player1' | 'player2' | 'player3';

export const userGroup1: Record<UserGroup,User> = { 
  player1:
  {
    userIdentifiers:"ABC",
    emailAddress:"asdji@yahoo.com",
    phoneNumber:"asdji@yahoo.com"
    ,address:address1
    ,timeStamp: "14:38"
    ,mobileId:"041"
  },
  player2:
  {
    userIdentifiers:"GT",
    emailAddress:"g@nh.com",
    phoneNumber:"g@nh.com"
    ,address:address2
    ,timeStamp: "11:50"
    ,mobileId:"040"
  },
  player3:
  {
    userIdentifiers:"XX",
    emailAddress:"u1@gmai.com",
    phoneNumber:"u1@gmai.com"
    ,address:address1
    ,timeStamp: "18:30"
    ,mobileId:"041"
  }
};

export interface UsersProps {
  users: User[];
  onEdit: (userIdentifiers: string) => void;
}