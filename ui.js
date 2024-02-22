class UI {
    constructor() {
      this.profile = document.getElementById('profile');
      this.repos = document.getElementById('repos');
    }
  
    showProfile(user) {
      this.profile.innerHTML = `
        <div class="card border-primary mb-3" style="max-width: 100rem;">
          <div class="card-header"><h3>${user.name}</h3></div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-3">
                <img class="img-thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
              </div>
              <div class="col-md-9">
                <span class="badge badge-dark">Public Repos: ${user.public_repos}</span>
                <span class="badge badge-primary">Public Gists: ${user.public_gists}</span>
                <span class="badge badge-success">Followers: ${user.followers}</span>
                <span class="badge badge-info">Following: ${user.following}</span>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/blog: <a href="${user.blog}" target="_blank">${user.blog}</a></li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${new Date(user.created_at).toDateString()}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  
    showRepos(repos) {
      let reposHTML = '';
      
      repos.forEach(function(repo) {
        reposHTML += `
          <div class="card">
            <div class="row">
              <div class="col-md-7">
                <strong>${repo.name}</strong>: ${repo.description}
              </div>
              <div class="col-md-3">
                <span class="badge badge-dark">Forks: ${repo.forks_count}</span>
                <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Stars: ${repo.stargazers_count}</span>
              </div>
              <div class="col-md-2">
                <a href="${repo.html_url}" target="_blank" class="btn btn-dark">Repo Page</a>
              </div>
            </div>
          </div>
        `;
      });
      
      this.repos.innerHTML = reposHTML;
    }

    showAlert(message, className) {
        this.clearAlert();

        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        const conttainer = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        conttainer.insertBefore(div, search);

        setTimeout(() => {
            this.clearAlert();
        }, 3000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }

    clearProfile() {
        this.profile.innerHTML='';
    }
  }