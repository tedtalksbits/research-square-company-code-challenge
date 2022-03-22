// get all approved articles
const FETCH_APPROVED = 'http://localhost:5099/api/articles';

export const getApproved = async () => {
  try {
    const res = await fetch(FETCH_APPROVED);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
