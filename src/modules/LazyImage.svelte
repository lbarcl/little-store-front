<script lang="ts">
  import { onMount, onDestroy } from "svelte";

  export let src: string;
  export let alt: string = "";
  export let Class: string = "";

  let observer: IntersectionObserver | undefined;
  let imageElement: HTMLImageElement | null = null;
  let imageSrc: string | null = null; // This holds the image src for lazy loading.

  // Function to load the image
  function loadImage() {
    if (imageElement && !imageSrc) {
      imageSrc = src; // Assign the actual src for the image to start loading
    }
  }

  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(); // Load image when it enters the viewport
          observer?.unobserve(entry.target); // Stop observing once the image is loading
        }
      });
    });

    if (imageElement) {
      observer.observe(imageElement); // Start observing the image element
    }

    return () => {
      observer?.disconnect(); // Cleanup observer when component is destroyed
    };
  });

  // Watch for src changes and reset the image
  $: if (src) {
    // Only reset imageSrc if the src has actually changed
    if (imageSrc !== src) {
      imageSrc = null; // Clear the imageSrc to ensure lazy loading triggers again
      if (imageElement) {
        observer?.observe(imageElement); // Re-observe the image on src change
      }
    }
  }
</script>

<img bind:this={imageElement} class={Class} {alt} src={imageSrc} />
