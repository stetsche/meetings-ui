const prependBaseClass = (icons, baseClass) => {
  return Object.entries(icons).map((iconentry) => {
    let mod = iconentry;
    mod[1] = baseClass + " " + mod[1];
    return mod;
  });
};

const icons_fontawsome = {
  bell: "fa-bell",
  chevron_down: "fa-chevron-down",
  chevron_up: "fa-chevron-up",
  error: "fa-ban",
  file_image: "fa-file-image-o",
  hourglass_emty: "fa-hourglass-o",
  maximize: "fa-arrows-alt",
  menu_kebab: "fa-ellipsis-v",
  plus: "fa-plus",
  question: "fa-question",
  search: "fa-search",
  videocamera: "fa-video-camera",
  edit: "fa-pencil",
  delete: "fa-trash",
  link: "fa-link",
  permissions: "fa-lock",
  template: "fa-book",
  all: "fa-th-large",
};
const icons_bootstrap = {
  attachment: "bi-paperclip",
  chat: "bi-chat-right-text",
  live: "bi-record-circle",
  play: "bi-play-circle",
  presentation: "bi-easel",
  remove: "bi-x-circle",
};

const _fa = prependBaseClass(icons_fontawsome, "fa");
const _bi = prependBaseClass(icons_bootstrap, "bi");

export const fa = Object.fromEntries(_fa);
export const bi = Object.fromEntries(_bi);

export default { ...fa, ...bi };
