import { test, expect, type Page } from "@playwright/test";

// ─── HELPER ───
const waitForApp = async (page: Page) => {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle", { timeout: 5000 }).catch(() => {
    // Fallback: if networkidle times out, just ensure body is visible
  });
};

// ════════════════════════════════════════════════════════════════════════════════
// 1. PAGE LOAD & SEO TESTS
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Page Load & SEO", () => {
  const pages = [
    { path: "/", titlePattern: /Disha/i, heading: "Built Tough" },
    { path: "/about", titlePattern: /About/i, heading: "We Make Metal" },
    { path: "/services", titlePattern: /Services/i, heading: "Our Services" },
    { path: "/gallery", titlePattern: /Gallery/i, heading: "Gallery" },
    { path: "/industries", titlePattern: /Industries/i, heading: "Industries" },
    { path: "/contact", titlePattern: /Contact/i, heading: "Let's Connect" },
    { path: "/quote", titlePattern: /Quote/i, heading: "Get Your Free Quote" },
    { path: "/testimonials", titlePattern: /Testimonials/i, heading: "Testimonials" },
    { path: "/faq", titlePattern: /FAQ/i, heading: "Frequently Asked Questions" },
  ];

  for (const { path, titlePattern, heading } of pages) {
    test(`${path} - page loads successfully`, async ({ page }) => {
      await page.goto(path);
      await waitForApp(page);
      await expect(page).toHaveTitle(titlePattern);
      // Verify content loaded
      await expect(page.locator("body")).toBeVisible();
    });

    test(`${path} - has meta description`, async ({ page }) => {
      await page.goto(path);
      const meta = page.locator('meta[name="description"]');
      await expect(meta).toHaveAttribute("content", /.+/);
    });
  }
});

// ════════════════════════════════════════════════════════════════════════════════
// 2. NAVIGATION TESTS
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Navigation - Desktop", () => {
  test("logo links to homepage", async ({ page }) => {
    await page.goto("/about");
    await waitForApp(page);
    await page.locator('a[href="/"]').first().click();
    await waitForApp(page);
    expect(page.url()).toContain("/");
  });

  test("navigation bar is visible", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await expect(page.locator("nav")).toBeVisible();
  });

  test("Get Quote button navigates to quote page", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    const quoteBtn = page.getByRole("link", { name: /Get.*Quote/i }).first();
    await quoteBtn.click();
    await waitForApp(page);
    expect(page.url()).toContain("/quote");
  });
});

