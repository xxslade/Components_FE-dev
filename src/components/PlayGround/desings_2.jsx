import React from 'react'
import buttonTemplates from "../../designs/buttonTemplates";
import navTemplates from '../../designs/navTemplates';
import cardTemplates from '../../designs/cardTemplates';

const toPaletteItems = (templates, type) =>
  Object.entries(templates).map(([key, jsxCode]) => ({
    id: `${type}-${key}`,
    type,
    label: `${type.charAt(0).toUpperCase() + type.slice(1)}: ${key}`,
    jsxCode,
  }));

const desings_2 = [
  ...toPaletteItems(buttonTemplates, "button"),
  ...toPaletteItems(navTemplates, "navbar"),
  ...toPaletteItems(cardTemplates, "card")
];

export default desings_2
