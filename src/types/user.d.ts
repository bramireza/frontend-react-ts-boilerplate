export interface User {
  _id: string;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDay: Date | null;
  nationality: string;
  gender: string;
  googleId: string;
  pictureUrl: string;
}
