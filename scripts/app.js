const renderCodelabs = () => {
  const codelabContainer = document.getElementById("codelabs");

  const codelabsHTML = cods.reduce((acc, current) => {
    const { title, description, href, color, readingTime, lastUpdate } =
      current;
    return (
      acc +
      `
      <section class="codelab" style="border-bottom: solid 3px ${color};">
  
        <h3 class="codelab-title">${title}</h3>

        <div class="codelab-time">
          <p class="time">${readingTime}</p>
          <p class="codelab-update">${lastUpdate}</p>
        </div>

        <p class="codelab-description"> ${description} </p>

        <a
          class="btn btn-start"
          style="background-color: ${color};"
          href="${href}"
          >Comenzar</a
        >
      </section>
      \n
    `
    );
  }, "");

  codelabContainer.innerHTML = codelabsHTML;
};

const App = () => {
  renderCodelabs();
};

window.onload = App;
