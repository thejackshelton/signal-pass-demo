import { component$, useSignal } from "@builder.io/qwik";

export const MyParentComp = component$(() => {
  const mySig = useSignal<string>("");

  return (
    <div>
      <MyChildComp mySig={mySig} />
    </div>
  );
});

export const MyChildComp = component$(({ mySig }) => {
  return (
    <>
      <input bind:value={mySig} />
      <p>{mySig.value}</p>
    </>
  );
});
