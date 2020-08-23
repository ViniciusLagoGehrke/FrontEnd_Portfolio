async function getRepos (){
  const url = "https://api.github.com/search/repositories?q=component+in:readme+user:ViniciusLagoGehrke"
  const response = await fetch(url)
  const repositoriesList = await response.json()
  return repositoriesList
}

export default getRepos;