import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-project'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'colegio-sagrado-coracao',
  title: 'Colégio Sagrado Coração de Jesus - CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
