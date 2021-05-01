const generatePortfolio = (answers) => {
  const {
    fullName,
    description,
    city,
    country,
    githubUrl,
    linkedinUrl,
  } = answers;

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
        <title>${fullName} | Portfolio</title>
      </head>
      <body>
        <div class="container">
          <header class="text-center my-4">
            <h1>${fullName}</h1>
            <div class="p-3">
              ${description}
            </div>
          </header>
          <main class="d-flex justify-content-center">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">${fullName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${city}, ${country}</h6>
                <a href="${githubUrl}" class="card-link"
                  >GitHub</a
                >
                <a
                  href="${linkedinUrl}"
                  class="card-link"
                  >LinkedIn</a
                >
              </div>
            </div>
          </main>
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"
          integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js"
          integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>`;
};

module.exports = generatePortfolio;
