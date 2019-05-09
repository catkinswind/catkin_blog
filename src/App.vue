<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</div>

</template>

<script>
export default {

};
</script>
<style lang="css">
html,body{
	width: 100%;height: 100%;overflow-x: hidden;
	font-family:  'Ponppins','Source Sans Pro', 'Lucida Grande', sans-serif;
}
#app{
	width: 100%;height: 100%;position: relative;overflow-x: hidden;
}
</style>
