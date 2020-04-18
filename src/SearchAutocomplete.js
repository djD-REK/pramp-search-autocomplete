const Calculator = () => {}

module.exports = {
  Calculator
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Search Autocomplete</title>
    <!-- Included some basic styling, change at will -->
    <link rel="stylesheet" type="text/css" href="https://cdn.rawgit.com/prampcontent/3ea04cbd0f61a798e96afbe5d31ec2f9/raw/e879e32222b543b29a168daa089e2f9f28cf9eb2/autocomplete.css">
</head>
<body>
<form class="search-form" id="search-form">
    <input type="text" class="search-input" id="search-input" placeholder="Start typing a movie title...">
  <label id="autocomplete"></label>
    <ul class="results" id="results"></ul>
</form>
<!-- Helper code to provide a search API for mock data -->
<script src="https://cdn.rawgit.com/prampcontent/180077452f9279073cab1035f60d30cf/raw/9cbf891a80bad9ad09c6261ef9578a65502922cc/search_helper.js"></script>
<script>
    /*-------------------------------
    *
    * Write your JavaScript code here.
    *
    * The mocked search data is available using the searchData async method, e.g:
    *   searchData("QUERY").then(results => ...)
    * ------------------------------*/
  
  // onKeyPress
  // update input field
  // re-query results based on new input
  // --> only needs to re-query if the input does not match the top result (memoization)
  // fill in the search-input (placeholder) with top result
  
  // submit
  // query results based on current input
  // display results in <ul class="results">
  
  const form = document.getElementByID("search-form")
  const searchInput = document.getElementByID("search-input")
  const resultsUL = document.getElementByID("results")
  const autocomplete = document.getElementByID("autocomplete")
  
  const submitFormFunction = async function() {
    await searchData("QUERY").then((results) => 
      {
        const resultsObject = JSON.parse(results)
        for(const result in Object.values(resultsObject))
          {
            const resultLI = resultsUL.appendChild("li")
            resultLI.textContent = result
          }
      })
    }
  
  form.addEventListener("submit", (event) => {event.preventDefault()
                                         submitFormFunction()})
  
  searchInput.addEventListener("keyup", (event) => {
    const keyPressed = event.target.value // ?
    if(keyPressed==="Enter")
    {
      submitFormFunction()
    }
    // TODO: memoization logic
    await searchData("QUERY").then((results) => 
    {
      const resultsObject = JSON.parse(results)
      const firstHit = resultsObject[0].value
      // searchInput.placeholder = firstHit
      autocomplete.textContent = firstHit
    })
  })
            
)

/*

    const inputElement = document.querySelector('.search-input');

    const results =
        document.querySelector(".results");

    inputElement.addEventListener('keyup', (event) => {
        searchData(event.target.value)
            .then((result) => {
                for (var i = 0; i < result.length; i++){
                    var li = document.createElement("li");
                    var t = document.createTextNode(result[i].title);
                    li.appendChild(t);
                    results.appendChild(li);
                }
            })
    });
  
  
  // Get HTML elements
    const searchInputElement = document.querySelector('.search-input');
    const resultsElement = document.querySelector('.results');

    // Convert search results into UI suggestions
    function showSearchResults(searchQuery) {
        searchData(searchQuery).then(results => {
            const html = results.map(movie => `
      <li>
        <span class="title">${movie.title}</span>
        <span class="rating">${movie.rating}</span>
      </li>
    `);

            resultsElement.innerHTML = html.join('');
        });
    }

    // Pass 
    function handleChange() {
        return showSearchResults(this.value);
    }

    // Register for both events
    searchInputElement.addEventListener('change', handleChange);
    searchInputElement.addEventListener('keyup', handleChange);
    
    */
</script>
</body>
</html>