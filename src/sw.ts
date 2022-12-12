/// <reference lib="webworker" />
declare let self: ServiceWorkerGlobalScope;

import { precacheAndRoute } from "workbox-precaching";
/**
 * @example 2
 */
//// @ts-expect-error "is-equal" is aliased to "fast-deep-equal" in vite.config.ts
// import { value } from "@/example-for-alias";

self.addEventListener(`install`, () => self.skipWaiting());
self.addEventListener(`activate`, () => self.clients.claim());

precacheAndRoute(self.__WB_MANIFEST); // @WARNING "build" won't work without it

console.info("Hello from Service Worker!");

/**
 * @example 1
 * Uncomment to raise a bug in dev, but not in prod
 */
// const a = window;
// const b = typeof a === "object";
// console.info("This statement should show 'true': ", b);

/**
 * @example 2
 * Uncomment to raise a bug in dev, but not in prod
 */
// console.info("This statement should show 'true': ", value);
