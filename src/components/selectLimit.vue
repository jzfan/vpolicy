<template>
	<div>
		<a class="button" @click='$emit("getCount", 50)'>50期</a>
		<a class="button" @click='$emit("getCount", 100)'>100期</a>
		<a class="button" @click='$emit("getCount", 200)'>200期</a>
	</div>
</template>