<template>
    <!-- Modals -->
    <div class="row">
        <div class="col-md-12">
            <!-- <base-button block type="default" class=" mb-3" @click="modals.modal = true">
                Generar Codigo
            </base-button> -->
            <button type="button" rel="tooltip" class="btn btn-info btn-icon btn-sm m-2" data-original-title="" title="" @click="modals.modal = true">
                <i class="ni ni-circle-08 pt-1"></i>
            </button>

            <modal :show.sync="modals.modal" body-classes="p-0" modal-classes="modal-dialog-centered modal-sm">
                <card type="secondary" shadow
                      header-classes="bg-white pb-5"
                      body-classes="px-lg-5 py-lg-5"
                      class="border-0">
                    <button type="button" class="close" @click="closeModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <template>
                        <div class="text-muted text-center mb-3">
                            <small>Feature_id {{ id }}</small>
                        </div>
                    </template>
                    <template>
                        <div class="text-center text-muted mb-4">
                            <small>Desea insertar comentario? Ahora puede incluir uno o mas comentarios</small>
                        </div>
                        <div class="alert alert-success" role="alert" v-if="send === true">
                                {{messagesTrue}} <i class='bx bxs-wink-smile'></i>.
                            </div>
                            <div class="alert alert-danger" role="alert" v-if="Notsend === true">
                                {{messagesFalse}} 
                                <i class='bx bxs-wink-smile'></i>.
                            </div>
                        <button type="button" rel="tooltip" class="btn btn-info btn-icon btn-sm" data-original-title="" title="Agregar input" @click="aumentarInput">
                            <i class="ni ni-fat-add pt-1"></i>
                        </button>
                        <button type="button" rel="tooltip" class="btn btn-default btn-icon btn-sm " data-original-title="" title="Eliminar ultimo input" @click="disminuirInput">
                            <i class="ni ni-fat-delete pt-1"></i>
                        </button>
                        <form role="form"  >
                            <div v-for="item in numInput" :key="item">
                                <div class="col-12">
                                    <div class="form-group">
                                        <div class="input-group input-group-alternative mb-4">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"></span>
                                        </div>
                                        <input class="form-control form-control-alternative" :placeholder="item" type="text" :id="item">
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                            
                            <button @click="Confirm(id)" class="btn btn-primary btn-lg btn-block btnG">Continuar</button>
                        </form>
                    </template>
                </card>
            </modal>
        </div>
    </div>
</template>
<script>
    import Modal from "@/components/Modal.vue";
    import FeatureServices from "../../../services/featureService"
    const featureService = new FeatureServices
    
    export default {
        props: {
          id:String  
        },
        components: {
            Modal
        },
        data() {
            return {
            modals: {
                modal: false,
            },
                messagesTrue:"",
                messagesFalse:"",
                send:false,
                Notsend:false,
                activ:false,

                numInput: 1,
                inputValues: [],
            };
        },
    created() {   
        },
    methods: {  
        closeModal() {
            this.send = false
            this.inputValues = []
            this.numInput = 0
            this.modals.modal= false
        },
        aumentarInput() {
            this.numInput = this.numInput +1
        },   
        disminuirInput() {
            this.numInput = this.numInput -1
        },   

        Confirm(id) {
            console.log("hola", id)

            for (var i = 1; i <= this.numInput; i++) {
                const inputElement = document.getElementById(i);
                const valorInput = inputElement.value;                
                this.inputValues.push(valorInput)
            }

            console.log('Valor del input:', this.inputValues);
            const data = {
                comment: this.inputValues
            }
            featureService.putFeature(id, data).then((res) => {
                console.log(res)
                try {
                    this.send = true
                    this.messagesTrue = "comentarios guardados con exito"    
                    setTimeout(() => {
                        this.closeModal() 
                    }, 2000);          
                } catch (error) {
                    this.Notsend = true
                    this.messagesFalse = error
                    setTimeout(function(){this.Notsend = false}, 3000); 
                }
            })

        },
    }
};
</script>
<style>
</style>
