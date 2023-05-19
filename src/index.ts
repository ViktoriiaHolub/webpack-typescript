import { formData } from "./forms";

const form = document.querySelector("form");

form?.addEventListener("submit", (e) => {
  e.preventDefault(); // page won't reload as a default behave
  const data = formData(form);
  console.log(data);
});
