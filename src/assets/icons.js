const prependBaseClass = (icons, baseClass) => {
  return Object.entries(icons).map((iconentry) => {
    let mod = iconentry;
    mod[1] = baseClass + " " + mod[1];
    return mod;
  });
};

const icons_fontawsome = {
  all: "fa-th-large",
  bell: "fa-bell",
  calendar: "fa-calendar-o",
  chevron_down: "fa-chevron-down",
  chevron_up: "fa-chevron-up",
  delete: "fa-trash",
  edit: "fa-pencil",
  error: "fa-ban",
  file_image: "fa-file-image-o",
  hourglass_emty: "fa-hourglass-o",
  link: "fa-link",
  maximize: "fa-arrows-alt",
  menu_kebab: "fa-ellipsis-v",
  permissions: "fa-lock",
  plus: "fa-plus",
  question: "fa-question",
  search: "fa-search",
  template: "fa-book",
  videocamera: "fa-video-camera",
};
const icons_bootstrap = {
  attachment: "bi-paperclip",
  chat: "bi-chat-right-text",
  close: "bi-x-lg",
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
