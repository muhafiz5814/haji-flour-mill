import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:3030/api/v1";

export const servicesApi = createApi({
  reducerPath: "hfmApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + "/services",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");
      return headers;
    }
  }),
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => "all",
      providesTags: ["Services"]
    })
  })
});

export const { useGetAllServicesQuery } = servicesApi;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + "/users",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");

      const token = localStorage.getItem("hajiFlourMillJWTToken");

      if (token) {
        headers.set("Authorization", token);
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({

    registerUser: builder.mutation({
      query: (userdetails) => ({
        url: "register",
        method: "POST",
        body: userdetails
      })
    }),

    loginUser: builder.mutation({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials
      })
    }),

    initUser: builder.mutation({
      query: () => ({
        url: "verify",
        method: "POST",
      })
    }),

    getUserById: builder.query({
      query: (id) => `user/${id}`,
      providesTags: ["User"]
    })
    
    // getAllUsers: builder.query({
    //   query: () => "all",
    //   providesTags: ["Users"]
    // })

  })
})

export const { useRegisterUserMutation, useLoginUserMutation, useInitUserMutation, useGetUserByIdQuery } = userApi;

export const entryApi = createApi({
  reducerPath: "entryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + "/entries",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Accept", "application/json");

      const token = localStorage.getItem("hajiFlourMillJWTToken");

      if (token) {
        headers.set("Authorization", token);
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({

    addNewEntry: builder.mutation({
      query: (entryDetails) => ({
        url: "new",
        method: "POST",
        body: entryDetails
      }),
      invalidatesTags: ["UserEntries", "AllEntries"]
    }),

    getAllEntries: builder.query({
      query: () => "all",
      providesTags: ["AllEntries"]
    }),

    getUserEntries: builder.query({
      query: (username) => `user/${username}`,
      providesTags: ["UserEntries"]
    })
  })
});

export const { useAddNewEntryMutation, useGetUserEntriesQuery, useGetAllEntriesQuery } = entryApi;