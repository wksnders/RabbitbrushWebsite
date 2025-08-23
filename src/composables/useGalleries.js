// src/composables/useGalleries.js
import { ref, computed } from 'vue';

/**
 * Singleton store for gallery page info
 * Only contains info relevant to the page (folder, title, subtitle, optional link)
 */
const galleries = ref([
  {
    folder: 'after_school_gallery',
    title: 'After School Gallery',
    summary: "This is some example paragraph text for the first column. It adjusts nicely to fit the layout.",
    description: 'A showcase of after school class artwork',
    link: 'after-school-gallery', // optional, for hub navigation
  },
  {
    folder: 'adult_gallery',
    title: 'Adult Gallery',
    summary: "Here’s another column with its own paragraph and button. Great for highlighting features or info.",
    description: 'A showcase of adult class art projects',
    link: 'adult-class-gallery',
  },
  {
    folder: 'my_art_gallery',
    title: 'My Art Gallery',
    summary: "A third column with paragraph text and a call-to-action button. Perfect for gallery descriptions.",
    description: 'A showcase of my personal artwork',
    link: 'my-gallery',
  },
]);

export function useGalleries() {
  const all = computed(() => galleries.value);

  /**
   * Look up a gallery either by folder name or link
   * @param {string} key folder name or link
   */
  const getGallery = (key) => {
    return (
      galleries.value.find(
        g => g.folder === key || (g.link && g.link === key)
      ) || null
    );
  };

  return {
    all,
    getGallery,
  };
}
