<template>
<div id="teams">
	<h2 class="subtitle is-3">Команды</h2>
	<div class="accordions">
		<dl v-for="row in rows" :key="row.id" class="has-background-warning-light">
			<dt v-on:click="row.open = !row.open">{{ row.term }}</dt>
			<dd v-if="row.open">{{ row.details }}</dd>
		</dl>
	</div>
</div>
</template>
<script>

export default {
    name: "Teams",
   data() {
    return {
		rows: {
			q1: {
				term: 'Term 1',
				details: 'Some text here...',
				open: false
			},
			q2: {
				term: 'Term 2',
				details: 'Some text here...',
				open: false
			},
			q3: {
				term: 'Term 3',
				details: 'Some text here...',
				open: false
			}
		}
	}}
};
</script>
<style lang="scss" scoped>
dl {
	margin: 0 0 1em;;
	
	dt {
		background-color: #fffaeb;
		padding: 1em;
		font-weight: bold;
		color: #ffd257;
	}
	
	dd {
		padding: 0;
		margin: 0;
		border: 1px solid #ffe08a;
		border-top: 0;
		padding: 1em;
	}
}



#teams {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}


.accordions {
	width: 87%;
}
</style>