export class User {
    name: string;
    username:string;
    password:string;
    email:string;
    phoneNumber:string;
    address: string;
    postalCode: string;
    favouriteEvents: string;
    favouriteGroups: string;
    joinedGroups: string;
    birthDate:Date;
    interests: string;
    //New Id to track which user is signed in easier... add to api 
    id: number;
    token: User;
}