class GitHub {
  constructor() {
    this.clientId = 'b9315bcd5a07fcd759d8';
    this.clientSecret = 'a2b698bf7e7c02f898197cf136d1a41f704ca8e4';
    this.repos_count = 5;
    this.repos_sort = 'created:asc';
  }

  async getUser(username) {
    const profileResponse = 
      await fetch(
        `https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
      );
      
    const repoResponse = 
      await fetch(
        `https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
      ); 
    
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    };
  }
}