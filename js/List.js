var List = React.createClass({
  getInitialState: function(){
    return {
      repos: [],
      searchString: ''
    }
  },
  handleChange: function(e){
   this.setState({searchString:e.target.value});
  },
  componentDidMount: function(){
    //Making a call for each repo because parent forks are not shown on https://api.github.com/users/aipub/repos

    var api1 = fetch("https://api.github.com/repos/aipub/fullcalendar").then(r => r.json()).then(data =>
      this.setState({repos: [data]}));
    var api2 = fetch("https://api.github.com/repos/aipub/tweepy").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api3 = fetch("https://api.github.com/repos/aipub/facebook-sdk").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api4 = fetch("https://api.github.com/repos/aipub/raven-python").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api6 = fetch("https://api.github.com/repos/aipub/flask-login").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api7 = fetch("https://api.github.com/repos/aipub/buckyclient").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api8 = fetch("https://api.github.com/repos/aipub/python-wordpress-xmlrpc").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api9 = fetch("https://api.github.com/repos/aipub/git-archive-all.sh").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api10 = fetch("https://api.github.com/repos/aipub/buffer-python").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api11 = fetch("https://api.github.com/repos/aipub/awesome-slugify").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api12 = fetch("https://api.github.com/repos/aipub/tumblr-python").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api13 = fetch("https://api.github.com/repos/aipub/fluidity").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api14 = fetch("https://api.github.com/repos/aipub/python-blogger").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api15 = fetch("https://api.github.com/repos/aipub/flask-mongo-sessions").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));
    var api16 = fetch("https://api.github.com/repos/aipub/booleano").then(r => r.json()).then(data =>
      this.setState({repos: this.state.repos.concat([data])}));

  },
  render: function(){

    var repoList = this.state.repos, searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0){
        repoList = repoList.filter(function(repo){
            return repo.name.toLowerCase().match( searchString );
            });
    }

    return (
      <div>
        <input type='text' value={this.state.searchString} onChange={this.handleChange} placeholder='Search' />

        {
          repoList.map(function(repo){
            return<div>
                    <a href={repo.clone_url}>{repo.name.replace(/-/g, ' ').toUpperCase().replace('PYTHON','python').replace('MONGO', 'mongo')}</a>
                    <p>Forks: {repo.source.forks}</p>
                    <p>Language: {repo.language}</p>
                    <p>Created At: {repo.created_at.substring(0,10).replace(/-/g, '/')}</p>
                  </div>
          })
        }

      </div>
    )
  }
});

ReactDOM.render(
  <List/>, document.getElementById('react-container'));
