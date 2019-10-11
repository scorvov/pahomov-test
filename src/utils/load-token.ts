export const loadToken = () => {
  try {
    const token = localStorage.getItem("jwt");
    if (token !== "86fasfgfsogHGad") return { isAuth: false };
    return { isAuth: true };
  } catch (e) {
    return { isAuth: false };
  }
};
