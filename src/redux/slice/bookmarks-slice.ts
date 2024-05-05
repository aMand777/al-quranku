import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  postBookmarks,
  getBookmarks,
  deleteBookmark,
} from '@/lib/axios/services/bookmarks.services';
import toast from 'react-hot-toast';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

interface PostBookmark {
  owner: string | null | undefined;
  surah: string;
  number: string;
  ayat: string;
}

interface Bookmark {
  id: string;
  owner: string;
  surah: string;
  number: string;
  ayat: string;
}

interface InitialBookmarks {
  data: Bookmark[];
}

const initialState: InitialBookmarks = {
  data: [
    {
      id: '',
      owner: '',
      surah: '',
      number: '',
      ayat: '',
    },
  ],
};

const bookmarksSlice = createSlice({
  name: 'bookmarks',
  initialState,
  reducers: {
    setBookmarks(state, action: PayloadAction<Bookmark[]>) {
      state.data = action.payload;
    },
  },
});

export const { setBookmarks } = bookmarksSlice.actions;

export const postBookmarksAsync = createAsyncThunk(
  'postBookmarks',
  async (data: PostBookmark, { dispatch }) => {
    toast.loading('Waiting...', { duration: 3000 });
    try {
      const response = await postBookmarks(data);
      if (response.status === 201) {
        await dispatch(getBookmarksAsync());
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      return error;
    }
  },
);

export const deleteBookmarksAsync = createAsyncThunk(
  'deleteBookmarks',
  async (id: string | undefined, { dispatch }) => {
    toast.loading('Waiting...', { duration: 3000 });
    try {
      const response = await deleteBookmark(id);
      if (response.status === 200) {
        await dispatch(getBookmarksAsync());
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      return error;
    }
  },
);

export const getBookmarksAsync = createAsyncThunk('getBookmarks', async (_, { dispatch }) => {
  try {
    const response = await getBookmarks();
    if (response.status === 200) {
      dispatch(setBookmarks(response.data));
    }
  } catch (error) {
    return error;
  }
});

export default bookmarksSlice.reducer;
