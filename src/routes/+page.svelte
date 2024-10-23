<script>
  let { data } = $props();
</script>

<ul>
	{#each data.slugs as slug}
		<li><a href="/{slug}">{slug}</a></li>
	{/each}
</ul>
