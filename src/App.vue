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

#app{
	width: 100%;height: 100%;position: relative;overflow-x: hidden;
}
</style>
