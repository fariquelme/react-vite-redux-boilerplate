import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Example {
  id: number;
  name: string;
}

type ExampleState = {
  examples: Example[];
}

const initialState: ExampleState = {
  examples: [],
};

const ExampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ name: string }>) => {
      state.examples.push({
        id: state.examples.length,
        name: action.payload.name,
      });
    },
  },
  //extraReducers: (builder) => {
  //  builder.addCase(fetchExample.fulfilled, (state, action) => {
  //    state.examples = action.payload;
  //  });

  //  builder.addCase(saveExample.fulfilled, (state, action) => {
  //    state.examples.push(action.payload);
  //  });
  //},
});

export default ExampleSlice.reducer;
export const actions = ExampleSlice.actions;