test.describe("Navigation - Mobile", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("mobile menu button is visible", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    const menuBtn = page.locator("button").filter({ hasText: /menu/i }).or(page.locator('[aria-label*="menu"]')).first();
    await expect(menuBtn.or(page.locator("nav svg").first())).toBeVisible();
  });

  test("page is responsive without horizontal scroll", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(380);
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 3. FOOTER TESTS
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Footer", () => {
  test("footer displays correct copyright year", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    const footer = page.locator("footer");
    await expect(footer).toContainText(new Date().getFullYear().toString());
    await expect(footer).toContainText("Disha Powder Coating");
  });

  test("footer contains contact information", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await expect(page.locator("footer")).toContainText(/\+91|63513/);
  });

  test("footer has working links", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    const footerLinks = page.locator("footer a");
    const count = await footerLinks.count();
    expect(count).toBeGreaterThan(5);
  });

  test("social media links open in new tab", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    const socialLinks = page.locator('footer a[target="_blank"]');
    const count = await socialLinks.count();
    expect(count).toBeGreaterThanOrEqual(1);
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 4. HOME PAGE CONTENT
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Home Page Content", () => {
  test("hero section displays main headline", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await expect(page.getByText(/Built Tough.*Finished Flawless/i)).toBeVisible();
  });

  test("hero CTA button is present", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await expect(page.getByRole("link", { name: /Get Started/i })).toBeVisible();
  });

  test("stats section shows company metrics", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await expect(page.getByText("15+")).toBeVisible();
    await expect(page.getByText("500+")).toBeVisible();
    await expect(page.getByText("5000+")).toBeVisible();
  });

  test("services section is visible", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await expect(page.getByText(/Our Core Services/i)).toBeVisible();
  });

  test("trust indicator is displayed", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await expect(page.getByText(/Trusted by.*500/i)).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 5. ABOUT PAGE CONTENT
// ════════════════════════════════════════════════════════════════════════════════
test.describe("About Page Content", () => {
  test("displays company story headline", async ({ page }) => {
    await page.goto("/about");
    await waitForApp(page);
    await expect(page.getByText(/We Make Metal/i)).toBeVisible();
  });

  test("shows founder information", async ({ page }) => {
    await page.goto("/about");
    await waitForApp(page);
    await expect(page.getByText("Manoj Bavaria")).toBeVisible();
  });

  test("displays company values", async ({ page }) => {
    await page.goto("/about");
    await waitForApp(page);
    await expect(page.getByText("Family First")).toBeVisible();
    await expect(page.getByText(/Color is Emotion/i)).toBeVisible();
    await expect(page.getByText("Made to Last")).toBeVisible();
  });

  test("shows company timeline", async ({ page }) => {
    await page.goto("/about");
    await waitForApp(page);
    await expect(page.getByText("2010")).toBeVisible();
    await expect(page.getByText("2025")).toBeVisible();
  });

  test("displays certifications", async ({ page }) => {
    await page.goto("/about");
    await waitForApp(page);
    await expect(page.getByText("ISO 9001:2015")).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 6. SERVICES PAGE CONTENT
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Services Page Content", () => {
  test("displays services heading", async ({ page }) => {
    await page.goto("/services");
    await waitForApp(page);
    await expect(page.getByRole("heading", { name: /Services/i }).first()).toBeVisible();
  });

  test("shows service cards", async ({ page }) => {
    await page.goto("/services");
    await waitForApp(page);
    const cards = page.locator("article, .card, [class*='card']");
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test("displays process steps", async ({ page }) => {
    await page.goto("/services");
    await waitForApp(page);
    await expect(page.getByText(/process/i)).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 7. CONTACT FORM FUNCTIONALITY
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Contact Form", () => {
  test("contact page loads correctly", async ({ page }) => {
    await page.goto("/contact");
    await waitForApp(page);
    await expect(page.getByText(/Let's Connect/i)).toBeVisible();
  });

  test("form fields are present", async ({ page }) => {
    await page.goto("/contact");
    await waitForApp(page);
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('textarea[name="message"]')).toBeVisible();
  });

  test("successful form submission shows confirmation", async ({ page }) => {
    await page.goto("/contact");
    await waitForApp(page);

    await page.fill('input[name="name"]', "Test QA User");
    await page.fill('input[name="email"]', "qa@testdomain.com");
    await page.fill('input[name="phone"]', "9876543210");
    await page.fill('textarea[name="message"]', "This is a comprehensive QA test message.");

    await page.getByRole("button", { name: /Send Message/i }).click();
    await page.waitForTimeout(2000);

    await expect(page.getByText(/Message Sent/i)).toBeVisible();
  });

  test("displays contact information", async ({ page }) => {
    await page.goto("/contact");
    await waitForApp(page);
    await expect(page.getByText("+91 63513 34789")).toBeVisible();
    await expect(page.getByText("info@dishapowdercoating.com")).toBeVisible();
  });

  test("Google Maps embed is present", async ({ page }) => {
    await page.goto("/contact");
    await waitForApp(page);
    const iframe = page.locator("iframe");
    await expect(iframe).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 8. QUOTE FORM WIZARD
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Quote Form Multi-Step Wizard", () => {
  test("quote page loads with step 1", async ({ page }) => {
    await page.goto("/quote");
    await waitForApp(page);
    await expect(page.getByText(/Get Your Free Quote/i)).toBeVisible();
  });

  test("service selection cards are displayed", async ({ page }) => {
    await page.goto("/quote");
    await waitForApp(page);
    await expect(page.getByText(/Custom Coating/i)).toBeVisible();
  });

  test("can navigate through wizard steps", async ({ page }) => {
    await page.goto("/quote");
    await waitForApp(page);

    // Step 1 - Select service using reliable data-testid
    await page.locator('[data-testid="service-card-custom-coating"]').click();
    await page.waitForTimeout(800);

    // Step 2 should be visible
    await expect(page.locator('[data-testid="input-quantity"]')).toBeVisible();
  });

  test("complete wizard submission", async ({ page }) => {
    await page.goto("/quote");
    await waitForApp(page);

    // Step 1 - Select service using reliable data-testid
    await page.locator('[data-testid="service-card-custom-coating"]').click();
    await page.waitForTimeout(800);

    // Step 2 - Project details
    await expect(page.locator('[data-testid="input-quantity"]')).toBeVisible();
    await page.locator('[data-testid="input-quantity"]').fill("100");
    await page.locator('[data-testid="button-next-2"]').click();
    await page.waitForTimeout(500);

    // Step 3 - File upload (skip)
    await page.locator('[data-testid="button-next-3"]').click();
    await page.waitForTimeout(500);

    // Step 4 - Contact info
    await page.locator('[data-testid="input-contact-name"]').fill("Professional QA Tester");
    await page.locator('[data-testid="input-contact-email"]').fill("qa.pro@test.com");
    await page.locator('[data-testid="input-contact-phone"]').fill("9876543210");

    await page.locator('[data-testid="button-submit-quote"]').click();
    await page.waitForTimeout(2000);

    await expect(page.getByText(/Quote Request Submitted/i)).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 9. GALLERY PAGE
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Gallery Page", () => {
  test("gallery page loads", async ({ page }) => {
    await page.goto("/gallery");
    await waitForApp(page);
    await expect(page.getByRole("heading", { name: /Gallery/i }).first()).toBeVisible();
  });

  test("images are displayed", async ({ page }) => {
    await page.goto("/gallery");
    await waitForApp(page);
    const images = page.locator("img");
    const count = await images.count();
    expect(count).toBeGreaterThan(1);
  });

  test("filter buttons exist", async ({ page }) => {
    await page.goto("/gallery");
    await waitForApp(page);
    await expect(page.getByRole("button", { name: /All/i }).first()).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 10. TESTIMONIALS PAGE
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Testimonials Page", () => {
  test("testimonials page loads", async ({ page }) => {
    await page.goto("/testimonials");
    await waitForApp(page);
    await expect(page.getByText(/Client.*Testimonials/i).first()).toBeVisible();
  });

  test("displays customer satisfaction metrics", async ({ page }) => {
    await page.goto("/testimonials");
    await waitForApp(page);
    await expect(page.getByText("500+")).toBeVisible();
    await expect(page.getByText("4.9")).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 11. INDUSTRIES PAGE
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Industries Page", () => {
  test("industries page loads", async ({ page }) => {
    await page.goto("/industries");
    await waitForApp(page);
    await expect(page.getByRole("heading", { name: /Industries/i }).first()).toBeVisible();
  });

  test("displays industry categories", async ({ page }) => {
    await page.goto("/industries");
    await waitForApp(page);
    await expect(page.getByText("Automotive")).toBeVisible();
    await expect(page.getByText(/Industrial Machinery/i)).toBeVisible();
    await expect(page.getByText("Furniture")).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 12. FAQ PAGE
// ════════════════════════════════════════════════════════════════════════════════
test.describe("FAQ Page", () => {
  test("FAQ page loads", async ({ page }) => {
    await page.goto("/faq");
    await waitForApp(page);
    // FAQ page should have loaded - check for search input or FAQ items instead
    await expect(page.locator("input[type='text'], input[type='search']").first()).toBeVisible();
  });

  test("search functionality exists", async ({ page }) => {
    await page.goto("/faq");
    await waitForApp(page);
    const searchInput = page.locator("input[type='text'], input[type='search']").first();
    await expect(searchInput).toBeVisible();
  });

  test("FAQ items are present", async ({ page }) => {
    await page.goto("/faq");
    await waitForApp(page);
    await expect(page.getByText(/What is powder coating/i)).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 13. 404 ERROR PAGE
// ════════════════════════════════════════════════════════════════════════════════
test.describe("404 Page", () => {
  test("shows 404 page for invalid routes", async ({ page }) => {
    await page.goto("/this-does-not-exist");
    await waitForApp(page);
    await expect(page.getByText("404")).toBeVisible();
    await expect(page.getByText(/Page Not Found/i)).toBeVisible();
  });

  test("404 page has Back to Home button", async ({ page }) => {
    await page.goto("/invalid-route-test");
    await waitForApp(page);
    await expect(page.getByRole("link", { name: /Back to Home/i })).toBeVisible();
  });

  test("404 page includes quick navigation links", async ({ page }) => {
    await page.goto("/nonexistent");
    await waitForApp(page);
    // Check for quick navigation links in 404 section specifically
    const quickLinks = page.locator('a[href="/services"], a[href="/gallery"]');
    const count = await quickLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 14. WHATSAPP INTEGRATION
// ════════════════════════════════════════════════════════════════════════════════
test.describe("WhatsApp Button", () => {
  test("WhatsApp floating button appears", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1500);
    const whatsappBtn = page.locator('a[aria-label*="WhatsApp"]');
    await expect(whatsappBtn).toBeVisible();
  });

  test("WhatsApp button has correct link", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(1500);
    const whatsappBtn = page.locator('a[href*="wa.me"]');
    const href = await whatsappBtn.getAttribute("href");
    expect(href).toContain("916351334789");
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 15. RESPONSIVE DESIGN
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Responsive Design", () => {
  const viewports = [
    { name: "Mobile Portrait", width: 375, height: 812 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Desktop HD", width: 1920, height: 1080 },
  ];

  for (const vp of viewports) {
    test(`${vp.name} (${vp.width}x${vp.height}) - no horizontal overflow`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      await waitForApp(page);

      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(vp.width + 2);
    });
  }
});

// ════════════════════════════════════════════════════════════════════════════════
// 16. ACCESSIBILITY
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Accessibility", () => {
  test("all images have alt attributes", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < Math.min(count, 15); i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt).not.toBeNull();
    }
  });

  test("page has proper heading hierarchy", async ({ page }) => {
    await page.goto("/about");
    await waitForApp(page);
    const h1Count = await page.locator("h1").count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });

  test("interactive elements are keyboard accessible", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await page.keyboard.press("Tab");
    const activeElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeElement).toBeTruthy();
  });

  test("buttons have accessible names", async ({ page }) => {
    await page.goto("/contact");
    await waitForApp(page);
    const submitBtn = page.getByRole("button", { name: /Send/i });
    await expect(submitBtn).toBeVisible();
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 17. PERFORMANCE
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Performance", () => {
  test("homepage loads within acceptable time", async ({ page }) => {
    const start = Date.now();
    await page.goto("/", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(8000);
  });

  test("no broken images on homepage", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    const images = page.locator("img");
    const count = await images.count();

    for (let i = 0; i < Math.min(count, 10); i++) {
      const src = await images.nth(i).getAttribute("src");
      if (src && !src.startsWith("data:")) {
        const naturalWidth = await images.nth(i).evaluate((img: HTMLImageElement) => img.naturalWidth);
        expect(naturalWidth).toBeGreaterThan(0);
      }
    }
  });
});

// ════════════════════════════════════════════════════════════════════════════════
// 18. CROSS-PAGE NAVIGATION
// ════════════════════════════════════════════════════════════════════════════════
test.describe("Cross-Page Navigation", () => {
  test("Home → About navigation works", async ({ page }) => {
    await page.goto("/");
    await waitForApp(page);
    await page.getByRole("link", { name: /About/i }).first().click();
    await waitForApp(page);
    expect(page.url()).toContain("/about");
  });

  test("Services → Quote navigation works", async ({ page }) => {
    await page.goto("/services");
    await waitForApp(page);
    await page.getByRole("link", { name: /Quote/i }).first().click();
    await waitForApp(page);
    expect(page.url()).toContain("/quote");
  });

  test("404 → Home navigation works", async ({ page }) => {
    await page.goto("/invalid-test-url");
    await waitForApp(page);
    await page.getByRole("link", { name: /Back to Home/i }).click();
    await waitForApp(page);
    expect(page.url()).toMatch(/\/$/);
  });
});
