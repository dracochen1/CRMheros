<template>
    <div id="container">
            <!-- zone de connexion -->
            
            <form action="" method="POST">
                <h1>Connexion à Heros Corps</h1>
                <h3>Super-vilain passez votre chemin</h3>
                <label><b>Nom d'utilisateur</b></label>
                <input type="text" placeholder="Entrer le nom d'utilisateur" name="username" required>
                <br>
                <label><b>Mot de passe</b></label>
                <input type="password" placeholder="Entrer le mot de passe" name="password" required>
                <br>
                <input type="submit" id='submit' value='LOGIN' >
            </form>
            <h4>Vous n'avez pas de compte ? <br> Contactez un administrateur</h4>
        </div>
</template>
<style scoped>

h1, label{
    color:white;
}
form {
    width:50%;
    padding: 30px;
    border: 1px solid #f1f1f1;
    background-image: url("https://cdn.pixabay.com/photo/2018/05/14/16/54/cyber-3400789_960_720.jpg");
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    margin-right: auto;
    margin-left: auto;
    margin-top:75px;
    margin-bottom: 75px;
}
#container h1{
    width:100%;
    padding-bottom: 10px;
    text-align: center;
}
h3 {
    text-align: center;
    color:white;
}

h4{
    color:white;
    text-align: center;
    margin-bottom: 75px;
}

/* Full-width inputs */
input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
input[type=submit] {
    background-color: red;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}
input[type=submit]:hover {
    background-color: white;
    color: #af7853;
    border: 1px solid #af8453;
}
</style>