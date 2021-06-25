<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-md-12">
				<div class="card border-0 rounded shadow">
					<div class="card-body">
						<h4>DATA ARTICLE</h4>
						<hr>
						<router-link :to="{name: 'Articles.create'}" class="btn btn-md btn-success">TAMBAH ARTICLE</router-link>

						<table class="table table-striped table-bordered mt-4">
							<thead class="thead-dark">
								<tr>
									<th scope="col">TITLE</th>
									<th scope="col">CONTENT</th>
									<th scope="col">OPTIONS</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="(article, index) in Articles" :key="index">
									<td>{{ article.title}}</td>
									<td>{{ article.content}}</td>
									<td class="text-center">
										<router-link :to="{name: 'Articles.edit', params: {id: Articles.id}}" class="btn btn-sm btn-primary mr-1">EDIT</router-link>
										<button class="btn btn-sm btn-danger ml-1">DELETE</button>
									</td>
								</tr>
							</tbody>
						</table>
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import { onMounted, ref } from 'vue'

	export default {
		setup() {
			//reactive state
			let articles = ref([])

			//mounted
			onMounted(() => {
				//get API from Laravel Backend
				axios.get('http://laravel.test/api/article')
				.then(response => {
					//assign state posts with response data
					articles.value = response.data.data
				}).catch(error => {
					console.log(error.response.data)
				})
			})

			//return
			return {
				articles
			}
		}
	}
</script>

<style type="text/css">
	body {
		background: lightgray;
	}
</style>