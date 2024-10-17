import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "./tasksTypes";

interface TasksState {
  tasks: Task[];
  status: string;
}

const initialState: TasksState = {
  tasks: [],
  status: "All",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setStatusFilter(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
