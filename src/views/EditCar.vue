<template lang="">
    <div>
       {{car.name}}
    </div>
</template>
<script>
import { useCarStore } from '@/stores/carStore';

export default {
    props: ['id'],
    data(){
        return{
            car : null
        }
    },
    methods:{
        async fetchUnAuto(){
            console.log(this.id);
            const store = useCarStore()
            try{
                const emptycar = await store.fetchUnAuto(this.id)
                this.car = emptycar.data
                console.log(this.car);
            }catch(e){
                console.log(e);
            }
           
        }
    },
    mounted(){
        console.log(this.id);
        this.fetchUnAuto()
    }
}
</script>
<style lang="">
    
</style>