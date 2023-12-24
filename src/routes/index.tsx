import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MyParentComp } from "~/components/MyComp/my-comp";

export default component$(() => {
  return (
    <>
      <p>Signal being passed:</p>
      <MyParentComp />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
