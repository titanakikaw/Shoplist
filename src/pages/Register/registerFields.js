import Input from "../../components/Input";
import Select from "../../components/Select";
import Checkbox from "../../components/Checkbox";

export const registerFields = [
  {
    component: Input,
    name: "name",
    id: "name",
    type: "name",
    "data-value": "",
    autoComplete: "name",
    placeholder: "Name",
    className: "rounded-t-md",
    validate: (value) => {
      if (!value) {
        return "Required...";
      }
      return "";
    },
  },
  {
    component: Input,
    name: "email",
    id: "email_address",
    type: "email",
    "data-value": "",
    autoComplete: "email_address",
    placeholder: "Email",
    validate: (value) => {
      if (!value) {
        return "Required...";
      }
      return "";
    },
  },
  {
    component: Input,
    name: "password",
    id: "new_password",
    type: "password",
    "data-value": "",
    autoComplete: "new_password",
    placeholder: "New Password",
    validate: (value) => {
      if (!value) {
        return "Required...";
      }
      return "";
    },
  },
  {
    component: Input,
    name: "confirmPassword",
    id: "confirmPassword",
    type: "password",
    "data-value": "",
    autoComplete: "confirmPassword",
    placeholder: "Confirm Password",
    validate: (value) => {
      if (!value) {
        return "Required...";
      }
      return "";
    },
  },
  {
    component: Select,
    name: "gender",
    id: "Gender",
    "data-value": "",
    placeholder: "Gender",
    className: "rounded-b-md",
    options: [
      {
        text: "Male",
        value: "Male",
      },
      {
        text: "Female",
        value: "Female",
      },
      {
        text: "Other",
        value: "Other",
      },
    ],
    validate: (value) => {
      if (!value) {
        return "Required...";
      }
      return "";
    },
  },
  {
    component: Checkbox,
    name: "hobbies",
    id: "hobbies",
    type: "checkbox",
    "data-value": [],
    autoComplete: "confirm_password",
    placeholder: "Confirm Password",
    hobbies: [
      {
        id: "golf",
        value: "golf",
      },
      {
        id: "basketball",
        value: "basketball",
      },
    ],
    validate: (value) => {
      if (!value) {
        return "Required...";
      }
      return "";
    },
  },
];

export const registerInitValues = registerFields.reduce(
  (p, c) => ({ ...p, [c.name]: c["data-value"] }),
  {}
);
