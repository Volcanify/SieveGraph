import posthog from 'posthog-js'
import { browser } from '$app/environment';
import { onMount } from 'svelte';

export const prerender = true;
export const trailingSlash = "always";

export const load = async () => {
  if (browser) {
    posthog.init(
      'phc_wfNxIFZMZU1r3m14i2C7FUo6SS4KTTw0GdYE2HiA64B',
      {
        api_host: 'https://us.i.posthog.com',
        defaults: '2025-11-30',
        person_profiles: 'always', // or 'always' to create profiles for anonymous users as well
      }
    )
  }

  return
};