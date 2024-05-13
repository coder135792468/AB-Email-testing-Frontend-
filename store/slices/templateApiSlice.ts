import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { deleteTemplate } from "./templateSlice";

const generateQueryStr = (baseString: string, query: Object): string => {
  const queryString: string =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  return queryString;
};

export const templateApi = createApi({
  reducerPath: "template-api",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000/`,
  }),

  endpoints: (builder) => ({
    getAllTemplates: builder.query<any, Object>({
      // <Type of data the call will return, Type of parameter being passed to the query function>
      query: (queryParams) => {
        const queryStr = generateQueryStr("api/templates", queryParams);

        return { url: queryStr };
      },
    }),
    getCurrTemplate: builder.query<any, Object>({
      // <Type of data the call will return, Type of parameter being passed to the query function>
      query: (id) => {
        return { url: "api/templates/" + id };
      },
    }),
    addTemplate: builder.mutation({
      query: (body) => ({
        url: "api/mail",
        method: "POST",
        body,
      }),
    }),
    deleteTemplate: builder.mutation({
      query: (id) => ({
        url: "api/templates/" + id,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllTemplatesQuery,
  useGetCurrTemplateQuery,
  useAddTemplateMutation,
  useDeleteTemplateMutation,
} = templateApi;
