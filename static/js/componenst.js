import { LinkAbout, Title_experience } from "./data.js";

//** Items About */
$(document).ready(function () {
  About();
  Experiences();
});

//* Link icon about
function About() {
  const icon_loading = $("#loading-icons");
  LinkAbout.forEach((link) => {
    const linkElement = `
            <span class="px-1">
                <a href="${link.url}" target="_blank" class="btn social-icon">
                    <i class="${link.icon}"></i>
                </a>
            </span>
        `;
    icon_loading.append(linkElement);
  });
}

//* Title Experience
function Experiences() {
  const title_xperience = $("#pills-tab");
  const inexper = $("#pills-tabContent");

  Title_experience.forEach((data) => {
    const element = `
    <li class="nav-item px-1 bg-transparent" role="presentation">
    <div class="nav-link bg-transparent" aria-selected="true" role="tab"
        data-bs-toggle="pill" id="${data.id}"
        data-bs-target="${data.data_bs_target}"
        aria-controls="${data.aria_controls}">
        ${data.title}
    </div>
</li>
    `;

    title_xperience.append(element);
  });

}

//*
