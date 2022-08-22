/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 */

/**
 * Replaces `node` with replacement in `parents` children
 * @param {Node} node to replace
 * @param {Parent} parent of node
 * @param {Node|Node[]} replacement for node
 * @returns {Number} index of end of replacement or -1
 */
export function splice(node, parent, replacement) {
    if (!parent?.children.length) return -1
    if (!Array.isArray(replacement)) replacement = [replacement]
    const plen = parent.children.length
    let i = 0
    while (parent.children[i] !== node && i < plen) i++;
    if (i === plen) return -1
    parent.children.splice(i, 1, ...replacement)
    return i + replacement.length
}
