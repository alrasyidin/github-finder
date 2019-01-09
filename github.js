class Github{
    constructor(){
        this.client_id = 'b064df6a667a42820a09';
        this.client_secret = '9557a7ee69655a19405bec7051a3ccca2766e4ec';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        console.log(repos);
        return {
            profile,
            repos
        };
    }
}