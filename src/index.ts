import { PublicKey } from "@solana/web3.js";
import { main_menu_display, rl, screen_clear } from "./cli";
import { readSettings, saveSettingsToFile, sleep } from "./utils/utils";
import { autoBuy } from "./layout/buy";
import { totalSell } from "./layout/sell";

export const init = () => {
    screen_clear();
    console.log("Pumpswap Trading Bot");

    main_menu_display();

    rl.question("\t[Main] - Choice: ", async (answer: string) => {
        let choice = parseInt(answer);
        switch (choice) {
            case 1:
                checkSettings();
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
}

init()
