import { fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchSinToken("auth/login", { email, password }, "POST");
    const body = await res.json();

    if (body) localStorage.setItem("token", body.token);
    dispatch(checkAuth());

    console.log(body);
  };
};

export const startRegister = ({
  name,
  email,
  address,
  phone,
  password,
  social,
}) => {
  return async () => {
    console.log({ name, email, address, phone, password, social });
    const res = await fetchSinToken(
      "auth/register",
      { name, email, address, phone, password, social },
      "POST"
    );
    const body = await res.json();
    console.log(res);

    if (body) localStorage.setItem("token", body.token);

    console.log(body);
  };
};

export const checkAuth = () => ({
  type: types.authIsAuth,
  payload: {
    token: localStorage.getItem("token"),
  },
});

const login = (user) => ({
  type: types.authLogin,
});
