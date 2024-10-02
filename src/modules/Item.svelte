<script lang="ts">
  import type { Item } from "$lib";
  import LazyImage from "./LazyImage.svelte";

  export let productData: Item;
</script>

<div
  class="variant-filled-surface overflow-hidden m-4 rounded-md flex lg:block hover:scale-105 transition-transform duration-300 shadow-md"
>
  <LazyImage
    Class="aspect-square w-24 sm:w-1/2 sm:h-full lg:h-2/3 lg:w-full"
    src={productData.picture}
    alt="thumbnail"
  />

  <div
    class="p-2 variant-filled-surface w-full h-full hover:lg:-translate-y-6 transition-transform"
  >
    <h1 class="font-semibold text-2xl sm:text-md md:text-xl">
      {productData.name}
    </h1>

    <p class="text-lg">
      {productData.price}₺
    </p>
  </div>
</div>
