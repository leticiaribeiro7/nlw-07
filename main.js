const socialMedia = {
    github: "leticiaribeiro7",
    facebook: "xltrsx",
    instagram: "ltrsx",
    twitter: "ltrsx"
}


function changeSocialMediaUser() {
    for (let li of socialLinks.children){
        const social = li.getAttribute("class")
        if(socialMedia[social])   //só insere o user das redes sociais caso esteja setado no objeto socialMedia
            li.children[0].href = `https://${social}.com/${socialMedia[social]}`
    }
}

function getGitHubInfos() {
    const url = `https://api.github.com/users/${socialMedia.github}`

        fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userGitHub.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })

}


changeSocialMediaUser()

 //só insere as informações no crachá caso o user do github esteja setado no objeto socialMedia
if(socialMedia.github) {  
    getGitHubInfos()
}