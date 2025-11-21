# Tinder Mobile App (React Native + Expo)

A Tinder-style swipe application built using **React Native**, **Expo**, **React Query**, **Reanimated v4**, and a **Laravel backend API**.

This app allows users to:
- Browse profiles
- Swipe Right to Like
- Swipe Left to Dislike
- View Liked Profile List
- View Matches (auto-matched based on mutual like)
- Apply Filters (UI-ready)
- View Profile (static)
- Fully supports gesture animations with Reanimated 4

---

## 🚀 Features

### ✔ Swipe Deck  
- Smooth swipe animations  
- Swipe Right → Like  
- Swipe Left → Dislike  
- Auto-remove card after swipe  
- Reanimated + Gesture Handler integrated  

### ✔ API Integration  
Connected to Laravel backend for:
- `/people`
- `/like/{id}`
- `/dislike/{id}`
- `/matches`
- `/liked`

### ✔ Bottom Tabs Implemented
- Home (Swipe Screen)
- Liked (List of liked users)
- Matches (Mutual likes)
- Filters (UI setup)
- Profile (Static UI)

---

## 📦 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React Native | Base framework |
| Expo | Bundler & tooling |
| React Query | API caching |
| Reanimated v4 | Card animation |
| Gesture Handler | Swipe gestures |
| Axios | API calls |

---

## 📁 Project Structure

tinder-mobile/
│
├── src/
│ ├── api/
│ ├── components/
│ ├── hooks/
│ ├── navigation/
│ ├── screens/
│ ├── state/
│ └── utils/
│
├── App.tsx
├── index.js
├── package.json
└── README.md

## ▶️ Running the App

### 1. Install dependencies

npm install

2. Start Expo
npx expo start

3. Run on device

Press a → Android
Press w → Web
Scan QR code with Expo Go

🔗 Backend Repo

This app communicates with the Laravel backend here:
👉 https://github.com/Shailendragautam95/tinder-backend



📧 Developer

Shailendra Gautam
Assignment for Hyperhire

