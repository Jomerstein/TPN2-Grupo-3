import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        
    }),
    actions: {
        async register(usuario){
        
            try{
            await fetch("https://6657b24c5c36170526459cda.mockapi.io/rental/users/users",{
                method: "POST",
                body: JSON.stringify(usuario),
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
            })
       

         
            }catch(error){
                console.log(error);
            }
        }
    }
})