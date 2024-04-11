<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            
            <div class="loaderHome navbar-brand mr-lg-5" >
                <router-link slot="brand" to="/">                    
                </router-link>
            </div>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    reto-formi
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <a slot="title" href="/" class="nav-link" data-toggle="dropdown" role="button">
                    <i class="ni ni-collection d-lg-none"></i>
                    <span class="nav-link-inner--text">Inicio</span>
                </a>
            </ul>
            
        </base-nav>
        
    </header>
   
</template>
<script>
    import BaseNav from "@/components/BaseNav";
    import BaseDropdown from "@/components/BaseDropdown";
    import CloseButton from "@/components/CloseButton";
   

    export default {
        components: {
            BaseNav,
            CloseButton,
            BaseDropdown
          },
        data() {
            return { 
            };
        },
        created(){       
        },
        methods:{
        }
    };
</script>
<style>
.loaderHome {
  width: 60px;
  aspect-ratio: 1.154;
  --c: #0000 ,#25b09b 2deg 59deg,#0000 61deg;
  --c1:conic-gradient(from 149deg at top   ,var(--c));
  --c2:conic-gradient(from -31deg at bottom,var(--c));
  background:
    var(--c1) top,
    var(--c1) bottom right,
    var(--c2) bottom,
    var(--c1) bottom left;
  background-size: 50% 50%;
  background-repeat: no-repeat;
  animation: l37 1s infinite;
}
@keyframes l37 {
  80%,100%{background-position: bottom right,bottom left,bottom,top}
}
</style>
