<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Form from "$lib/components/Form.svelte";
  import { anonymousIdentity } from "$lib/utils";
  import { get } from "$lib/api";
  import { onMount, tick } from "svelte";
  import { set } from "$lib/api";
  import init, { add } from "../../../declarations/proxy";

  let num1 = 0;
  let num2 = 0;
  let result = 0;
  let isInitialized = false;

  // Define calculateSum function
  async function calculateSum() {
    if (!isInitialized) {
      console.log("WASM not initialized yet");
      return;
    }
    result = add(num1, num2);
    console.log("Sum calculated:", result);
  }

  onMount(async () => {
    // Initialize WASM module
    await init({});
    isInitialized = true;
    let sum = add(4, 4);
    console.log(sum);
  });

  // Card principal
  const principal = anonymousIdentity();
  // Card string
  let string = "";

  onMount(async () => {
    string = await get();
  });
</script>

<Form {set} />
<Card {principal} {string} />

<div>
  <input type="number" bind:value={num1} placeholder="First number" />
  <input type="number" bind:value={num2} placeholder="Second number" />
  <button on:click={calculateSum}>Add Numbers</button>

  <p>Result: {result}</p>
</div>

<style>
  div {
    margin: 20px;
  }

  input {
    margin: 5px;
    padding: 5px;
    color: black;
    background-color: white;
  }

  button {
    margin: 10px;
    padding: 5px 10px;
  }
</style>
