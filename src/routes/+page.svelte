<script lang="ts">
  import { onMount } from "svelte";
  import Item from "../modules/Item.svelte";

  import type { PageData } from "./$types";
  import { fetchProducts } from "$lib";

  export let data: PageData;
  let page = 2;
  let loading = false;
  let hasMore: boolean = true;
  const limit = 20;
  let query: string = "";

  let debounceTimeout: NodeJS.Timeout | null = null;




  // Load more items for infinite scroll
  async function loadMoreItems() {
    if (loading || !hasMore) return;
    loading = true;

    const { data: productsData, error } = await fetchProducts(
      query,
      (page - 1) * limit
    );
    if (error || !productsData?.length) {
      hasMore = false;
    } else {
      // Append the new products to the existing ones
      data = {
        ...data,
        items: [...data.items, ...productsData],
      };
      page += 1;
    }
    loading = false;
  }

  // Perform search
  async function search() {
    if (query.length < 3 && query.length > 0) return; // Ignore very short queries

    const { data: productsData, error } = await fetchProducts(
      20,
      query,
    );
    if (!error && productsData) {
      // Replace existing items with the search result or load all items if query is empty
      data = { items: productsData };
      page = 2; // Reset pagination
      hasMore = true;
    }
  }

  // Debounced input for search
  function handleSearchInput() {
    if (debounceTimeout) clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      if (query.length === 0) {
        // If query is empty, reload the default product list
        search(); // Fetch all items
      } else {
        hasMore = true;
        search(); // Perform search
      }
    }, 300); // Debounce of 300ms
  }

  // Check if the user is near the bottom of the page
  const handleScroll = () => {
    const scrollableHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Trigger loadMoreItems if the user has scrolled within 300px of the bottom
    if (scrollableHeight - (scrollTop + viewportHeight) < 300 && !loading) {
      loadMoreItems();
    }
  };

  onMount(() => {
    // Attach scroll event listener with requestAnimationFrame for performance
    const scrollListener = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", scrollListener);

    // Clean up the event listener when the component is destroyed
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  });
</script>

<title>TSKEV - Kantin</title>

<!-- Search Bar -->
<div
  class="flex px-4 py-3 border-b border-[#333] overflow-hidden max-w-md mx-auto font-[sans-serif]"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192.904 192.904"
    width="18px"
    class="mr-3"
    fill="white"
  >
    <path
      d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"
    >
    </path>
  </svg>
  <input
    type="text"
    placeholder="Ürün..."
    class="variant-filled-surface rounded-md w-full focus:outline-none border-none outline-none text-sm"
    bind:value={query}
    on:input={handleSearchInput}
  />
</div>

<!-- Product Grid -->
<div class="sm:grid sm:grid-cols-2 lg:grid-cols-5 lg:px-4">
  {#each data.items as item}
    <Item productData={item} />
  {/each}

  {#if loading}
    <div>Loading more items...</div>
  {/if}
</div>
