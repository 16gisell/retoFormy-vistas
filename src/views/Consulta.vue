<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div v-if="spiner" body-classes="p-0" modal-classes="modal-dialog-centered modal-sm" class="spase">
            <div class="loader"></div> 
        </div>
        <h1 class="display-3  text-white"></h1>
           
        <div class="mb-3 modelo_table">
            <div class="col-lg-12 text-center">
                <form>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <div class="input-group input-group-alternative mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"></span>
                                </div>
                                <input class="form-control form-control-alternative" placeholder="Filtar" type="text" v-model="filter">
                                <div class="input-group-prepend">
                                    <button  class="form-control form-control-alternative btn btn-primary" @click="buscar"><i class="ni ni-zoom-split-in"></i></button>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7">
                            
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <Modals></Modals>
                            </div>
                        </div>
                    </div>
                </form>   
                <table class="table table_data">
                    <thead class="head_table">
                        <tr>
                            <th class="text-center">#</th>
                            <th class="text-center">feature_id</th>
                            <th>Mag Type</th>
                            <th>Magnitude</th>
                            <th>Place</th>
                            <th>Time</th>
                            <th>Title</th>
                            <th>tsunami</th>
                            <th>Longitud</th>
                            <th>Latitud</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in table_data" :key="item.id">
                            <td class="text-center">{{ item.id }}</td>
                            <td class="text-center">{{ item.Attributes.external_id }}</td>
                            <td>{{ item.Attributes.mag_type }}</td>
                            <td>{{ item.Attributes.magnitude }}</td>
                            <td>{{ item.Attributes.place }}</td>
                            <td>{{ item.Attributes.time }}</td>
                            <td>{{ item.Attributes.title }}</td>
                            <td>{{ item.Attributes.tsunami}}</td>
                            <td>{{ item.Attributes.coordinates.longitud }}</td>
                            <td>{{ item.Attributes.coordinates.latitud }}</td>
                            <td class="td-actions text-right">
                                <ModalsComent :id="item.Attributes.external_id"></ModalsComent>
                                <ModalInformativa :id="item.Attributes.external_id" :url="item.links.external_url" :comments="item.comment"></ModalInformativa>
                            </td>
                        </tr>
                    </tbody>
                </table>   
                <div class="text-center" ><p  v-if="table_data.length==0">No se encontraron datos para la busqueda ({{ filter }})</p></div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item">
                        <a class="page-link" href="#"  @click="previus">
                            <i class="fa fa-angle-left"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">{{ page }}</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" @click="next">
                            <i class="fa fa-angle-right"></i>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                        <li class="page-item">
                            <select class="select_page" v-model="perPage" @change="listado">
                                <option value="5">5</option>
                                <option>10</option>
                                <option>15</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>                        
                        </li>
                    </ul>
                    <p class="pagination justify-content-end"> <strong>Total page:  </strong>  {{ totalPage }}</p>
                    
                </nav>        
            </div>               
        </div>
    </section>
    
</template>
<script>
    import Modals from "./components/JavascriptComponents/Modals.vue"
    import ModalsComent from "./components/JavascriptComponents/ModalsComent.vue"
    import ModalInformativa from "./components/JavascriptComponents/ModalInformativa.vue"
    import FeatureServices from "../services/featureService"
    const featureService = new FeatureServices

    export default {
        components: {  
            Modals,
            ModalsComent,
            ModalInformativa
        },
        data() {
            return { 
                messagesTrue:"",
                messagesFalse:"",
                spiner: true,

                activ: false,
                page: 1,
                perPage: 5,
                totalPage:0,
                filter: "",
                table_data:null
            };
        },
    created() {  
            this.get_data()      
        },
        methods: {
            //metodos de paginacion
            previus() {
                this.page < 1 ? this.page = 1 : this.page = this.page - 1
                this.get_data()
            },

            next() {
                this.page = this.page + 1
                this.get_data()
            },

            //genera la data para la tabla
            get_data() {
                console.log(this.page, this.perPage, this.filter)
                this.table_data = []
                this.spiner = true
                featureService.getFeature(this.page, this.perPage, this.filter).then((res) => {
                    try {
                        this.table_data = res.data.sort((a, b) => b.value - a.value)
                        this.totalPage = res.paginacion.total
                        this.spiner = false
                        console.log(this.table_data.length)
                    } catch (error) {
                        console.log(error)
                    }
                })
            }, 

            //accion del buscador
            buscar() {
                this.table_data = []
                this.page = 1
                this.spiner = true
                this.get_data()
            },

            //lista filtrado de paginas
            listado() {
                this.get_data()
            }
        }
    };
</script>
<style>
.modelo_table{
    background: #9e9e9e8a;
    padding: 20px;
    border-radius: 20px;
    color: white;
}
.table_data{
    background: #22004e !important;
    border-radius: 20px !important;
}
.select_page{
    margin: 6px;
    color: #787a7a;
    border-radius: 10px;
}

.head_table{
    background: white;
    color: black;
}

.spase{
    background: #a1a6a694;
    z-index: 22;
    width: 100vw;
    height: 120vh;
    position: absolute;
}

/* HTML: <div class="loader"></div> */
.loader {
    z-index: 30;
    width: auto;
    aspect-ratio: 1.154;
    clip-path: polygon(50% 0,100% 100%,0 100%);
    --c:no-repeat linear-gradient(#23004f80 0 0);
    background: var(--c),var(--c),var(--c),var(--c),var(--c);
    background-size: 100% calc(100%/5 + 1px);
    animation: l15 5s infinite;
}
@keyframes l15 {
  0%  {background-position: 0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4)}
  20% {background-position: 0 calc(4*100%/4) ,0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4)}
  40% {background-position: 0 calc(4*100%/4) ,0 calc(3*100%/4) ,0 calc(-2*100%/4),0 calc(-2*100%/4),0 calc(-2*100%/4)}
  60% {background-position: 0 calc(4*100%/4) ,0 calc(3*100%/4) ,0 calc(2*100%/4) ,0 calc(-2*100%/4),0 calc(-2*100%/4)}
  80% {background-position: 0 calc(4*100%/4) ,0 calc(3*100%/4) ,0 calc(2*100%/4) ,0 calc(1*100%/4) ,0 calc(-2*100%/4)}
  100%{background-position: 0 calc(4*100%/4) ,0 calc(3*100%/4) ,0 calc(2*100%/4) ,0 calc(1*100%/4) ,0 calc(0*100%/4)}
}
</style>