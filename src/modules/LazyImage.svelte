<script lang="ts">
  import { onMount } from "svelte";

  export let src: string;
  export let alt: string = "";
  export let Class: string = "";

  let observer: IntersectionObserver | undefined;
  let imageElement: HTMLImageElement | null = null;

  function loadImage() {
    if (imageElement) {
      imageElement.src = src;
    }
  }

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer?.unobserve(entry.target);
        }
      });
    });

    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => {
      observer?.disconnect();
    };
  });
</script>

<img bind:this={imageElement} class={Class} {alt} loading="lazy" />
