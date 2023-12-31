import { tagTypes } from "../teg-types";
import { baseApi } from "./baseApi";

const AUTH_URL = "/auth";
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/signin`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserLoginMutation } = authApi;
