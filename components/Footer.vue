<template>

    <div class="footer">
        
                <nuxt-link to="https://www.cia.gov/">
                    <img src="~/assets/CIA.png">
                </nuxt-link>
            
            
                <nuxt-link to="https://www.facebook.com/">
                    <img src="~/assets/facebook.png">
                </nuxt-link>
            
            
                <nuxt-link to="https://www.instagram.com/">
                    <img src="~/assets/instagram.png">
                </nuxt-link>
            
            
                <nuxt-link to="https://twitter.com/">
                    <img src="~/assets/Twitter.png">
                </nuxt-link>
            
    </div>

</template>

<style scoped>

.footer {
    display: flex;
    justify-content: space-around;
    background-color: #0D1218;
    align-items: center;
    height: 100px;
    bottom: 0;
}
img{
    width: 50px;
    height: 50px;
}

</style>