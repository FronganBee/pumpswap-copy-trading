import { PublicKey } from "@solana/web3.js";
import { main_menu_display, rl, screen_clear, settings_display } from "./src/menu";
import { readSettings, saveSettingsToFile, sleep } from "./src/utils/utils";
import { buy_monitor_autosell, mainKp } from "./src/layout/buy";
import { sell_token } from "./src/layout/sell";

export const init = () => {
    screen_clear();
    console.log("Pumpswap Trading Bot");

    main_menu_display();

    rl.question("\t[Main] - Choice: ", async (answer: string) => {
        let choice = parseInt(answer);
        switch (choice) {
            case 1:
                show_settings();
                break;
            case 2:
                autoBuy();
                break;
            case 3:
                totalSell();
                break;
            case 4:
                process.exit(1);
            default:
                console.log("\tInvalid choice!");
                await sleep(3000);
                init();
                break;
        }
    })
}

const checkSettings = async () => {
    let data = readSettings()

    console.log("Current settings of Pumpswap Trading bot...")
    console.log(data)
    mainMenuWaiting()
}

const settingsWaiting = () => {
    rl.question('\x1b[32mpress Enter key to continue\x1b[0m', (answer: string) => {
        settings()
    })
}

init()
