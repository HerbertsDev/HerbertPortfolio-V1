import { expect, test } from "@playwright/test";

test("apresenta as seis seções, os projetos e metadados em português", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    /Olá, eu sou\s*Herbert\./,
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(page).toHaveTitle(
    "Herbert da Silva da Cruz | Desenvolvedor de Software",
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Portfólio de Herbert/,
  );
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "pt_BR",
  );
  await expect(page.locator("main section")).toHaveCount(6);
  await expect(page.locator("#projetos article")).toHaveCount(3);
  await expect(
    page.getByRole("heading", { name: "StockFlow Database" }),
  ).toBeVisible();
  await expect(page.locator("#projetos")).toContainText(
    "sem aplicativo publicado",
  );
  await expect(page.locator("#experiencia")).toContainText("Zetheta");
  await expect(page.locator("#experiencia")).toContainText("Foundever");
  await expect(page.locator("#experiencia")).toContainText("Randstad Digital");
  await expect(page.locator("#experiencia")).toContainText(
    "Analista de Redes Jr / Suporte de TI",
  );
  await expect(page.locator("#experiencia")).toContainText(
    "Desenvolvedor Back-End",
  );
  await expect(page.locator("#experiencia")).toContainText(
    "Analista de Suporte Técnico N1",
  );
  await expect(page.locator("#experiencia")).toContainText(
    "Banco de Dados com SQL",
  );
  await expect(page.locator("#projetos img")).toHaveCount(3);
  await expect(page.locator(".profile-photo")).toBeVisible();
  await expect(page.locator(".certification-item")).toHaveCount(6);
  await expect(
    page.getByRole("link", { name: "Baixar currículo", exact: true }).first(),
  ).toHaveAttribute("href", "/curriculo-herbert-da-silva-da-cruz.pdf");
  for (const image of await page.locator("#projetos img").all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty("complete", true);
    expect(
      await image.evaluate((element) => element.naturalWidth),
    ).toBeGreaterThan(0);
  }
  expect(errors).toEqual([]);
});

test("navega para seções e fecha o menu no celular", async ({ page }) => {
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Abrir menu" });
  const mobile = await toggle.isVisible();
  const navigation = page.getByRole("navigation", {
    name: "Navegação principal",
  });
  if (mobile) {
    await expect(navigation).toBeHidden();
    await toggle.click();
    await expect(
      page.getByRole("button", { name: "Fechar menu" }),
    ).toHaveAttribute("aria-expanded", "true");
    await expect(navigation).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(navigation).toBeHidden();
    await expect(toggle).toBeFocused();
    await toggle.press("Enter");
  }
  await navigation.getByRole("link", { name: "Projetos", exact: true }).click();
  await expect(page).toHaveURL(/#projetos$/);
  await expect(page.locator("#titulo-projetos")).toBeInViewport();
  if (mobile) {
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(navigation).toBeHidden();
  }
});

test("todos os links têm destinos reais e os links não fornecidos ficam ocultos", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("#titulo-inicio")).toBeVisible();
  const links = await page.locator("a").evaluateAll((elements) =>
    elements.map((element) => ({
      href: element.getAttribute("href") ?? "",
      targetExists: element.hash
        ? !!document.getElementById(decodeURIComponent(element.hash.slice(1)))
        : true,
    })),
  );
  for (const link of links) {
    expect(link.href).not.toBe("");
    expect(link.href).not.toBe("#");
    expect(link.targetExists).toBe(true);
    expect(link.href).toMatch(
      /^(#|mailto:herbertdasilvadacruz@outlook\.com$|tel:\+5511914198063$|https:\/\/github\.com\/HerbertsDev(?:\/[A-Za-z0-9._-]+)?$|https:\/\/www\.linkedin\.com\/in\/herbert-da-silva-da-cruz-b001942b0\/$|\/curriculo-herbert-da-silva-da-cruz\.pdf$|\/certificados\/[a-z0-9-]+\.(?:pdf|jpg)$)/,
    );
  }
  await expect(
    page.getByRole("link", { name: "Enviar e-mail", exact: false }),
  ).toHaveAttribute("href", "mailto:herbertdasilvadacruz@outlook.com");
  await expect(page.getByRole("link", { name: "(11) 91419-8063" })).toHaveAttribute(
    "href",
    "tel:+5511914198063",
  );
  await expect(page.locator("#projetos a")).toHaveCount(2);
  await expect(
    page.getByRole("link", { name: "GitHub (abre em nova aba)" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "LinkedIn (abre em nova aba)" }).first(),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Figma|Demonstração/ }),
  ).toHaveCount(0);
});

test("destaca a busca por estágio no celular", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".hero-availability")).toBeVisible();
  await expect(page.locator(".hero-availability")).toHaveText(
    "Em busca de uma oportunidade de estágio",
  );
});

test("permite pular a navegação usando o teclado", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Pular para o conteúdo" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Ver projetos", exact: false }),
  ).toBeFocused();
});

test("respeita a preferência de movimento reduzido", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("#titulo-inicio")).toBeVisible();
  expect(
    await page
      .locator("html")
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe("auto");
  await page.getByRole("link", { name: "Ver projetos", exact: false }).click();
  await expect(page.locator("#titulo-projetos")).toBeInViewport();
});

test("mantém o conteúdo dentro da tela, inclusive com texto ampliado", async ({
  page,
}) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator("#titulo-inicio")).toBeVisible();
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(width);
    await page.locator("#contato").scrollIntoViewIfNeeded();
    await expect(
      page.getByRole("link", { name: "Enviar e-mail", exact: false }),
    ).toBeInViewport();
  }
  await page.setViewportSize({ width: 390, height: 900 });
  await page.addStyleTag({ content: "html { font-size: 200%; }" });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
});
