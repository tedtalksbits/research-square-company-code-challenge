// get all approved articles
import { API } from './contants';

export const getArticles = async () => {
  try {
    const res = await fetch(API);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// post new article
export const postArticle = async newArticle => {
  try {
    const res = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newArticle),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// put new article status
export const putArticleStatus = async (status, id) => {
  try {
    await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(status),
    });
  } catch (error) {
    console.log(error);
  }
};
