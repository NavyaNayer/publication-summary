/**
 * @param {{ contains: (arg0: any) => any; }} node
 * @param {() => void} callback
 */
export function useClickOutside(node, callback) {
    const handleClick = (/** @type {{ target: any; }} */ event) => {
        if (!node.contains(event.target)) {
            callback();
        }
    };

    document.addEventListener('click', handleClick);

    return {
        destroy() {
            document.removeEventListener('click', handleClick);
        }
    };
}
