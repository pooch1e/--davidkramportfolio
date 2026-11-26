/**
 * theme — shared theme constants and the pre-paint script. Kept out of the
 * client component because a "use client" module's exports reach server
 * components as references, not values.
 */

export const THEME_STORAGE_KEY = "theme";

export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
