import puppeteer from 'puppeteer-core';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');

const inputPath = resolve(projectRoot, 'cv.html');
const outputPath = resolve(projectRoot, 'Marina Xintara CV.pdf');

function resolveBrowser() {
  if (process.env.CHROME_PATH && existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  const found = candidates.find((p) => p && existsSync(p));
  if (!found) {
    throw new Error(
      'No Chrome or Edge executable found. Set CHROME_PATH to your browser executable.'
    );
  }
  return found;
}

const executablePath = resolveBrowser();
console.log(`Using browser: ${executablePath}`);

const browser = await puppeteer.launch({ executablePath });
const page = await browser.newPage();

await page.goto(pathToFileURL(inputPath).href, { waitUntil: 'networkidle0' });

await page.addStyleTag({
  content: `
    section, .entry { page-break-inside: avoid; break-inside: avoid; }
    section h2 { page-break-after: avoid; break-after: avoid; }
  `,
});

await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0', right: '0', bottom: '0', left: '0' },
});

await browser.close();

console.log(`Wrote ${outputPath}`);
