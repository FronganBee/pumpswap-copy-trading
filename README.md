# Pumpswap Trading Bot

This bot is designed to automate the distribution of WSOL to their wallet and execute endless buy and sell swap transactions simultaneously on the pumpswap platform. It leverages Solana's blockchain technology to perform these operations efficiently.

## Features

- **Automated WSOL Distribution**: Distributes WSOL to their wallets.
- **Endless Buy and Sell Swaps**: Performs simultaneous buy and sell transactions.
- **Massive Buy Mode**: Enables the get point automatically by marketCap.
- **Sell Mode**: Gradually sells all tokens in their wallet through pnl logic.
- **Logging**: Supports adjustable logging levels for better monitoring and debugging.

## Environment Variables

The bot uses the following environment variables, which should be defined in a `.env` file:

```env
PRIVATE_KEY=                 # Private key for the main wallet
RPC_ENDPOINT=                # RPC endpoint for Solana
RPC_WEBSOCKET_ENDPOINT=      # RPC WebSocket endpoint for Solana
PUMP_SWAP_PROGRAM_ID         # Pumpswap program ID

####### BUY AND SELL SETTING #######
LOWER_MC_INTERVAL= # percent
HIGHER_MC_INTERVAL= # percent
LOWER_TP_INTERVAL= # percent
HIGHER_TP_INTERVAL= # percent

########## FOR SELL MODE ##########
SELL_TIMER=                  # Sell timer
STOP_LOSS=                   # Value for stop loss

#### TOKEN PAIR SETTING ####
TOKEN_MINT=6VbEGuqwhjdgV9NxhMhvRkrFqXVNk53CvD7hK3C3yQS9  # Token mint address

JITO_KEY=                    # Jito key
JITO_FEE=                    # Jito fee
BLOCKENGINE_URL=ny.mainnet.block-engine.jito.wtf  # Block engine URL

###### GENERAL SETTING ######
LOG_LEVEL=info               # Logging level (info, debug, error)
```

## Usage

1. Clone the repository

```
git clone https://github.com/max-tonny8/pumpswap-trading-bot-v0.git
cd pumpswap-trading-bot-v0
```

2. Install dependencies

```
npm install
```

3. Configure the environment variables

Rename the .env.copy file to .env and set RPC and WSS, main keypair's secret key, and jito auth keypair.

4. Run the bot

```
npm start
```

# 👤 Author
### Telegram: [jimmy](https://t.me/jimmy_colla)   
https://t.me/jimmy_colla

### Twitter: [Jimmy](https://x.com/max_tonny8)   
https://x.com/max_tonny8