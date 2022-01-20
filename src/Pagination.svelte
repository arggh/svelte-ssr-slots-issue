<script>
  const pages = [0,1,2];
</script>


<slot name="prev"></slot>
{#each pages as pageNum}
  <slot {pageNum}></slot>
{/each}
<slot name="next"></slot>

<style>

</style>