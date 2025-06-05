import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(__dirname, '../src');
const README_PATH = path.join(__dirname, '../README.md');

interface Counts {
  easy: number;
  medium: number;
  hard: number;
}

const walk = (dir: string, filesList: string[] = []): string[] => {
  for (const file of fs.readdirSync(dir)) {
    const filepath = path.join(dir, file);

    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filesList);
    } else if (file.endsWith('.ts')) {
      filesList.push(filepath);
    }
  }

  return filesList;
};

const countDifficulties = (files: string[]): Counts => {
  const counts: Counts = { easy: 0, medium: 0, hard: 0 };
  const regex = /Level:\s*(Easy|Medium|Hard)/;

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const match = content.match(regex);
    if (match) {
      counts[match[1]?.toLowerCase() as 'easy' | 'medium' | 'hard']++;
    }
  }

  return counts;
};

const updateReadme = (counts: Counts) => {
  const readmeWithReplacement = fs.readFileSync(README_PATH, 'utf8').replace(
    /\| Easy\s+\|\s+\d+\s+\|\n\| Medium\s+\|\s+\d+\s+\|\n\| Hard\s+\|\s+\d+\s+\|\n\| \*\*Total\*\* \s+\|\s+\d+\s+\|/m,
    `| Easy       | ${counts.easy}     |
| Medium     | ${counts.medium}    |
| Hard       | ${counts.hard}     |
| **Total**  | ${counts.easy + counts.medium + counts.hard}    |`,
  );

  fs.writeFileSync(README_PATH, readmeWithReplacement, 'utf8');
};

const updateReadmeProblemsSolvedCounts = () => {
  console.log('Updating README.md with problem counts...');
  const files: string[] = walk(SRC_DIR);
  const counts = countDifficulties(files);
  updateReadme(counts);

  console.log('README.md updated with new difficulty counts.', counts);
};

// If the current file is being run directly (not imported as a module)
if (require.main === module) {
  updateReadmeProblemsSolvedCounts();
}
