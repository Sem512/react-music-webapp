# **BeatBlend: A Responsive Music Streaming Platform**

**BeatBlend** is a sleek and responsive music streaming application that delivers a seamless user experience for discovering, playing, and managing music tracks. Built with modern web technologies, it features dynamic search, audio playback, and a customizable favorites library, all powered by a custom AWS API proxy server for enhanced performance.

---

## **Features**
- **Audio Playback**:
  - Play, pause, rewind, forward, and loop tracks with intuitive controls.
  - Volume control and playback progress tracking powered by **Howler.js**.

- **Dynamic Search**:
  - Search for tracks, albums, and artists using the **Deezer API** via a self-made AWS proxy server.
  - View detailed information about each track, including album art and duration.

- **Favorites Management**:
  - Add and remove tracks from your favorites.
  - Persist your favorite tracks across sessions using `localStorage`.

- **Routing**:
  - Navigate seamlessly between pages like Home, Genres, Favorites, and Playlists using **React Router**.
  - Maintain state and UI consistency during navigation.

- **Responsive Design**:
  - Optimized for desktop and mobile devices with a modern, minimalist UI.
  - Adaptive components for seamless navigation and playback on any screen size.

- **Interactive Sidebar**:
  - Navigate through Home, Genres, Favorites, and Playlists with an easy-to-use sidebar.

---

## **Tech Stack**
- **Frontend**: React, CSS (Responsive Design)
- **Audio Library**: Howler.js
- **API**: Deezer API for music data retrieval
- **Proxy Server**: Self-made AWS API for handling API requests securely
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Routing**: React Router for seamless page transitions
- **Local Storage**: For persisting favorites across sessions

