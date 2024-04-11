<template>
    <!-- Modals -->
    <div class="row">
        <div class="col-md-12">
            <base-button block type="default" class=" mb-3 btn btn-primary" @click="modals.modal3 = true" title="Ejecutar accion de tarea">
                Task
            </base-button>

            <modal :show.sync="modals.modal3" body-classes="p-0" modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                      <button type="button" class="close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <template>
                        <div class="text-muted text-center mb-3">
                            <small>Accion para ejecutar tarea</small>
                        </div>
                    </template>
                    <template>
                        <div class="text-center text-muted mb-1">
                            <small>Esta tarea generara carga de informacion</small>
                        </div>
                        <div class="text-center text-muted mb-4">
                            <small>Seguro de ejecutarla?</small>
                        </div>
                        <form role="form"  @submit.prevent="Confirm" >                            
                            <button class="btn btn-primary btn-lg btn-block btnG" v-if="!activ">Continuar</button>
                            <img src="../../../../public/img/icons/common/cargando.gif" alt="" class="imagen-gif" v-if="activ">
                            <div class="text-center text-muted mb-4" v-if="activ">
                                <small>Momentaneamente no esta corriendo la tarea desde el front</small>
                            </div>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
    </div>
</template>
<script>
    import Modal from "@/components/Modal.vue";
    
    export default {
        components: {
            Modal
        },
        data() {
            return {
            modals: {
                modal3: false,   
            },
                activ:false,

            };
        },
        created(){              
        },
    methods: {
        closeModal() {
            this.modals.modal3 = false
            this.activ = false
        }, 
        Confirm() {
            this.activ = true
            setTimeout(() => {
                this.closeModal() 
            }, 2000);  
        }
    }
    };
</script>
<style>
.imagen-gif{
    border-radius: 50px;
    width: 7vw;
}
</style>
