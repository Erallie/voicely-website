# Voicely Translate Privacy Policy

**Last updated: August 23, 2026**

Gozar Productions LLC ("Gozar Productions," "we," "us," or "our") operates Voicely Translate, a Discord bot that transcribes speech from an active voice channel and posts translations in Discord.

## Information We Process

Voicely Translate processes the following information:

- **Voice audio:** speech and other audio received from participants while a translation session is active;
- **Discord identifiers:** server, voice-channel, user, member, message, and command-interaction IDs;
- **Speaker information:** the Discord user associated with an audio stream and the display information used to attribute posted results;
- **Voice-state information:** participants joining, leaving, or moving in the selected voice channel;
- **Language settings:** selected translation-language tags and saved server defaults;
- **Server information:** the server locale and configured idle timeout; and
- **Service interactions:** commands, session notices, credit notices, and billing-related events.

To provide live translation, the Bot separates audio by Discord user, detects speech, and temporarily buffers individual utterances before sending them for transcription.

## Information We Store

The Bot stores:

- **Server configuration:** server ID, idle timeout, default languages, and whether the trial notice was shown;
- **Credit information:** a server-specific activation code, trial balance, paid balance, total purchased amount, and total used amount;
- **Usage totals:** separate aggregate transcription and translation usage amounts; and
- **Payment-event records:** event/message ID, server ID, credited amount, and timestamp used to prevent duplicate crediting and investigate billing issues.

**The Bot does not intentionally store permanent voice recordings or a separate transcript archive in its database.** Transcripts and translations posted to Discord remain Discord messages under the server's permissions and Discord's retention practices.

Operational logs may contain:

- server and user identifiers;
- audio duration and speech-detection information;
- usage and cost totals;
- errors and diagnostic details; and
- the transcript text returned by OpenAI.

Logs may therefore contain personal or sensitive information spoken during a session.

## OpenAI Processing

The Bot sends buffered voice audio, an allowed-language prompt, and related metadata to OpenAI's API for transcription. It then sends the transcript and selected languages to OpenAI for language identification and translation. OpenAI states that API inputs and outputs may be retained in abuse-monitoring logs for up to 30 days by default unless different approved controls apply, and that API data is not used to train models unless the customer opts in. See [OpenAI's API data controls](https://platform.openai.com/docs/models/default-usage-policies-by-endpoint).

The Bot holds each audio buffer and response in memory for the live workflow and releases it when no longer needed. A crash or provider-side processing may affect exact deletion timing.

## Discord, Ko-fi, and Cloudflare

- **Discord:** supplies voice and application data and hosts posted messages under [Discord's Privacy Policy](https://discord.com/privacy).
- **Ko-fi:** may process credit purchases under [Ko-fi's Privacy Policy](https://more.ko-fi.com/privacy). The integration receives limited event information such as an event/message ID, amount, currency, timestamp, activation code, and associated server ID—**not full card details**.
- **Cloudflare:** a Cloudflare Worker may receive purchase-webhook information and store activation and top-up records used to assign credits under [Cloudflare's Privacy Policy](https://www.cloudflare.com/privacypolicy/).

## Uses and Sharing

We use information to:

- transcribe speech, identify its language, and produce translations;
- attribute posted output to the correct speaker;
- apply server settings and language choices;
- calculate usage, manage balances, and credit purchases;
- prevent duplicate payment claims;
- troubleshoot errors and protect the Service; and
- comply with legal obligations.

We disclose information to OpenAI, Discord, Ko-fi, Cloudflare, and other providers only as needed for these purposes. **We do not sell personal information or use it for targeted advertising.** Limited information may be disclosed when legally required or reasonably necessary to prevent fraud or protect safety and rights.

## Retention and Deletion

- **Voice buffers and generated text:** remain in Bot memory only for the active processing workflow.
- **Posted transcripts and translations:** remain on Discord until deleted there.
- **Operational logs:** retained only as reasonably needed for troubleshooting, billing, security, and maintenance, then overwritten or deleted according to the hosting environment.
- **Server settings and credit records:** retained while needed to deliver purchased credits, maintain accurate accounting, prevent duplicate claims, meet legal or tax obligations, and resolve disputes.
- **Server removal:** removing the Bot does not automatically erase billing records or unused credits.

To request access, correction, or deletion, email [contact@gozarproductions.com](mailto:contact@gozarproductions.com) with relevant IDs and enough information to verify your authority. Some billing, security, or legal records may need to remain. Discord-message deletion ordinarily must be handled through Discord or server administrators.

## Voice Notice and Consent

Server administrators and the person starting a session are responsible for giving participants appropriate notice and obtaining consent where required. The Bot posts a join notice, but local recording, interception, wiretap, biometric, employment, or privacy law may require more. Do not use the Service for covert monitoring.

## Security, Children, and International Processing

We use reasonable safeguards and data minimization, but no service is completely secure. Avoid speaking highly sensitive information while the Bot is active. Voicely Translate is a general-audience service, is not directed to children under 13, and requires users to meet Discord's minimum age for their country.

Information may be processed in the United States and wherever providers operate. Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing. We respond to verified requests as required by applicable law.

## Changes and Contact

We may update this policy when the Bot, providers, or applicable requirements change. Questions and privacy requests may be sent to [contact@gozarproductions.com](mailto:contact@gozarproductions.com) or through the [official support server](https://discord.gozarproductions.com).
