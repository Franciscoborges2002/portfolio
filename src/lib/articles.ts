// Vite loads these at build time — no fs needed
const rawFiles = import.meta.glob('../data/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function getSlugFromPath(filePath: string) {
  return filePath.split('/').pop()!.replace(/\.md$/, '')
}

function parseArticle(filePath: string, raw: string) {
  const { data, content } = parseFrontmatter(raw)
  return {
    slug: getSlugFromPath(filePath),
    title: data.title as string,
    date: data.date as string,
    data,
    content,
  }
}

function getAllArticles() {
  return Object.entries(rawFiles).map(([path, raw]) =>
    parseArticle(path, raw as string)
  )
}

export function getSortedArticlesData() {
  const articles = getAllArticles()

  const groupedArticles = articles.reduce(
    (acc: Record<number, typeof articles>, post) => {
      const year = parseInt(post.date.split('/')[2])
      if (!acc[year]) acc[year] = []
      acc[year].push(post)
      return acc
    },
    {}
  )

  // sort each year's articles by date, newest first
  Object.keys(groupedArticles).forEach((year) => {
    groupedArticles[+year].sort((a, b) => {
      const [aDay, aMonth, aYear] = a.date.split('/')
      const [bDay, bMonth, bYear] = b.date.split('/')
      const dateA = new Date(+aYear, +aMonth - 1, +aDay)
      const dateB = new Date(+bYear, +bMonth - 1, +bDay)
      return dateB.getTime() - dateA.getTime()
    })
  })

  return { groupedArticles }
}

export function getArticleData(slug: string) {
  const entry = Object.entries(rawFiles).find(([filePath]) =>
    getSlugFromPath(filePath) === slug
  )
  if (!entry) throw new Error(`Article not found: ${slug}`)
  return parseArticle(entry[0], entry[1] as string)
}

export function getNewestArticles() {
  return getAllArticles()
    .sort((a, b) => {
      const [aDay, aMonth, aYear] = a.date.split('/')
      const [bDay, bMonth, bYear] = b.date.split('/')
      const dateA = new Date(+aYear, +aMonth - 1, +aDay)
      const dateB = new Date(+bYear, +bMonth - 1, +bDay)
      return dateB.getTime() - dateA.getTime()
    })
    .slice(0, 3)
}

export function getSlugArticles() {
  return getAllArticles().map(({ slug }) => ({ slug }))
}


function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const content = match[2].trim()
  const data: Record<string, unknown> = {}

  // parse each line of the yaml block
  const lines = match[1].split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const keyMatch = line.match(/^(\w+):\s*(.*)$/)
    if (!keyMatch) { i++; continue }

    const key = keyMatch[1]
    const val = keyMatch[2].trim()

    if (val === '' || val === '|' || val === '>') {
      // check if next lines are an array
      const items: unknown[] = []
      i++
      while (i < lines.length && lines[i].match(/^\s+-\s+/)) {
        const item = lines[i].replace(/^\s+-\s+/, '').trim()
        // check if it's an object like { title: "...", id: "..." }
        if (item.startsWith('{') && item.endsWith('}')) {
          const obj: Record<string, string> = {}
          item.slice(1, -1).split(',').forEach(pair => {
            const [k, v] = pair.split(':').map(s => s.trim())
            obj[k] = v?.replace(/^["']|["']$/g, '') ?? ''
          })
          items.push(obj)
        } else {
          items.push(item.replace(/^["']|["']$/g, ''))
        }
        i++
      }
      data[key] = items.length > 0 ? items : val
      continue
    }

    // inline array like tags: ["a", "b"]
    if (val.startsWith('[')) {
      try {
        data[key] = JSON.parse(val.replace(/'/g, '"'))
      } catch {
        data[key] = val
      }
      i++
      continue
    }

    // plain string — strip quotes
    data[key] = val.replace(/^["']|["']$/g, '')
    i++
  }

  return { data, content }
}