
export function createImageUrl(filename, size){
    return `${import.meta.env.VITE_IMG_BASE_URL_FILE}${size}${filename}`;
}