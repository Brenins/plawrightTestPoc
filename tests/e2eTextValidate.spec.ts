import {test, expect} from '@playwright/test';

import * as dotenv from 'dotenv';
import * as timers from "node:timers";

dotenv.config();  // Load .env file

test('CE01 - Acessar página de jogos do nintendo switch', async ({page}) => {
    await page.goto(process.env.BASE_URL);
    await page.locator('button[aria-controls=\'GAMES\']').click();
    await page.getByText('Jogos do console Nintendo Switch').click();
    await expect(page.getByText('Descubra uma ampla variedade de jogos para a família de sistemas Nintendo Switch™, incluindo os últimos lançamentos, clássicos e títulos multijogador.')).toBeVisible({timeout: 10000});
    });