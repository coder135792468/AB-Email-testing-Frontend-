import { createSlice } from "@reduxjs/toolkit";

const template: any = {
  templates: [
    // {
    //   _id: "6641be0ba13621409d0f5e0e",
    //   views: 134,
    //   createdAt: "2024-05-13T07:15:08.996Z",
    //   subject: "Something better going up",
    //   description:
    //     "Hi, How are you. I want to inform that new features are coming up on our webiste be ready for that.",
    // },
  ],
};

const templateSlice = createSlice({
  name: "template",
  initialState: template,
  reducers: {
    setTemplate: (state, action) => {
      state.templates = action.payload;
    },
    deleteTemplate: (state, action) => {
      state.templates = state.templates.filter(
        (state: any) => state._id !== action.payload
      );

      return state;
    },
    addTemplate: (state, action) => {
      state.templates = [
        ...state.templates,
        {
          ...action.payload,
          views: Math.floor(Math.random() * 100),
          _id: Date.now().toString(),
        },
      ];
      return state;
    },
  },
});

export const { setTemplate, deleteTemplate, addTemplate } =
  templateSlice.actions;
export { templateSlice };
