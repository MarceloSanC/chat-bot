"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var _default = exports.default = {
  secretKey: 'BIXTOKEN',
  host: '3.85.210.237',
  port: '5001',
  deviceName: 'WppConnect',
  poweredBy: 'WPPConnect-Server',
  startAllSession: true,
  tokenStoreType: 'file',
  maxListeners: 15,
  customUserDataDir: './userDataDir/',
  webhook: {
    url: null,
    autoDownload: true,
    uploadS3: false,
    readMessage: true,
    allUnreadOnStart: false,
    listenAcks: true,
    onPresenceChanged: true,
    onParticipantsChanged: true,
    onReactionMessage: true,
    onPollResponse: true,
    onRevokedMessage: true,
    onLabelUpdated: true,
    onSelfMessage: false,
    ignore: ['status@broadcast']
  },
  websocket: {
    autoDownload: false,
    uploadS3: false
  },
  chatwoot: {
    sendQrCode: true,
    sendStatus: true
  },
  archive: {
    enable: false,
    waitTime: 10,
    daysToArchive: 45
  },
  log: {
    level: 'silly', // Before open a issue, change level to silly and retry a action
    logger: ['console', 'file']
  },
  createOptions: {
    browserArgs: [
    '--disable-web-security',
    '--no-sandbox',
    '--disable-web-security',
    '--aggressive-cache-discard',
    '--disable-cache',
    '--disable-application-cache',
    '--disable-offline-load-stale-cache',
    '--disk-cache-size=0',
    '--disable-background-networking',
    '--disable-default-apps',
    '--disable-extensions',
    '--disable-sync',
    '--disable-translate',
    '--hide-scrollbars',
    '--metrics-recording-only',
    '--mute-audio',
    '--no-first-run',
    '--safebrowsing-disable-auto-update',
    '--ignore-certificate-errors',
    '--ignore-ssl-errors',
    '--ignore-certificate-errors-spki-list'],

    /**
     * Example of configuring the linkPreview generator
     * If you set this to 'null', it will use global servers; however, you have the option to define your own server
     * Clone the repository https://github.com/wppconnect-team/wa-js-api-server and host it on your server with ssl
     *
     * Configure the attribute as follows:
     * linkPreviewApiServers: [ 'https://www.yourserver.com/wa-js-api-server' ]
     */
    linkPreviewApiServers: null
  },
  mapper: {
    enable: false,
    prefix: 'tagone-'
  },
  db: {
    mongodbDatabase: 'tokens',
    mongodbCollection: '',
    mongodbUser: '',
    mongodbPassword: '',
    mongodbHost: '',
    mongoIsRemote: true,
    mongoURLRemote: '',
    mongodbPort: 27017,
    redisHost: 'localhost',
    redisPort: 6379,
    redisPassword: '',
    redisDb: 0,
    redisPrefix: 'docker'
  },
  aws_s3: {
    region: 'sa-east-1',
    access_key_id: null,
    secret_key: null,
    defaultBucketName: null,
    endpoint: null,
    forcePathStyle: null
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzZWNyZXRLZXkiLCJob3N0IiwicG9ydCIsImRldmljZU5hbWUiLCJwb3dlcmVkQnkiLCJzdGFydEFsbFNlc3Npb24iLCJ0b2tlblN0b3JlVHlwZSIsIm1heExpc3RlbmVycyIsImN1c3RvbVVzZXJEYXRhRGlyIiwid2ViaG9vayIsInVybCIsImF1dG9Eb3dubG9hZCIsInVwbG9hZFMzIiwicmVhZE1lc3NhZ2UiLCJhbGxVbnJlYWRPblN0YXJ0IiwibGlzdGVuQWNrcyIsIm9uUHJlc2VuY2VDaGFuZ2VkIiwib25QYXJ0aWNpcGFudHNDaGFuZ2VkIiwib25SZWFjdGlvbk1lc3NhZ2UiLCJvblBvbGxSZXNwb25zZSIsIm9uUmV2b2tlZE1lc3NhZ2UiLCJvbkxhYmVsVXBkYXRlZCIsIm9uU2VsZk1lc3NhZ2UiLCJpZ25vcmUiLCJ3ZWJzb2NrZXQiLCJjaGF0d29vdCIsInNlbmRRckNvZGUiLCJzZW5kU3RhdHVzIiwiYXJjaGl2ZSIsImVuYWJsZSIsIndhaXRUaW1lIiwiZGF5c1RvQXJjaGl2ZSIsImxvZyIsImxldmVsIiwibG9nZ2VyIiwiY3JlYXRlT3B0aW9ucyIsImJyb3dzZXJBcmdzIiwibGlua1ByZXZpZXdBcGlTZXJ2ZXJzIiwibWFwcGVyIiwicHJlZml4IiwiZGIiLCJtb25nb2RiRGF0YWJhc2UiLCJtb25nb2RiQ29sbGVjdGlvbiIsIm1vbmdvZGJVc2VyIiwibW9uZ29kYlBhc3N3b3JkIiwibW9uZ29kYkhvc3QiLCJtb25nb0lzUmVtb3RlIiwibW9uZ29VUkxSZW1vdGUiLCJtb25nb2RiUG9ydCIsInJlZGlzSG9zdCIsInJlZGlzUG9ydCIsInJlZGlzUGFzc3dvcmQiLCJyZWRpc0RiIiwicmVkaXNQcmVmaXgiLCJhd3NfczMiLCJyZWdpb24iLCJhY2Nlc3Nfa2V5X2lkIiwic2VjcmV0X2tleSIsImRlZmF1bHRCdWNrZXROYW1lIiwiZW5kcG9pbnQiLCJmb3JjZVBhdGhTdHlsZSJdLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25maWcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2VydmVyT3B0aW9ucyB9IGZyb20gJy4vdHlwZXMvU2VydmVyT3B0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2VjcmV0S2V5OiAnVEhJU0lTTVlTRUNVUkVUT0tFTicsXG4gIGhvc3Q6ICdodHRwOi8vbG9jYWxob3N0JyxcbiAgcG9ydDogJzIxNDY1JyxcbiAgZGV2aWNlTmFtZTogJ1dwcENvbm5lY3QnLFxuICBwb3dlcmVkQnk6ICdXUFBDb25uZWN0LVNlcnZlcicsXG4gIHN0YXJ0QWxsU2Vzc2lvbjogdHJ1ZSxcbiAgdG9rZW5TdG9yZVR5cGU6ICdmaWxlJyxcbiAgbWF4TGlzdGVuZXJzOiAxNSxcbiAgY3VzdG9tVXNlckRhdGFEaXI6ICcuL3VzZXJEYXRhRGlyLycsXG4gIHdlYmhvb2s6IHtcbiAgICB1cmw6IG51bGwsXG4gICAgYXV0b0Rvd25sb2FkOiB0cnVlLFxuICAgIHVwbG9hZFMzOiBmYWxzZSxcbiAgICByZWFkTWVzc2FnZTogdHJ1ZSxcbiAgICBhbGxVbnJlYWRPblN0YXJ0OiBmYWxzZSxcbiAgICBsaXN0ZW5BY2tzOiB0cnVlLFxuICAgIG9uUHJlc2VuY2VDaGFuZ2VkOiB0cnVlLFxuICAgIG9uUGFydGljaXBhbnRzQ2hhbmdlZDogdHJ1ZSxcbiAgICBvblJlYWN0aW9uTWVzc2FnZTogdHJ1ZSxcbiAgICBvblBvbGxSZXNwb25zZTogdHJ1ZSxcbiAgICBvblJldm9rZWRNZXNzYWdlOiB0cnVlLFxuICAgIG9uTGFiZWxVcGRhdGVkOiB0cnVlLFxuICAgIG9uU2VsZk1lc3NhZ2U6IGZhbHNlLFxuICAgIGlnbm9yZTogWydzdGF0dXNAYnJvYWRjYXN0J10sXG4gIH0sXG4gIHdlYnNvY2tldDoge1xuICAgIGF1dG9Eb3dubG9hZDogZmFsc2UsXG4gICAgdXBsb2FkUzM6IGZhbHNlLFxuICB9LFxuICBjaGF0d29vdDoge1xuICAgIHNlbmRRckNvZGU6IHRydWUsXG4gICAgc2VuZFN0YXR1czogdHJ1ZSxcbiAgfSxcbiAgYXJjaGl2ZToge1xuICAgIGVuYWJsZTogZmFsc2UsXG4gICAgd2FpdFRpbWU6IDEwLFxuICAgIGRheXNUb0FyY2hpdmU6IDQ1LFxuICB9LFxuICBsb2c6IHtcbiAgICBsZXZlbDogJ3NpbGx5JywgLy8gQmVmb3JlIG9wZW4gYSBpc3N1ZSwgY2hhbmdlIGxldmVsIHRvIHNpbGx5IGFuZCByZXRyeSBhIGFjdGlvblxuICAgIGxvZ2dlcjogWydjb25zb2xlJywgJ2ZpbGUnXSxcbiAgfSxcbiAgY3JlYXRlT3B0aW9uczoge1xuICAgIGJyb3dzZXJBcmdzOiBbXG4gICAgICAnLS1kaXNhYmxlLXdlYi1zZWN1cml0eScsXG4gICAgICAnLS1uby1zYW5kYm94JyxcbiAgICAgICctLWRpc2FibGUtd2ViLXNlY3VyaXR5JyxcbiAgICAgICctLWFnZ3Jlc3NpdmUtY2FjaGUtZGlzY2FyZCcsXG4gICAgICAnLS1kaXNhYmxlLWNhY2hlJyxcbiAgICAgICctLWRpc2FibGUtYXBwbGljYXRpb24tY2FjaGUnLFxuICAgICAgJy0tZGlzYWJsZS1vZmZsaW5lLWxvYWQtc3RhbGUtY2FjaGUnLFxuICAgICAgJy0tZGlzay1jYWNoZS1zaXplPTAnLFxuICAgICAgJy0tZGlzYWJsZS1iYWNrZ3JvdW5kLW5ldHdvcmtpbmcnLFxuICAgICAgJy0tZGlzYWJsZS1kZWZhdWx0LWFwcHMnLFxuICAgICAgJy0tZGlzYWJsZS1leHRlbnNpb25zJyxcbiAgICAgICctLWRpc2FibGUtc3luYycsXG4gICAgICAnLS1kaXNhYmxlLXRyYW5zbGF0ZScsXG4gICAgICAnLS1oaWRlLXNjcm9sbGJhcnMnLFxuICAgICAgJy0tbWV0cmljcy1yZWNvcmRpbmctb25seScsXG4gICAgICAnLS1tdXRlLWF1ZGlvJyxcbiAgICAgICctLW5vLWZpcnN0LXJ1bicsXG4gICAgICAnLS1zYWZlYnJvd3NpbmctZGlzYWJsZS1hdXRvLXVwZGF0ZScsXG4gICAgICAnLS1pZ25vcmUtY2VydGlmaWNhdGUtZXJyb3JzJyxcbiAgICAgICctLWlnbm9yZS1zc2wtZXJyb3JzJyxcbiAgICAgICctLWlnbm9yZS1jZXJ0aWZpY2F0ZS1lcnJvcnMtc3BraS1saXN0JyxcbiAgICBdLFxuICAgIC8qKlxuICAgICAqIEV4YW1wbGUgb2YgY29uZmlndXJpbmcgdGhlIGxpbmtQcmV2aWV3IGdlbmVyYXRvclxuICAgICAqIElmIHlvdSBzZXQgdGhpcyB0byAnbnVsbCcsIGl0IHdpbGwgdXNlIGdsb2JhbCBzZXJ2ZXJzOyBob3dldmVyLCB5b3UgaGF2ZSB0aGUgb3B0aW9uIHRvIGRlZmluZSB5b3VyIG93biBzZXJ2ZXJcbiAgICAgKiBDbG9uZSB0aGUgcmVwb3NpdG9yeSBodHRwczovL2dpdGh1Yi5jb20vd3BwY29ubmVjdC10ZWFtL3dhLWpzLWFwaS1zZXJ2ZXIgYW5kIGhvc3QgaXQgb24geW91ciBzZXJ2ZXIgd2l0aCBzc2xcbiAgICAgKlxuICAgICAqIENvbmZpZ3VyZSB0aGUgYXR0cmlidXRlIGFzIGZvbGxvd3M6XG4gICAgICogbGlua1ByZXZpZXdBcGlTZXJ2ZXJzOiBbICdodHRwczovL3d3dy55b3Vyc2VydmVyLmNvbS93YS1qcy1hcGktc2VydmVyJyBdXG4gICAgICovXG4gICAgbGlua1ByZXZpZXdBcGlTZXJ2ZXJzOiBudWxsLFxuICB9LFxuICBtYXBwZXI6IHtcbiAgICBlbmFibGU6IGZhbHNlLFxuICAgIHByZWZpeDogJ3RhZ29uZS0nLFxuICB9LFxuICBkYjoge1xuICAgIG1vbmdvZGJEYXRhYmFzZTogJ3Rva2VucycsXG4gICAgbW9uZ29kYkNvbGxlY3Rpb246ICcnLFxuICAgIG1vbmdvZGJVc2VyOiAnJyxcbiAgICBtb25nb2RiUGFzc3dvcmQ6ICcnLFxuICAgIG1vbmdvZGJIb3N0OiAnJyxcbiAgICBtb25nb0lzUmVtb3RlOiB0cnVlLFxuICAgIG1vbmdvVVJMUmVtb3RlOiAnJyxcbiAgICBtb25nb2RiUG9ydDogMjcwMTcsXG4gICAgcmVkaXNIb3N0OiAnbG9jYWxob3N0JyxcbiAgICByZWRpc1BvcnQ6IDYzNzksXG4gICAgcmVkaXNQYXNzd29yZDogJycsXG4gICAgcmVkaXNEYjogMCxcbiAgICByZWRpc1ByZWZpeDogJ2RvY2tlcicsXG4gIH0sXG4gIGF3c19zMzoge1xuICAgIHJlZ2lvbjogJ3NhLWVhc3QtMScgYXMgYW55LFxuICAgIGFjY2Vzc19rZXlfaWQ6IG51bGwsXG4gICAgc2VjcmV0X2tleTogbnVsbCxcbiAgICBkZWZhdWx0QnVja2V0TmFtZTogbnVsbCxcbiAgICBlbmRwb2ludDogbnVsbCxcbiAgICBmb3JjZVBhdGhTdHlsZTogbnVsbCxcbiAgfSxcbn0gYXMgdW5rbm93biBhcyBTZXJ2ZXJPcHRpb25zO1xuIl0sIm1hcHBpbmdzIjoiOztBQUVlO0VBQ2JBLFNBQVMsRUFBRSxxQkFBcUI7RUFDaENDLElBQUksRUFBRSxrQkFBa0I7RUFDeEJDLElBQUksRUFBRSxPQUFPO0VBQ2JDLFVBQVUsRUFBRSxZQUFZO0VBQ3hCQyxTQUFTLEVBQUUsbUJBQW1CO0VBQzlCQyxlQUFlLEVBQUUsSUFBSTtFQUNyQkMsY0FBYyxFQUFFLE1BQU07RUFDdEJDLFlBQVksRUFBRSxFQUFFO0VBQ2hCQyxpQkFBaUIsRUFBRSxnQkFBZ0I7RUFDbkNDLE9BQU8sRUFBRTtJQUNQQyxHQUFHLEVBQUUsSUFBSTtJQUNUQyxZQUFZLEVBQUUsSUFBSTtJQUNsQkMsUUFBUSxFQUFFLEtBQUs7SUFDZkMsV0FBVyxFQUFFLElBQUk7SUFDakJDLGdCQUFnQixFQUFFLEtBQUs7SUFDdkJDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCQyxxQkFBcUIsRUFBRSxJQUFJO0lBQzNCQyxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCQyxjQUFjLEVBQUUsSUFBSTtJQUNwQkMsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QkMsY0FBYyxFQUFFLElBQUk7SUFDcEJDLGFBQWEsRUFBRSxLQUFLO0lBQ3BCQyxNQUFNLEVBQUUsQ0FBQyxrQkFBa0I7RUFDN0IsQ0FBQztFQUNEQyxTQUFTLEVBQUU7SUFDVGIsWUFBWSxFQUFFLEtBQUs7SUFDbkJDLFFBQVEsRUFBRTtFQUNaLENBQUM7RUFDRGEsUUFBUSxFQUFFO0lBQ1JDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxVQUFVLEVBQUU7RUFDZCxDQUFDO0VBQ0RDLE9BQU8sRUFBRTtJQUNQQyxNQUFNLEVBQUUsS0FBSztJQUNiQyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxhQUFhLEVBQUU7RUFDakIsQ0FBQztFQUNEQyxHQUFHLEVBQUU7SUFDSEMsS0FBSyxFQUFFLE9BQU8sRUFBRTtJQUNoQkMsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU07RUFDNUIsQ0FBQztFQUNEQyxhQUFhLEVBQUU7SUFDYkMsV0FBVyxFQUFFO0lBQ1gsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0Isb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQix1Q0FBdUMsQ0FDeEM7O0lBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNJQyxxQkFBcUIsRUFBRTtFQUN6QixDQUFDO0VBQ0RDLE1BQU0sRUFBRTtJQUNOVCxNQUFNLEVBQUUsS0FBSztJQUNiVSxNQUFNLEVBQUU7RUFDVixDQUFDO0VBQ0RDLEVBQUUsRUFBRTtJQUNGQyxlQUFlLEVBQUUsUUFBUTtJQUN6QkMsaUJBQWlCLEVBQUUsRUFBRTtJQUNyQkMsV0FBVyxFQUFFLEVBQUU7SUFDZkMsZUFBZSxFQUFFLEVBQUU7SUFDbkJDLFdBQVcsRUFBRSxFQUFFO0lBQ2ZDLGFBQWEsRUFBRSxJQUFJO0lBQ25CQyxjQUFjLEVBQUUsRUFBRTtJQUNsQkMsV0FBVyxFQUFFLEtBQUs7SUFDbEJDLFNBQVMsRUFBRSxXQUFXO0lBQ3RCQyxTQUFTLEVBQUUsSUFBSTtJQUNmQyxhQUFhLEVBQUUsRUFBRTtJQUNqQkMsT0FBTyxFQUFFLENBQUM7SUFDVkMsV0FBVyxFQUFFO0VBQ2YsQ0FBQztFQUNEQyxNQUFNLEVBQUU7SUFDTkMsTUFBTSxFQUFFLFdBQWtCO0lBQzFCQyxhQUFhLEVBQUUsSUFBSTtJQUNuQkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLGlCQUFpQixFQUFFLElBQUk7SUFDdkJDLFFBQVEsRUFBRSxJQUFJO0lBQ2RDLGNBQWMsRUFBRTtFQUNsQjtBQUNGLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=