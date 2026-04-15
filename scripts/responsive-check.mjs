import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const TARGET_URL = process.env.TARGET_URL || "https://hadefuwa.github.io/Matrix-LMS/unit.html?unit=36";
const outDir = path.resolve("qa-artifacts/responsive");

const viewports = [
  { width: 320, height: 740, label: "320x740" },
  { width: 360, height: 800, label: "360x800" },
  { width: 390, height: 844, label: "390x844" },
  { width: 412, height: 915, label: "412x915" },
  { width: 768, height: 1024, label: "768x1024" }
];

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });
let failed = false;

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();

  await page.goto(TARGET_URL, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1200);

  const check = await page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const pageOverflows = {
      htmlScrollWidth: doc.scrollWidth,
      bodyScrollWidth: body ? body.scrollWidth : 0,
      viewportWidth: window.innerWidth
    };

    const isInsideScrollableX = (el) => {
      let node = el.parentElement;
      while (node && node !== document.body) {
        const s = window.getComputedStyle(node);
        const scrollable = (s.overflowX === "auto" || s.overflowX === "scroll") && node.scrollWidth > node.clientWidth + 1;
        if (scrollable) return true;
        node = node.parentElement;
      }
      return false;
    };

    const offenders = [];
    for (const el of document.querySelectorAll("body *")) {
      const rect = el.getBoundingClientRect();
      if (rect.right - window.innerWidth > 1 && !isInsideScrollableX(el)) {
        offenders.push({
          tag: el.tagName.toLowerCase(),
          cls: (el.className || "").toString().slice(0, 120),
          right: Math.round(rect.right),
          viewport: window.innerWidth
        });
      }
      if (offenders.length >= 15) break;
    }

    return {
      overflowX: Math.max(doc.scrollWidth, body ? body.scrollWidth : 0) - window.innerWidth,
      pageOverflows,
      offenders
    };
  });

  const screenshotPath = path.join(outDir, `${vp.label}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  const report = {
    viewport: vp,
    url: TARGET_URL,
    check,
    screenshot: screenshotPath
  };

  const reportPath = path.join(outDir, `${vp.label}.json`);
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

  const bad = check.overflowX > 1 || check.offenders.length > 0;
  if (bad) {
    failed = true;
    console.error(`FAIL ${vp.label}: overflowX=${check.overflowX}`);
    for (const item of check.offenders.slice(0, 5)) {
      console.error(`  - ${item.tag}.${item.cls} right=${item.right} > viewport=${item.viewport}`);
    }
  } else {
    console.log(`PASS ${vp.label}`);
  }

  await context.close();
}

await browser.close();

if (failed) {
  console.error("Responsive QA failed. See qa-artifacts/responsive for screenshots + reports.");
  process.exit(1);
}

console.log("Responsive QA passed.");
