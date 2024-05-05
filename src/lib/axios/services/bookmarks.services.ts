import { instanceApiRouteHandler } from '@/lib/axios/axios';

interface Bookmark {
  owner: string | null | undefined;
  surah: string;
  number: string;
  ayat: string;
}

export const postBookmarks = async (bookmark: Bookmark) => {
  try {
    const { data } = await instanceApiRouteHandler.post('/bookmarks', bookmark);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBookmarks = async () => {
  try {
    const { data } = await instanceApiRouteHandler.get('/bookmarks');
    return data;
  } catch (error) {
    throw error;
  }
};

export const getBookmarksById = async (id: string) => {
  try {
    const { data } = await instanceApiRouteHandler.get(`/bookmarks/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteBookmark = async (id: string | undefined) => {
  try {
    const { data } = await instanceApiRouteHandler.delete(`/bookmarks/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};
