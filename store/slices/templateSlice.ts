import { createSlice } from "@reduxjs/toolkit";

const state: any = {
  templates: [],
};

const templateSlice = createSlice({
  name: "template",
  initialState: state,
  reducers: {},
});

export const {} = templateSlice.actions;
export { templateSlice };
