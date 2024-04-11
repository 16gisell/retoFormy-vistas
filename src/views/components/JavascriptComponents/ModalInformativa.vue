<template>
    <!-- Modals -->
    <div class="row">
        <div class="col-md-12">

            <button type="button" rel="tooltip" class="btn btn-success btn-icon btn-sm" data-original-title="" title="" @click="modals.modal2 = true">
                <i class="ni ni-settings-gear-65 pt-1"></i>
            </button>

            <modal :show.sync="modals.modal2" body-classes="p-0" modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <button type="button" class="close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <template>
                        <div class="text-muted text-center mb-3">
                            <small> <strong>Feature_id {{ id }}</strong> </small>
                        </div>
                    </template>
                    <template>
                        <div class="text-center text-muted mb-4">
                            <small>Informacion complementaria</small>
                        </div>
                        <div class="text-center text-muted mb-3">
                            <small> <strong>URL: {{ url }}</strong></small>                            
                        </div>
                        <div class="text-center text-muted col-12">
                            <table class="col-12">
                                <thead>
                                    <th>comment</th>
                                </thead>
                                <tbody>
                                    <tr v-for="item in comments" :key="item">
                                        <td>{{ item }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </template>
                </card>
            </modal>
        </div>
    </div>
</template>
<script>
    import Modal from "@/components/Modal.vue";
    
    export default {
        props: {
          id:String,  
          url:String,
          comments: Array
        },
        components: {
            Modal
        },
        data() {
            return {
                modals: {
                    modal2: false,
                },
            };
        },
    created() {   
        },
    methods: {  
        closeModal() {
            this.modals.modal2= false
        }, 

    }
};
</script>
<style>
</style>
