<template>
    <div id="container">
            <!-- zone de connexion if not connected, see inscriptions page and co, if co see hello XXX, with link for dashboard -->
            
            <form action="" method="POST">
                <h1>Connexion</h1>
                
                <label><b>Nom d'utilisateur</b></label>
                <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>
                <br>
                <label><b>Mot de passe</b></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required>
                <br>
                <input type="submit" id='submit' value='LOGIN' >
            </form>
        </div>
</template>
<style scoped>

form{
    height: 700px;
    text-align: center;

}
input {
    margin-top: 20px;
    margin-left: 10px;
}
h1, label{
    color:white;
}
</style>