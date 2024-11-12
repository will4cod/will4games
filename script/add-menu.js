const body = document.querySelector("body");

function home() {
  console.log(window.location);
  window.location.replace(window.location.origin);
}

const navbar = `
    <div id="navbar">
        <ul>
            <li><a onclick="home()" data-text="Home"><i class='bx bxs-home'></i></a></li>
            <li><a onclick="home()" data-text="Search"><i class='bx bxs-search'></i></a></li>
            <li><a onclick="home()" data-text="Novos"><i class='bx bxs-hot'></i></a></li>
            <!-- <li><a href="#" data-text="About"><i class='bx bxs-user-circle'></i></a></li> -->
        </ul>
    </div>
`;

body.insertAdjacentHTML("afterbegin", navbar);
