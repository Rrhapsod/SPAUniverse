export function Events({ home, universo, exploracao }) {
  function ButtonEvents() {
    const hash = window.location.hash;

    switch (hash) {
      case "":
        homeButtonEvent();
        break;

      case "#home":
        homeButtonEvent();
        break;

      case "#about":
        universoButtonEvent();
        break;

      case "#explorer":
        exploracaoButtonEvent();
        break;
    }
  }

  function homeButtonEvent() {
    window.location = "#home";

    document.body.classList.add("home");
    document.body.classList.remove("universo");
    document.body.classList.remove("exploracao");
    home.classList.add("selected");
    universo.classList.remove("selected");
    exploracao.classList.remove("selected");
  }

  function universoButtonEvent() {
    window.location = "#about";

    document.body.classList.remove("home");
    document.body.classList.add("universo");
    document.body.classList.remove("exploracao");
    home.classList.remove("selected");
    universo.classList.add("selected");
    exploracao.classList.remove("selected");
  }

  function exploracaoButtonEvent() {
    window.location = "#explorer";

    document.body.classList.remove("home");
    document.body.classList.remove("universo");
    document.body.classList.add("exploracao");
    home.classList.remove("selected");
    universo.classList.remove("selected");
    exploracao.classList.add("selected");
  }

  return {
    ButtonEvents,
  };
}
