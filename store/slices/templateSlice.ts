import { createSlice } from "@reduxjs/toolkit";

const state: any = {
  templates: [
    {
      views: 10,
      subject: "Marketing Research",
      id: "1",
      description: "This is email markething email. please open it",
    },
    {
      views: 40,
      subject: "Marketing Research",
      id: "2",
      description: "This is email markething email. please open it",
    },
    {
      views: 20,
      subject: "Marketing Research",
      id: "3",
      description: "This is email markething email. please open it",
    },
    {
      views: 50,
      subject: "Marketing Research",
      id: "4",
      description: "This is email markething email. please open it",
    },
  ],
};

const templateSlice = createSlice({
  name: "template",
  initialState: state,
  reducers: {
    deleteTemplate: (state, action) => {
      state.templates = state.templates.filter(
        (state: any) => state.id !== action.payload
      );

      return state;
    },
    addTemplate: (state, action) => {
      state.templates.push({
        ...action.payload,
        views: Math.floor(Math.random() * 100),
        id: Date.now().toString(),
      });
      return state;
    },
  },
});

export const { deleteTemplate, addTemplate } = templateSlice.actions;
export { templateSlice };
