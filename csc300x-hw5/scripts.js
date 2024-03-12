(function () {

    const GITHUB_API_BASEURL = 'https://api.github.com/users/';
    const GITHUB_BASE_USERNAME = 'noxiousred'
    window.addEventListener('load', init);

    function init() {
        console.log("Window Loaded!")
        getUserRepos(GITHUB_BASE_USERNAME)
        id('get-username').addEventListener('submit', function (e) {
            // if we've gotten in here, all HTML5 validation checks have passed
            e.preventDefault();
            submitForm();
        });
    }

    function submitForm() {
        let gitHubUsername = document.getElementById('github-username').value;// pass in the entered github-username
        getUserRepos(gitHubUsername)
    }



    function getUserRepos(gitHubUsername) {
        //want to replace gitHubUsername with the input user sends in
        let url = GITHUB_API_BASEURL + gitHubUsername + '/repos?sort=created'

        //chaining thens allows you to access whatever data is returned in a then to following thens.
        fetch(url)
            .then(checkStatus)
            .then((repoData) => {
                console.log(repoData);
                let div = id('card-container');

                for (const item of repoData) {
                    let repoCard = document.createElement('repo-card')

                    let repoName = document.createElement('a');
                    //replace this with the necessary href link VVV
                    const name = item['name'];
                    const gitLink = item['html_url']
                    repoName.innerHTML = name;
                    repoName.setAttribute('href', gitLink)
                    div.appendChild(repoName);

                    let repoDate = document.createElement('p');
                    const date = item['created_at'];
                    repoDate.innerHTML = 'Created: ' + date;
                    div.appendChild(repoDate);

                    let updateDate = document.createElement('p');
                    const updated = item['updated_at'];
                    updateDate.innerHTML = 'Updated: ' + updated;
                    div.appendChild(updateDate);

                    let rule = document.createElement('hr');
                    div.appendChild(rule);

                    div.appendChild(repoCard);
                }
            })
            .catch((error) => {
                console.error('Error: ', error);
            });
    }

    //helper functions
    function id(idName) {
        return document.getElementById(idName);
    }
    function checkStatus(response) {
        if (!response.ok) {
            throw Error('Error in request: ' + response.statusText);
        }
        return response.json();
    }

})();