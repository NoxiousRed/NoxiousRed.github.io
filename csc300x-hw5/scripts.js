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
        let url = GITHUB_API_BASEURL + gitHubUsername
    }

    function getUserRepos(gitHubUsername) {
        //want to replace gitHubUsername with the input user sends in
        let urlRepos = GITHUB_API_BASEURL + gitHubUsername + '/repos?sort=created'
        //clear the current GitHub repos being displayed
        let div = id('card-container');
        div.innerHTML = '';

        fetch(urlRepos, {
            method: 'GET',
            headers: {
                'Authorization': 'token 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'
            }
        })
            .then(response => response.json())
            .then(data => {

                for (const item of data) {
                    let repoCard = document.createElement('div')
                    repoCard.classList.add('repo-card')

                    /* Getting repo name and hyperlink to repo */
                    let repoName = document.createElement('a');
                    const name = item['name'];
                    const gitLink = item['html_url']
                    repoName.innerHTML = name;
                    repoName.setAttribute('href', gitLink)
                    repoCard.appendChild(repoName);

                    /* Getting repo description */
                    let repoDescription = document.createElement('p');
                    const description = item['description'];
                    repoDescription.innerHTML = description;
                    repoCard.appendChild(repoDescription);

                    /* Get repo commits */
                    let commits = document.createElement('p');
                    //gets all commit info of the specified names LEAVE THIS COMMENTED OUT UNTIL ABSOLUTELY NECESSARY
                    let urlCommits = "https://api.github.com/repos/" + gitHubUsername + `/${name}/commits`
                    fetch(urlCommits, {
                        method: 'GET',
                        headers: {
                            'Authorization': 'token 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'
                        }
                    })
                        .then(response => response.json())
                        .then((data) => {
                            const numberOfCommits = data.length;
                            commits.innerHTML = `Commits: ${numberOfCommits}`
                        })
                    repoCard.appendChild(commits);

                    /* getting update date */
                    let updateDate = document.createElement('p');
                    const updated = item['updated_at'];
                    updatedDate = new Date(updated)
                    const now = new Date();
                    const oneDay = 24 * 60 * 60 * 1000;

                    const updatedDiffDays = Math.round(Math.abs((now - updatedDate) / oneDay))
                    let updatedString;
                    if (updatedDiffDays === 0) {
                        updatedString = "Today";
                    } else if (updatedDiffDays === 1) {
                        updatedString = "Yesterday";
                    } else {
                        updatedString = `${updatedDiffDays} days ago`
                    }
                    updateDate.innerHTML = 'Updated: ' + updatedString;
                    repoCard.appendChild(updateDate);

                    /* getting created month and year */
                    let repoDate = document.createElement('p');
                    const date = item['created_at'];
                    const createdDate = new Date(date);
                    const createdMonth = createdDate.toLocaleString('default', { month: 'long' })
                    const createdYear = createdDate.getFullYear()
                    repoDate.innerHTML = `Created: ${createdMonth} ${createdYear}`;
                    repoCard.appendChild(repoDate);

                    /* Getting repo languages */
                    let languages = document.createElement('p');
                    let urlLanguages = "https://api.github.com/repos/" + gitHubUsername + `/${name}/languages`
                    fetch(urlLanguages, {
                        method: 'GET',
                        headers: {
                            'Authorization': 'token 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'
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            const repoLanguages = Object.keys(data);
                            languages.innerHTML = `Languages: ${repoLanguages}`
                        })
                    repoCard.appendChild(languages);

                    /* Getting repo watchers */
                    let watchers = document.createElement('p');
                    //gets all watcher info of the specified names
                    let urlWatchers = "https://api.github.com/repos/" + gitHubUsername + `/${name}/stargazers`
                    fetch(urlWatchers, {
                        method: 'GET',
                        headers: {
                            'Authorization': 'token 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'
                        }
                    })
                        .then(response => response.json())
                        .then((data) => {
                            const numberOfWatchers = data.length;
                            watchers.innerHTML = `Watchers: ${numberOfWatchers}`
                        })
                    repoCard.appendChild(watchers);

                    div.appendChild(repoCard);
                }
            })
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