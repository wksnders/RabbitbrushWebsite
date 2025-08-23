import { ref } from "vue";
const base = import.meta.env.BASE_URL

const carousels = ref(null);
const loaded = ref(false);
const loading = ref(false);
let loadPromise = null;

async function loadCarousels() {
  if (loaded.value || loading.value) return loadPromise;

  loading.value = true;
  loadPromise = fetch(`${base}carousels.json`)
    .then(res => res.json())
    .then(data => {
      carousels.value = data;
      loaded.value = true;
    })
    .catch(err => {
      console.error(`❌ Failed to load carousels.json from ${base}/carousels.json:`, err);
    })
    .finally(() => {
      loading.value = false;
    });

  return loadPromise;
}

export function useCarousels() {
  return {
    carousels,
    loaded,
    loading,
    loadCarousels
  };
}
