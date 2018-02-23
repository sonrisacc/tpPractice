const https = require('https');

function getCountries(str, p) {
  let url = `https://jsonmock.hackerrank.com/api/countries/search?name=${str}`;
  let result = [];
  https.get(url, res => {
    let body = '';
    res.on('data', chunk => {
      body += chunk;
    });

    res.on('end', () => {
      let tempResult = JSON.parse(body);
      let total_pages = tempResult.total_pages;
      if (tempResult.total == 0) return 0;

      for (let i = 1; i <= total_pages; i++) {
        let nextPageUrl = url + `&page=${i}`;
        let temp = new Promise((resolve, reject) => {
          https.get(nextPageUrl, res => {
            let newBody = '';

            res.on('data', chunk => {
              newBody += chunk;
            });

            res.on('end', () => {
              newBody = JSON.parse(newBody);
              resolve(newBody.data.filter(cur => cur.population > p).length);
            });
          });
        });
        result.push(temp);
      }
      Promise.all(result).then(result => {
        let final = result.reduce((acc, cur) => acc + cur);
        console.log(final);
        return final;
      });
    });
  });
}

getCountries('u', 300);
