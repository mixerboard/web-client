abstract class MusicService {
  abstract authenticate(): void;
  abstract deauthenticate(): void;
  abstract pullLibrary(): Record<string, unknown>;
  abstract pushLibrary(): Record<string, unknown>;
}

export default MusicService;
