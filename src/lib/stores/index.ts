import type { StyleSwitcherOption } from '@watergis/svelte-maplibre-style-switcher';
import type { Map } from 'maplibre-gl';
import { writable } from 'svelte/store';

// map store for maplibre-gl object
export const map = writable<Map>(null);

export const selectedStyle = writable<StyleSwitcherOption>(null);
