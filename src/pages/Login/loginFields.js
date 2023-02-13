import Input from "../../components/Input";

export const loginFields = [
  {
    component: Input,
    name: "email",
    type: "email",
    id: "email_address",
    "data-value": "",
    autoComplete: "email",
    placeholder: "email",
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
    name: "password",
    type: "password",
    id: "password",
    "data-value": "",
    autoComplete: "password",
    placeholder: "password",
    className: "rounded-b-md",
    validate: (value) => {
      if (!value) {
        return "Required . . .";
      }
      return "";
    },
  },
];

export const loginInitValues = loginFields.reduce(
  (p, c) => ({ ...p, [c.name]: c["data-value"] }),
  {}
);
