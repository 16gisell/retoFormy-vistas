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
        <h1 class="display-3  text-white"></h1>
           
        <div class="mb-3 modelo_table">
            <div class="col-lg-12 text-center">
                <form>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <div class="input-group input-group-alternative mb-4">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="ni ni-zoom-split-in"></i></span>
                                </div>
                                <input class="form-control form-control-alternative" placeholder="Search" type="text">
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
                    <thead>
                        <tr>
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
                        <tr>
                            <td class="text-center">1</td>
                            <td>Andrew Mike</td>
                            <td>Develop</td>
                            <td>2013</td>
                            <td>2013</td>
                            <td>2013</td>
                            <td>2013</td>
                            <td>2013</td>
                            <td class="text-right">&euro; 99,225</td>
                            <td class="td-actions text-right">
                            <button type="button" rel="tooltip" class="btn btn-info btn-icon btn-sm " data-original-title="" title="">
                                <i class="ni ni-circle-08 pt-1"></i>
                            </button>
                            <button type="button" rel="tooltip" class="btn btn-success btn-icon btn-sm " data-original-title="" title="">
                                <i class="ni ni-settings-gear-65 pt-1"></i>
                            </button>
                            <button type="button" rel="tooltip" class="btn btn-danger btn-icon btn-sm " data-original-title="" title="">
                                <i class="ni ni-fat-remove pt-1"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>   
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-end">
                        <li class="page-item">
                        <a class="page-link" href="#"  @click="previus">
                            <i class="fa fa-angle-left"></i>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="#">{{ numPage }}</a></li>
                        <li class="page-item">
                        <a class="page-link" href="#" @click="next">
                            <i class="fa fa-angle-right"></i>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                    <p class="pagination justify-content-end" >Total page: 999999</p>
                </nav>        
            </div>               
        </div>
    </section>
    
</template>
<script>
    import Modals from "./components/JavascriptComponents/Modals.vue"

    export default {
        components: {  
            Modals,
        },
        data() {
            return { 
                messagesTrue:"",
                messagesFalse:"",
                spiner: true,

                activ: false,
                numPage:1
            };
        },
        created(){        
        },
        filters:{
            fecha: function(date){
                const fecha= new Date(date)
                const options = {year: 'numeric', month: '2-digit', day: '2-digit'}
                return fecha.toLocaleDateString('es-VE', options)
            }
        },
        methods: {
            //metodos de paginacion
            previus() {
                this.numPage < 1 ? this.numPage=1 : this.numPage= this.numPage-1
            },

            next() {
                this.numPage=  this.numPage+1
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
</style>