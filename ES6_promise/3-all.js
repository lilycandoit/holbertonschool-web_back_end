import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
   try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}
