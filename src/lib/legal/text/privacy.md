# Voicely Text Privacy Policy

**Last updated: August 23, 2026**

Gozar Productions LLC ("Gozar Productions," "we," "us," or "our") operates Voicely Text, a Discord bot that converts eligible Discord messages into speech in a voice channel.

## Information We Process

Voicely Text processes the following information supplied by Discord:

- **Message content:** text submitted for speech or read while autoread is active;
- **Identifiers:** server, channel, role, user, and message IDs needed to route and manage speech;
- **Display information:** usernames, display names, configured nicknames, and names resolved from user, channel, or role mentions;
- **Voice-state information:** the voice channel a user is in and whether the Bot is connected; and
- **Command interactions:** commands, settings, and text submitted directly to the Bot.

Voicely Text **does not record users' voice audio**.

## Information We Store

Voicely Text stores:

- user IDs with autoread, accent/language, region, and nickname preferences;
- server IDs with server defaults, inactivity timeout, integration preference, and administrator-role IDs; and
- encrypted custom nicknames, including optional server-specific nicknames.

The Bot also uses the following temporary information:

- **Runtime state:** message queues, recent-speaker information, skip state, and connection timeouts, kept in memory; and
- **Generated audio:** a temporary MP3 for each spoken message, which the Bot attempts to delete after playback or failure.

**Operational logs:** message text and identifiers may appear in console logs when a message is processed or an error occurs. Logs can therefore contain personal or sensitive content placed in a Discord message. Do not use the Bot to speak information you do not want processed this way.

**We do not directly collect** user accounts, email addresses, payment information, IP addresses, browser information, or precise location.

## Google and Discord Processing

- **gTTS and Google-hosted endpoints:** the open-source gTTS client sends prepared message text and the selected language/region to Google-hosted translation text-to-speech endpoints and receives generated audio. This is **not** the paid Google Cloud Text-to-Speech API. See [Google's Privacy Policy](https://policies.google.com/privacy).
- **Discord:** supplies bot, message, member, and voice-state information and hosts command responses under [Discord's Privacy Policy](https://discord.com/privacy).

## Uses and Sharing

We use information to:

- generate and play speech;
- identify the speaker and pronounce resolved mentions;
- apply user and server preferences;
- connect to the correct voice channel;
- respond to commands; and
- maintain security and troubleshoot errors.

Message text is transmitted through gTTS to Google-hosted endpoints only as needed to generate speech. **We do not sell personal information, use it for targeted advertising, or send stored preferences to advertising providers.** We may disclose information when required by law or reasonably necessary to protect users, the Service, or our rights.

## Retention and Deletion

- **User and server preferences:** retained until removed through available bot commands or a verified request.
- **Server removal:** the current Bot does not automatically delete persistent server preferences when removed from a server.
- **Temporary MP3 files:** intended to be deleted immediately after playback or failure, although a crash may delay cleanup.
- **Runtime state:** cleared when no longer needed or when the Bot restarts.
- **Operational logs:** kept in memory until the Bot restarts and deleted as part of the restart. The Bot is scheduled to restart once each week and may restart sooner for maintenance, updates, or unexpected interruptions.
- **Provider data:** Google and Discord apply their own retention practices.

To request access, correction, or deletion, email [contact@gozarproductions.com](mailto:contact@gozarproductions.com) with the relevant user or server ID and enough information to verify your authority. Limited records may be retained for legal compliance, security, or dispute resolution.

## Security, Children, and International Processing

Custom nicknames are encrypted at rest; other settings are not necessarily encrypted field-by-field. We also use reasonable access controls and data minimization, but no online service is completely secure. Voicely Text is a general-audience service, is not directed to children under 13, and requires users to meet Discord's minimum age for their country.

Information may be processed in the United States and wherever Discord and Google operate. Depending on your location, you may have rights to access, correct, delete, or object to certain processing. We respond to verified requests as required by applicable law.

## Changes and Contact

We may update this policy when the Bot, providers, or applicable requirements change. Questions and privacy requests may be sent to [contact@gozarproductions.com](mailto:contact@gozarproductions.com) or through the [official support server](https://discord.gozarproductions.com).
