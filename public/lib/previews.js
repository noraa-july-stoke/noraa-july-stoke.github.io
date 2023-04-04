// const $ = require("jquery");
const { getSiteMetaData } = require("og-easy");

const getMetaData = async () => {
  const metadata = await getSiteMetaData("https://note-garden.onrender.com/");
  return metadata;
};

const printMetaData = async () => {
  const metadata = await getMetaData();
  console.log(metadata);
};

const displayMetaData = async () => {
  const metadata = await getMetaData();
  const title = metadata.og.title || metadata.alt.title || "Untitled";
  const description =
    metadata.og.description ||
    metadata.alt.description ||
    "No description available";
  const image =
    metadata.og.image ||
    metadata.alt.image ||
    "https://dummyimage.com/600x400/000/fff";
  const url = metadata.og.url || metadata.alt.url || "https://example.com";
  const $metadataContainer = $("#metadata-container");
  $metadataContainer.empty();
  $metadataContainer.append(`<h2>${title}</h2>`);
  $metadataContainer.append(`<p>${description}</p>`);
  $metadataContainer.append(`<img src="${image}" alt="${title}" />`);
  $metadataContainer.append(`<a href="${url}" target="_blank">${url}</a>`);
};

printMetaData();
displayMetaData();
