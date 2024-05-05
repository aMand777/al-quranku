import app from './init';
import {
  collection,
  getDoc,
  getDocs,
  doc,
  getFirestore,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import bcrypt from 'bcrypt';

const firestore = getFirestore(app);

export async function getBookmarks(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function getBookmarksById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function register(data: { username: string; email: string; password: string }) {
  const q = query(collection(firestore, 'users'), where('email', '==', data.email));
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (users.length > 0) {
    return { status: 'failed', statusCode: 409, message: 'Email already exist' };
  } else {
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, 'users'), data);
      return { status: 'success', statusCode: 201, message: 'Register success' };
    } catch (error) {
      return { status: 'error', statusCode: 500, message: 'Internal Server Error' };
    }
  }
}

export async function loginWithCredentials(data: { email: string }) {
  const q = query(collection(firestore, 'users'), where('email', '==', data.email));
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (user.length > 0) {
    return user[0];
  } else {
    return null;
  }
}

export async function loginWithGoogle(data: {
  username: string;
  email: string;
  picture: string;
  type: string;
}) {
  const q = query(collection(firestore, 'users'), where('email', '==', data.email));
  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (user.length > 0) {
    await updateDoc(doc(firestore, 'users', user[0].id), data);
    const userUpdate = await getDoc(doc(firestore, 'users', user[0].id));
    return { id: user[0].id, data: userUpdate.data() };
  } else {
    const result = await addDoc(collection(firestore, 'users'), data);
    const user = await getDoc(doc(firestore, 'users', result.id));
    return { id: result.id, data: user.data() };
  }
}

export async function addToBookmarks(data: { owner: string; surah: string; ayat: string }) {
  const surahCheck = query(
    collection(firestore, 'bookmarks'),
    where('owner', '==', data.owner),
    where('surah', '==', data.surah),
    where('ayat', '==', data.ayat),
  );
  const snapshot = await getDocs(surahCheck);
  const bookmarks = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (bookmarks.length > 0) {
    return { status: 'failed', statusCode: 200, message: 'Surah and ayat already exist' };
  } else {
    try {
      await addDoc(collection(firestore, 'bookmarks'), data);
      return { status: 'success', statusCode: 201, message: 'bookmark success' };
    } catch (error) {
      return { status: 'failed', statusCode: 400, message: 'bookmark failed' };
    }
  }
}

export async function deleteBookmark(id: string) {
  const snapshot = await getDoc(doc(firestore, 'bookmarks', id));
  const data = snapshot.data();
  if (data) {
    try {
      await deleteDoc(doc(firestore, 'bookmarks', id));
      return { statusText: 'success', statusCode: 200, message: 'deleted success' };
    } catch (error) {
      return { statusText: 'failed', statusCode: 400, message: 'deleted failed' };
    }
  } else {
    return { statusText: 'failed', statusCode: 404, message: 'data not found' };
  }
}
