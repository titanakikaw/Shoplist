import Input from "../../components/Input";
export const changePassFields = [
  {
    component: Input,
    name: "old_password",
    type: "password",
    id: "old_password",
    "data-value": "",
    autoComplete: "old_password",
    placeholder: "Old Password",
    className: "rounded-t-md",
    validate: (value) => {
      if (!value) {
        return "Required . . .";
      }
      return "";
    },
  },
  {
    component: Input,
    name: "new_password",
    type: "password",
    id: "new_password",
    "data-value": "",
    autoComplete: "new_password",
    placeholder: "New Password",
    validate: (value) => {
      if (!value) {
        return "Required . . .";
      }
      return "";
    },
  },
  {
    component: Input,
    name: "confirm_password",
    type: "password",
    id: "confirm_password",
    "data-value": "",
    autoComplete: "confirm_password",
    placeholder: "Confirm Password",
    className: "rounded-b-md",
    validate: (value) => {
      if (!value) {
        return "Required . . .";
      }
      return "";
    },
  },
];

export const changePassInitValues = changePassFields.reduce(
  (p, c) => ({ ...p, [c.name]: c["data-value"] }),
  {}
);
