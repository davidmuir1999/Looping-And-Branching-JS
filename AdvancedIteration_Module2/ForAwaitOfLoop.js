//since this is async code we wrap it in an anonymous async function
(async () => {
    let count = 0;

    //The async generator is placed in the for await of loop
    //with the results of the generator we can pull out specifics
    for await (const repo of fetchRepos('javascript')){
        //getting the full name of each repo 
        console.log(count + 1, repo.full_name);

        //will stop at 50 repos so it doesn't take too long
        if(++count == 100){
            break;
        }
    }
})();

async function* fetchRepos(repo){
    let url = `https://api.github.com/search/repositories?q=${repo}`;

    //while the url is not null, send a request to the specified url
    while(url){
        const response = await fetch(url,{
            headers: {'User-Agent': 'Custom Script'},
        });

        //get the json body of the first page of results
        const body = await response.json();

        //until the loop is null, iterate over the json body items 
        //and yield/return the repo -> every page contains 30 repos
        for(let repo of body.items){
            yield repo;
        }
    }
}