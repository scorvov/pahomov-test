import { FormValues } from "../types/form";

export class Api {
  data = {
    auth: {
      email: "admin@gmail.com",
      password: "admin123"
    },
    response: {
      resolve: {
        jwt: "86fasfgfsogHGad"
      },
      reject: "Login or password is not correct"
    }
  };
  authCheck = (authData: FormValues) => {
    const { auth, response } = this.data;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (JSON.stringify(auth) === JSON.stringify(authData)) {
          resolve(response.resolve);
        } else reject(new Error(response.reject));
      }, 1000);
    });
  };
}
