<script>
  import Pagination from "./Pagination.svelte";

  function navigatePage() {}
</script>

<Pagination let:pageNum>
  <button slot="prev">Prev</button>

  <a on:click|preventDefault={navigatePage} href="#{pageNum}">
    {pageNum}
  </a>

  <button slot="next">Next</button>
</Pagination>
