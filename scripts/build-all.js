import { execSync } from 'child_process';
import { cpSync, rmSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const templatesSourceDir = join(rootDir, 'templates');
const templatesOutputDir = join(rootDir, 'public', 'templates');

const templates = [
  { name: 'dentist', folder: 'dentist-template' },
  { name: 'clothing-store', folder: 'clothing-store-template' },
  { name: 'dry-cleaners', folder: 'dry-cleaners-new' },
  { name: 'restaurant', folder: 'restaurant-template' },
  { name: 'travel-agency', folder: 'travel-agency-template' },
];

console.log('=== Building all templates ===\n');

// Clean output directory
if (existsSync(templatesOutputDir)) {
  console.log('Cleaning existing templates output directory...');
  rmSync(templatesOutputDir, { recursive: true });
}
mkdirSync(templatesOutputDir, { recursive: true });

// Build and copy each template
for (const template of templates) {
  const templateDir = join(templatesSourceDir, template.folder);
  const outputDir = join(templatesOutputDir, template.name);

  console.log(`\n--- Building ${template.name} ---`);
  console.log(`Source: ${templateDir}`);

  try {
    // Build the template
    execSync('npm run build', {
      cwd: templateDir,
      stdio: 'inherit',
      shell: true
    });

    // Copy dist to public/templates/[name]
    const distDir = join(templateDir, 'dist');
    cpSync(distDir, outputDir, { recursive: true });

    console.log(`Copied to: ${outputDir}`);
  } catch (error) {
    console.error(`Failed to build ${template.name}:`, error.message);
    process.exit(1);
  }
}

console.log('\n=== All templates built successfully! ===');
console.log(`Output directory: ${templatesOutputDir}`);
