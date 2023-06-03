import { VFile } from 'vfile'
import { Parent } from 'unist'
import { visit } from 'unist-util-visit'
import slugger from 'github-slugger'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'
import { Toc } from 'types/Toc'

export function remarkTocHeadings() {
  return (tree: Parent, file: VFile) => {
    const toc: Toc = []
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visit(tree, 'heading', (node: any) => {
      const textContent = toString(node)
      toc.push({
        value: textContent,
        url: '#' + slugger.slug(textContent),
        depth: node.depth,
      })
    })
    file.data.toc = toc
  }
}

/**
 *
 * @param {string} markdown
 * @return {Toc} toc
 */
export async function extractTocHeadings(markdown) {
  const vfile = await remark().use(remarkTocHeadings).process(markdown)
  return vfile.data.toc
}
