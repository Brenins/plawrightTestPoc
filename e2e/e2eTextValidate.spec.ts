import {test, expect} from '@playwright/test';

import * as dotenv from 'dotenv';

dotenv.config();  // Load .env file

// test('CE01 - Acessar página de jogos do nintendo switch', async ({page}) => {
//     await page.goto(process.env.BASE_URL);
//     await page.locator('button[aria-controls=\'GAMES\']').click();
//     await page.getByText('Jogos do console Nintendo Switch').click();
//     await expect(page.getByText('Descubra uma ampla variedade de jogos para a família de sistemas Nintendo Switch™, incluindo os últimos lançamentos, clássicos e títulos multijogador.')).toBeVisible({timeout: 10000});
//     });


let page

test.beforeAll(async ({ browser }) => {
    // Abrir uma nova página no contexto do navegador antes de todos os testes
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(process.env.BASE_URL);
});

test('Verificando titulo TODO', async() =>{
    await expect(page.locator('h1')).toHaveText('TODO', {timeout: 15000});
});

test ('Preenchendo Campo',async () =>{
    const taskName = page.locator('input[placeholder="Add new task"]', {timeout: 15000});
    await taskName.fill('Olá Mundo');
    const addButton = page.locator('button[type="submit"]')
    await expect(addButton).toBeVisible();
    await expect(addButton).toHaveText('Add');
    await addButton.click();
});

test ('Verificando se o que foi criado está aparecendo',async () =>{
    const taskName = page.getByTitle('Olá Mundo',{timeout: 15000});
    await expect(taskName).toBeVisible();
});