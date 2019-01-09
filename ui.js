class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showUser(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img src="${user.avatar_url}" alt="avatar profile user" class="img-fluid mb-2 d-block mx-auto">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary">Public Gist: ${user.public_gists}</span>
                    <span class="badge badge-success">Followers: ${user.followers}</span>
                    <span class="badge badge-warning">Following: ${user.following}</span>

                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Email: ${user.email}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class="mb-3">Repos User</h3>
        <div class="repos"></div>
        `
    }

    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank" class="text-white">${repo.name}</a>
                    </div>
                    <div class="col-md-6 d-flex flex-row-reverse">
                        <span class="bg-primary p-2 mr-2 rounded">Stars: ${repo.stargazers_count}</span>
                        <span class="bg-warning p-2 mr-2 rounded">Watchers: ${repo.watchers_count}</span>
                        <span class="bg-success p-2 mr-2 rounded">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `
        });

        document.querySelector('.repos').innerHTML = output;
    }

    showAlert(message, cls){
        // clear alert first
        const currentAlert = document.querySelector(".alert");

        if(currentAlert){
            currentAlert.remove();
        }

        let div = document.createElement('div');
        div.className = cls;

        div.innerHTML = message + '<span class="close">x</span>';

        this.profile.parentElement.insertBefore(div, this.profile.previousElementSibling);

        setTimeout(() => {
            div.remove();
        }, 3000);
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }
}