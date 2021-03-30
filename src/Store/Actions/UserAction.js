const setloading = (loading) => {
  return { type: "SET_LOADING", payload: loading };
};

const setError = (error) => {
  return { type: "SET_ERROR", payload: error };
};

const setUser = (users) => {
  return { type: "SET_USERS", payload: users };
};

const setPages = (pages) => {
  return { type: "SET_PAGES", payload: pages };
};

const getUsers = () => {
  return (dispatch) => {
    dispatch(setloading(true));
    fetch("https://randomuser.me/api/?results=28")
      .then((res) => res.json())
      .then((res) => {
        dispatch(setUser(res.results));
      })
      .catch((err) => {
        dispatch(setError(err));
      })
      .finally(() => {
        dispatch(setloading(false));
      });
  };
};

export default {
  setloading,
  setError,
  setUser,
  setPages,
  getUsers,
};
