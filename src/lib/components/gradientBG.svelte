<script lang="ts">
	let { children } = $props();
</script>

<div class="animate-bg rounded-xl bg-[#172F21] p-[2px]">
	<div class="flex rounded-xl bg-gradient-to-t from-[#38FF7E] from-10% to-[#244A32] p-[1px]">
		<div class="bg-primary rounded-xl p-2">
			{@render children()}
		</div>
	</div>
</div>
