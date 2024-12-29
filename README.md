# LinguaQuest

LinguaQuest is a Web3-based language learning platform where users can learn languages (such as English, Spanish, etc.) through the Edu Chain, which promotes education by incentivizing users with rewards like Soulbound tokens or NFTs for completing lessons. The platform also offers features such as staking and peer learning (Buddy), making the experience more engaging and helping to retain users on the Edu Chain.

## Features

- **Wallet Authentication**: Users connect their wallets using WalletConnect.

- **Smart Contract**: Tracks lesson completion and progress for each user.

- **Progress Tracking**: Allows users to update and view their lesson progress.

- **Frontend Integration**: Displays real-time progress by interacting with the smart contract.

- **Staking Mechanism**: Users can stake tokens to unlock additional features or earn rewards as they learn.

- **NFT Rewards**: Users receive Soulbound tokens or NFTs upon completing lessons, serving as proof of learning achievements.

## Technologies Used

- **Frontend**: Next.js 14

- **Blockchain Interaction**: Wagmi, viem, and Web3Modal SDK

- **Smart Contract**: Solidity

- **Blockchain Network**: Compatible with Ethereum and other EVM chains

## Prerequisites

1. Node.js and npm/yarn/pnpm installed.

2. A WalletConnect Cloud Project ID (sign up at WalletConnect Cloud).

3. A blockchain development environment like Hardhat or Remix.

## Getting Started

1. Clone the Repository

```bash
git clone https://github.com/<your-username>/Lingua-quest-v3.1.git
cd Lingua-quest-v3.1
```

2. Install Dependencies

```bash
npm install
```

3. Set Up Environment Variables

Create a `.env.local` file in the project root and add your WalletConnect Project ID:

```bash
NEXT_PUBLIC_PROJECT_ID=your_project_id
```
Replace `your_project_id` with your WalletConnect Cloud Project ID.

## Future Enhancements

- Add a leaderboard to showcase top-performing users.

- Support for multiple languages and lessons.

- Implement staking rewards for consistent learners.
