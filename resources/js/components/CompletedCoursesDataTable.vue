<template>
	<span>{{ completedCount }}</span>
</template>
<script>
export default {
	props: ["course"],
	computed: {
		completedCount() {
			var total = 0,
				length = course.courseprogress.length;
			for (var i = 0; i < length; i++) {
				if (courseprogress[i].state_id == 2) {
					total++;
				}
			}
			return total;
		}
	}
};
</script>
