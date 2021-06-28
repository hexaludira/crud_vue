<template>
	<div class="container mt-5">
		<div class="row">
			<div class="col-md-12">
				<div class="card border-0 rounded shadow">
					<div class="card-body">
						<h4>EDIT POST</h4>
						<hr>

						<form @submit.prevent="update">
							<div class="form-group">
								<label for="title" class="font-weight-bold">TITLE</label>
								<input type="text" class="form-control" v-model="artikel.title" placeholder="Masukkan Judul Artikel">
								<!-- Validation -->
								<div v-if="validation.title" class="mt-2 alert alert-danger">
									{{ validation.title[0]}}
								</div>
							</div>
							
							<div class="form-group">
								<label for="content" class="font-weight-bold">CONTENT</label>
								<textarea class="form-control" rows="4" v-model="artikel.content" placeholder="Masukkan Isi Artikel"></textarea>
								<!-- Validation -->
								<div v-if="validation.content" class="mt-2 alert alert-danger">
									{{ validation.content[0] }}
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
	import { reactive, ref, onMounted} from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import axios from 'axios'

	export default {
		
		setup() {
			//state artikel
			const artikel = reactive ({
				title : '',
				content : ''
			})

			//state validation
			const validation = ref([])

			//vue router
			const router = useRouter()

			//vue router
			const route = useRoute()

			//mounted
			onMounted(() => {
				//get API from laravel backend
				axios.get('http://10.10.41.246/laravel/public/api/articles/${route.params.id}').then(
					response => {
						//assign state
					}
				)
			})
		}

	}
</script>