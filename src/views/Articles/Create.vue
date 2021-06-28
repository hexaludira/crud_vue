<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-md-12">
				<div class="card border-0 rounded shadow">
					<div class="card-body">
						<h4>TAMBAH ARTIKEL</h4>
						<hr>

						<form @submit.prevent="store">
							<div class="form-group">
								<label for="title" class="font-weight-bold">TITLE</label>
								<input type="text" class="form-control" v-model="artikel.title" placeholder="Masukkan judul artikel">
								<!-- validation -->
								<div v-if="validation.title" class="mt-2 alert alert-danger">
									{{ validation.title[0]}}
								</div>		
							</div>
							
							<div class="form-group">
								<label for="content" class="font-weight-bold">CONTENT</label>
								<textarea class="form-control" rows="4" v-model="artikel.content" placeholder="Masukkan Isi Artikel"></textarea>
								<!-- validation -->
								<div v-if="validation.content" class="mt-2 alert alert-danger">
									{{ validation.content[0]}}
								</div>
							</div>
							<button type="submit" class="btn btn-primary">SIMPAN</button>
						</form>
						
					</div>
				</div>
				
			</div>
			
		</div>
	</div>
</template>

<script type="text/javascript">
	import { reactive, ref } from 'vue'
	import { useRouter } from 'vue-router'
	import axios from 'axios'

	export default {

		setup() {
			//state artikel
			const artikel = reactive({
				title : '',
				content : ''
			})

			//state validation
			const validation = ref([])

			//vue router
			const router = useRouter()

			//method store
			function store(){
				let title = artikel.title
				let content = artikel.content

				axios.post('http://laravel.test/api/articles',{
					title : title,
					content : content
				}).then(() => {
					//redirect ke post index
					router.push({
						name: 'Articles.index'
					})
				}).catch(error => {
					//assign state validation with error
					validation.value = error.response.data
				})
			}

			//return
			return {
				artikel,
				validation,
				router,
				store
			}
		}
		
	}
</script>

<style type="text/css">
	body {
		background: lightgray;
	}
</style>