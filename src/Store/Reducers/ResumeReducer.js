import { createSlice } from "@reduxjs/toolkit";

const initstate = {
  name: "",
  email: "",
  address: "",
  phone: "",
  educationList: [],
  experienceSection: [],
  skillset: [],
};
export const resumeslice = createSlice({
  name: "resumeForm",
  initialState: initstate,
  reducers: {
    setPersonalInfo(state, action) {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
    setEducationalInfo(state, action) {
      state.educationList = action.payload;
    },
    setExperienceInfo(state, action) {
      state.experienceSection = action.payload;
      console.log(initstate);
    },
    setSkillSet(state, action) {
      state.skillset = action.payload;
    },
  },
});

export const {
  setPersonalInfo,
  setEducationalInfo,
  setExperienceInfo,
  setSkillSet,
} = resumeslice.actions;
export default resumeslice.reducer;
