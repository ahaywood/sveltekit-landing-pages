<script lang="ts">
  export let data;
  const { faqs } = data;
</script>

<h1>FAQs</h1>

{#each faqs as faq}
  <h2>{faq.question}</h2>
  {@html faq.answer}
{/each}
