const url = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  try {
    const response = await fetch(`${url}/users`);

    return response;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export const getUser = async (id: string) => {
  try {
    const response = await fetch(`${url}/users/${id}`);

    return response;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export const getAlbums = async (id?: string) => {
  try {
    const response = await fetch(`${url}/users/${id}/albums`);

    return response;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export const getPhotos = async (id: string, limit = 15, page = 1) => {
  try {
    const response = await fetch(`${url}/albums/${id}/photos?_limit=${limit}&_page=${page}`, {});

    return response;
  } catch (e) {
    console.log((e as Error).message);
  }
};
