<script lang="ts">
	let { children } = $props();
</script>

<div class="animate-bg rounded-lg bg-radial from-[#0E1B13] from-80% to-transparent p-1">
	<div class="flex rounded-md bg-gradient-to-t from-[#1C4A2C] to-[#182D1F] p-[2px]">
		<div class="bg-primary rounded-sm p-2">
			{@render children()}
		</div>
	</div>
</div>
