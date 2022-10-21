<script>
  export let author;
</script>

{#if author}
  Author: {author}
{/if}

<slot><!-- optional fallback --></slot>
