import{A as e,B as t,D as n,I as r,M as i,N as a,T as o,U as s,W as c,_ as l,c as u,f as d,g as f,h as p,j as m,l as ee,o as h,s as te,x as g,y as _,z as ne}from"../chunks/D1pqj1Ks.js";import"../chunks/xihTtKlq.js";import{n as v}from"../chunks/C2iTDz9h.js";import{t as y}from"../chunks/DRByVC-c.js";var b=c({entries:()=>re,load:()=>x}),re=()=>[`text`,`ping`,`role`,`translate`].flatMap(e=>[`docs`,`privacy`,`terms`].map(t=>({bot:e,section:t})));function x({params:e}){let t=v(e.bot);return(!t||![`docs`,`privacy`,`terms`].includes(e.section))&&y(404,`Page not found`),{bot:t,section:e.section}}var ie={text:{privacy:`# **Privacy Policy**

**Last Updated:** March 31, 2025

Gozar Productions LLC ("Company," "we," "us," or "our") values your privacy. This Privacy Policy explains how we collect, use, store, and disclose information when you use our text-to-speech bot, **Voicely Text** (the "Service").

By using the Service, you acknowledge that you have read and understood this Privacy Policy. If you do not agree, please discontinue use of the Service.

## **1\\. Information We Collect**

We do not collect personally identifiable information beyond what is necessary for the Service's functionality. The following data is processed:

-   **Discord User ID & Server ID:**
    
    -   **User IDs** are stored in a JSON file to maintain user preferences.
    -   **Server IDs** are stored in a JSON file to maintain server settings.
    -   Both are also temporarily logged for **debugging purposes** and deleted when the bot restarts.
-   **Message Content:**
    
    -   Used to generate text-to-speech (TTS) files, which are **immediately deleted** after processing.
    -   Temporarily logged for **debugging purposes** and deleted when the bot restarts.
        -   If a message contains a **Discord @mention**, the bot-specific nickname or server nickname of the mentioned user may be **temporarily included in logs** but is **deleted upon bot restart**.
    -   Includes bot commands used to set **User & Server Preferences**, which are stored in a JSON file:
        -   **Autoread:** Controls whether messages are automatically read when the user joins a voice channel (\`true\` or \`false\`).
        -   **Accent:** A supported IETF language tag that determines the bot's voice.
        -   **Region:** A specified top-level domain that affects the accent. The supported top-level domains include those listed on [Google's supported domains](https://www.google.com/supported_domains), plus \`us\`.
        -   **Nickname & Server-Specific Nicknames:** Custom text specified by the user, used when the bot refers to them (e.g., when announcing a text-to-speech message). **Nicknames are encrypted at rest.**
        -   **Server Settings:**
            -   **Autoread** (default for the server).
            -   **Accent** (default for the server).
            -   **Region** (default for the server).
            -   **Timeout:** An integer value specifying the duration of inactivity before the bot automatically leaves the voice channel.
            -   **Admin Roles:** A list of server role IDs that have access to admin-only commands.
-   **Channel IDs:**
    
    -   **Temporarily included in logs** for debugging purposes and **deleted upon bot restart**.

We **do not** collect or process sensitive personal information (e.g., names, email addresses, IP addresses).

## **2\\. How We Use Your Information**

We use the collected data **exclusively** to:

-   Provide and improve the **Voicely Text** Service.
-   Store and apply **user and server preferences**, including nicknames.
-   Debug and troubleshoot errors via **temporary logs** (deleted upon bot restart).

We do **not** sell, trade, or share user data with third parties.

## **3\\. Data Retention & Deletion**

We retain your data **only as long as necessary**:

-   **User & Server Preferences:** Stored indefinitely unless deleted via bot commands by the user or server admin.
-   **TTS Message Content:** Immediately deleted after the TTS file is generated.
-   **Debug Logs:** Stored temporarily and **deleted upon bot restart**.

### **Server Data & Bot Removal**

If the bot is removed from a server, its stored data (including preferences and nicknames) is **not automatically deleted**. Users can manually delete server data using bot commands.

### **How to Delete Your Data**

-   You can delete **user or server preferences**, including nicknames, using the appropriate bot commands.
-   For additional deletion requests, contact us at **[erika@gozarproductions.com](mailto:erika@gozarproductions.com)**.

## **4\\. Data Security**

We take reasonable measures to protect the data stored by the bot:

-   **Nicknames are encrypted at rest** per Discord’s Developer Policy.
-   All temporary logs are deleted upon bot restart.

However, **no method** of transmission over the internet is **100% secure**, and we cannot guarantee absolute protection.

## **5\\. Your Privacy Rights**

### **For EU/EEA Users (GDPR Rights)**

If you are in the European Economic Area (EEA), you have the right to:

-   **Access & correct** your stored preferences.
-   **Request deletion** of stored data.
-   **Object to processing** (though this may prevent use of the Service).
-   **Withdraw consent** (where applicable).

### **For California Users (CCPA Rights)**

If you are a California resident, you have the right to:

-   **Know what data we collect** and how we use it.
-   **Request deletion** of stored data.
-   **Opt-out of data sales** (we do not sell your data).

To exercise your rights, contact us at **[erika@gozarproductions.com](mailto:erika@gozarproductions.com)**.

## **6\\. Third-Party Services**

This Service operates within **Discord** and does not control Discord’s data policies. We encourage you to review **[Discord’s Privacy Policy](https://discord.com/privacy)** for more information.

Additionally, Voicely Text uses **gTTS**, an open-source tool that sends message content to a public Google endpoint for speech generation. While this is not part of Google Cloud's official Text-to-Speech API, the message content is still transmitted to and processed by **Google servers**, and is therefore subject to **[Google’s general Privacy Policy](https://policies.google.com/privacy)**.

## **7\\. Children's Privacy**

The Service is **not intended for children under 13**. If we learn that a child's data has been collected, we will take immediate steps to delete it.

## **8\\. Changes to This Privacy Policy**

We may update this Privacy Policy periodically. Updates will be posted here, and significant changes may be announced through Discord or our website.

## **9\\. Contact Us**

If you have questions about this Privacy Policy, contact us at:

-   **Email:** [erika@gozarproductions.com](mailto:erika@gozarproductions.com)
`,terms:`# Terms and Conditions

Last updated: October 11, 2024

Please read these terms and conditions carefully before using Our Service.

## Interpretation and Definitions

### Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

### Definitions

For the purposes of these Terms and Conditions:

-   **Application** means the software program provided by the Company operated, utilized, and/or interacted with by You on any electronic device, named Voicely Text
-   **Affiliate** means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
-   **Country** refers to: Arizona, \xA0United States
-   **Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Gozar Productions LLC.
-   **Device** means any device that can access the Service such as a computer, a cellphone or a digital tablet.
-   **Service** refers to the Application.
-   **Terms and Conditions** (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the [Terms and Conditions Generator](https://www.termsfeed.com/terms-conditions-generator/).
-   **Third-party Social Media Service** means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
-   **You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

## Acknowledgment

These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.

You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.

Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.

## Links to Other Websites

Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.

## Termination

We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately.

## Limitation of Liability

Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.

## "AS IS" and "AS AVAILABLE" Disclaimer

The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.

## Governing Law

The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.

## Disputes Resolution

If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.

## For European Union (EU) Users

If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.

## United States Legal Compliance

You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.

## Severability and Waiver

### Severability

If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

### Waiver

Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.

## Translation Interpretation

These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.

## Changes to These Terms and Conditions

We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.

## Contact Us

If you have any questions about these Terms and Conditions, You can contact us:

-   By email: [erika@gozarproductions.com](mailto:erika@gozarproductions.com)
`},ping:{privacy:`# Privacy Policy

Last updated: October 13, 2024

This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.

We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the [Privacy Policy Generator](https://www.termsfeed.com/privacy-policy-generator/).

## Interpretation and Definitions

### Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

### Definitions

For the purposes of this Privacy Policy:

-   **Account** means a unique account created for You to access our Service or parts of our Service.
-   **Affiliate** means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
-   **Application** refers to Voicely Ping, the software program provided by the Company.
-   **Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Gozar Productions LLC.
-   **Country** refers to: Arizona, United States
-   **Device** means any device that can access the Service such as a computer, a cellphone or a digital tablet.
-   **Personal Data** is any information that relates to an identified or identifiable individual.
-   **Service** refers to the Application.
-   **Service Provider** means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.
-   **Usage Data** refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
-   **You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

## Collecting and Using Your Personal Data

### Types of Data Collected

#### Personal Data

While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:

-   Usage Data

#### Usage Data

Usage Data is collected automatically when using the Service.

Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.

### Use of Your Personal Data

The Company may use Personal Data for the following purposes:

-   **To provide and maintain our Service**, including to monitor the usage of our Service.
-   **To manage Your Account:** to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.
-   **For the performance of a contract:** the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.
-   **To contact You:** To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.
-   **To provide You** with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.
-   **To manage Your requests:** To attend and manage Your requests to Us.
-   **For business transfers:** We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.
-   **For other purposes**: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.

We may share Your personal information in the following situations:

-   **With Service Providers:** We may share Your personal information with Service Providers to monitor and analyze the use of our Service, \xA0to contact You.
-   **For business transfers:** We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.
-   **With Affiliates:** We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.
-   **With business partners:** We may share Your information with Our business partners to offer You certain products, services or promotions.
-   **With other users:** when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.
-   **With Your consent**: We may disclose Your personal information for any other purpose with Your consent.

### Retention of Your Personal Data

The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.

### Transfer of Your Personal Data

Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.

Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.

The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.

### Delete Your Personal Data

You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.

Our Service may give You the ability to delete certain information about You from within the Service.

You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.

Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.

### Disclosure of Your Personal Data

#### Business Transactions

If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.

#### Law enforcement

Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).

#### Other legal requirements

The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:

-   Comply with a legal obligation
-   Protect and defend the rights or property of the Company
-   Prevent or investigate possible wrongdoing in connection with the Service
-   Protect the personal safety of Users of the Service or the public
-   Protect against legal liability

### Security of Your Personal Data

The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.

## Children's Privacy

Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.

If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.

## Links to Other Websites

Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.

## Changes to this Privacy Policy

We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.

We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

## Contact Us

If you have any questions about this Privacy Policy, You can contact us:

-   By email: [erika@gozarproductions.com](mailto:erika@gozarproductions.com)
`,terms:`# Terms and Conditions

Last updated: October 13, 2024

Please read these terms and conditions carefully before using Our Service.

## Interpretation and Definitions

### Interpretation

The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.

### Definitions

For the purposes of these Terms and Conditions:

-   **Application** means the software program provided by the Company operated, utilized, and/or interacted with by You on any electronic device, named Voicely Ping
-   **Affiliate** means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
-   **Country** refers to: Arizona, \xA0United States
-   **Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Gozar Productions LLC.
-   **Device** means any device that can access the Service such as a computer, a cellphone or a digital tablet.
-   **Service** refers to the Application.
-   **Terms and Conditions** (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the [Terms and Conditions Generator](https://www.termsfeed.com/terms-conditions-generator/).
-   **Third-party Social Media Service** means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
-   **You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.

## Acknowledgment

These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.

Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.

By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.

You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.

Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.

## Links to Other Websites

Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.

The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.

We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.

## Termination

We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.

Upon termination, Your right to use the Service will cease immediately.

## Limitation of Liability

Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.

To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.

Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.

## "AS IS" and "AS AVAILABLE" Disclaimer

The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.

Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.

Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.

## Governing Law

The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.

## Disputes Resolution

If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.

## For European Union (EU) Users

If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.

## United States Legal Compliance

You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.

## Severability and Waiver

### Severability

If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.

### Waiver

Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.

## Translation Interpretation

These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.

## Changes to These Terms and Conditions

We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.

By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.

## Contact Us

If you have any questions about these Terms and Conditions, You can contact us:

-   By email: [erika@gozarproductions.com](mailto:erika@gozarproductions.com)
`},role:{privacy:`# Privacy Policy

**Last Updated:** July 17, 2026

## Introduction

Voicely Role ("the Bot") is a Discord bot developed by Gozar Productions LLC. This Privacy Policy explains what information the Bot stores, how it is used, and your rights regarding that information.

By using Voicely Role, you agree to the practices described in this Privacy Policy.

## Information We Store

Voicely Role stores only the information necessary to provide its functionality.

This may include:

-   Discord server IDs
-   Discord channel IDs
-   Discord role IDs
-   Discord user IDs for excluded users
-   Configured administrator role IDs
-   Voice notification configurations
-   Custom notification messages
-   Internal notification state required for the Bot to determine when notifications should be sent

Voicely Role does **not** store:

-   Voice communications
-   Message contents
-   Usernames
-   Display names
-   Voice recordings
-   Personal profile information
-   Email addresses
-   IP addresses

## How Information Is Used

Stored information is used solely to:

-   Monitor configured voice channels
-   Determine when notification thresholds have been reached
-   Send configured role notifications
-   Manage server-specific settings
-   Prevent duplicate notifications until channels have reset

## Data Sharing

Voicely Role does not sell, rent, or share stored data with third parties except when required by law.

## Data Retention

Configuration data is retained until:

-   It is removed by an authorized server administrator,
-   The Bot is removed from the server, or
-   The data is otherwise deleted during maintenance.

## Security

Reasonable measures are taken to protect stored configuration data. However, no system can guarantee absolute security.

## Third-Party Services

Voicely Role operates through Discord and is subject to Discord's own Privacy Policy and Terms of Service.

## Your Rights

Server administrators may modify or remove stored server configuration at any time using the Bot's commands.

To request deletion of any remaining stored data, please contact Gozar Productions LLC.

## Changes

This Privacy Policy may be updated from time to time. Continued use of the Bot after changes become effective constitutes acceptance of the updated policy.

## Contact

For questions regarding this Privacy Policy, please contact Gozar Productions LLC through the official support server or our email:

Official support server: [https://discord.gozarproductions.com](https://discord.gozarproductions.com)

Email: [contact@gozarproductions.com](mailto:contact@gozarproductions.com)
`,terms:`# Terms of Service

**Last Updated:** July 17, 2026

## Acceptance

By inviting or using Voicely Role ("the Bot"), you agree to these Terms of Service.

If you do not agree to these terms, you must discontinue use of the Bot.

## Use of the Bot

You agree to use Voicely Role in compliance with:

-   Discord's Terms of Service
-   Discord's Community Guidelines
-   All applicable laws and regulations

You may not use the Bot to facilitate harassment, abuse, spam, or other prohibited activities.

## Availability

The Bot is provided on an "as is" and "as available" basis.

Gozar Productions LLC does not guarantee that the Bot will always be available, uninterrupted, or error-free.

Features may be modified, suspended, or discontinued at any time without prior notice.

## Server Configuration

Server administrators are responsible for:

-   Configuring notification settings appropriately
-   Choosing which roles receive notifications
-   Managing excluded users
-   Selecting administrator roles with care

## Limitation of Liability

To the fullest extent permitted by law, Gozar Productions LLC shall not be liable for any indirect, incidental, consequential, or special damages arising from the use of Voicely Role.

## Termination

Access to the Bot may be suspended or terminated at any time, with or without notice, for misuse, abuse, or any other reason deemed appropriate.

Users may stop using the Bot at any time by removing it from their server.

## Changes to These Terms

These Terms of Service may be updated periodically.

Continued use of the Bot after changes become effective constitutes acceptance of the revised Terms.

## Contact

Questions regarding these Terms of Service may be directed to Gozar Productions LLC through the official support server or our email:

Official support server: [https://discord.gozarproductions.com](https://discord.gozarproductions.com)

Email: [contact@gozarproductions.com](mailto:contact@gozarproductions.com)
`},translate:{privacy:`# Privacy Policy

**Last Updated: August 10, 2026**

This Privacy Policy explains how information is handled when you use the Voicely Translate Discord bot ("Voicely Translate," the "Bot," or the "Service").

## Overview

Voicely Translate provides live voice transcription and translation within Discord. To provide the Service, the Bot processes certain Discord information, voice audio, generated transcripts and translations, server configuration information, usage information, and information associated with credit purchases.

This policy describes the categories of information involved, why they are processed, and the third-party services that may receive information as part of providing the Service.

## Information Processed by the Service

Depending on how the Bot is used, Voicely Translate may process:

### Discord Information

-   Discord server (guild) IDs.
-   Discord user IDs.
-   Voice channel and text/channel identifiers needed to provide Bot functionality.
-   Discord display information needed to attribute a transcription or translation to the appropriate speaker.
-   Server configuration, such as selected/default translation languages and idle-timeout settings.

### Voice Audio

When Voicely Translate is active in a voice channel, the Bot receives voice audio needed to detect speech and create transcriptions.

Audio may be temporarily buffered or processed as necessary to provide the Service.

### Transcriptions and Translations

Speech may be converted into text and sent for automated transcription and translation processing. Generated transcriptions and translations may then be posted into Discord.

Once text is posted in Discord, Discord's own storage, retention, permissions, and deletion behavior applies to that message.

### Usage and Credit Information

The Service may process and store the following information to track usage, manage credits, and process credit purchases:

-   Purchased and promotional/free-trial credit balances.
-   Total usage amounts and calculated usage costs.
-   Separate transcription and translation usage totals.
-   Trial usage and remaining trial balance.
-   Discord server IDs.
-   Server-specific \`VT-XXXXXX\` top-up codes.
-   Ko-fi transaction or message IDs used to identify payments and prevent duplicate credit activation.
-   Purchase amounts and currency.
-   Ko-fi Shop item identifiers used to verify that a purchase is for Voicely Translate Credits.
-   Whether a payment has already been claimed and applied to a Discord server.

A server-specific \`VT-XXXXXX\` top-up code is associated with a Discord server ID. When that code is included with a qualifying Ko-fi purchase, the Service uses it to determine which Discord server should receive the purchased credits.

### Purchase Information

When credits are purchased through Ko-fi, the Service receives information included in Ko-fi's webhook notification that is necessary to verify and process the purchase. This may include:

-   The Ko-fi transaction/message ID.
-   The purchase amount and currency.
-   The purchased Shop item's identifier.
-   The message included with the order.
-   The server-specific \`VT-XXXXXX\` code contained in that message.

The \`VT-XXXXXX\` code is associated with a Discord server ID so that purchased credits can be assigned to the correct Discord server.

Payment-card and bank-account details are processed by Ko-fi and its payment providers and are not received or stored by Voicely Translate.

### Technical and Diagnostic Information

The Service may generate operational logs containing information needed to diagnose errors, maintain the Bot, detect abuse, and verify successful processing. Logs may include server IDs, channel IDs, user IDs, transaction/event identifiers, error messages, and service-status information.

## How Information Is Used

Information is processed to:

-   Connect the Bot to Discord voice channels.
-   Detect speech and distinguish speakers.
-   Transcribe voice audio.
-   Identify supported languages.
-   Translate transcribed speech.
-   Post transcriptions and translations to Discord.
-   Maintain server settings.
-   Track trial access and usage.
-   Maintain and deduct Voicely Credit balances.
-   Activate Ko-fi credit purchases.
-   Prevent duplicate payment crediting.
-   Diagnose failures and maintain reliability.
-   Protect the Service against abuse, fraud, and unauthorized access.

## Third-Party Services

Voicely Translate depends on third-party services to operate. Information may be transmitted to these providers when necessary to provide the Service.

### Discord

Discord provides the servers, voice channels, user information, and messaging infrastructure through which Voicely Translate operates.

Messages posted by the Bot are handled according to Discord's systems and policies.

### OpenAI

Voice audio and/or text derived from voice activity may be sent to OpenAI services for automated transcription and translation.

The exact information sent depends on the feature being used.

### Ko-fi

Ko-fi may process purchases of Voicely Credits. Ko-fi sends transaction information to the Service so that qualifying purchases can be associated with a Discord server and converted into credits.

### Cloudflare

Cloudflare infrastructure may be used to receive Ko-fi webhook events, store or retrieve information required for credit activation, and provide communication between the Bot and the credit-processing service.

These providers operate under their own terms and privacy policies.

## Voice Audio Retention

Voicely Translate processes voice audio for the purpose of providing live transcription and translation.

The Service is not intended to maintain a permanent archive of users' voice recordings. Temporary audio files or buffers may exist during processing and are deleted or discarded when they are no longer required for the active processing workflow.

Third-party providers involved in processing may have their own retention practices, which are governed by their respective policies.

## Transcript and Translation Retention

Transcriptions and translations posted to Discord become Discord messages and may remain available in Discord according to the server's permissions, moderation practices, message deletion, and Discord's own policies.

The Service may temporarily hold generated text while processing a request. Operational logs may also contain limited text or error context when necessary for debugging, depending on the nature of an error.

Server administrators should manage Discord message history according to the privacy expectations of their communities.

## Stored Server and Credit Data

Certain information must persist so the Service can function between restarts. This may include:

-   Discord server IDs.
-   Server configuration, including idle-timeout settings and saved default translation languages.
-   Remaining free-trial credit balances.
-   Purchased credit balances.
-   Total purchased-credit amounts.
-   Total calculated usage.
-   Separate transcription and translation usage totals.
-   Server-specific \`VT-XXXXXX\` top-up codes.
-   Payment-event identifiers and associated purchase amounts.
-   Information required to prevent duplicate credit claims.

This information may be stored locally by the Bot and/or in infrastructure used for Ko-fi credit processing.

## Legal Basis and Consent

Depending on your location, privacy law may require a particular legal basis for processing personal information or consent from participants before voice communications are transcribed.

Server owners and administrators are responsible for determining whether they are permitted to enable Voicely Translate in a particular server or voice channel and for providing notices or obtaining consent where required.

Users should not use Voicely Translate to secretly transcribe or monitor conversations in violation of applicable law.

## Data Sharing

Information is not sold as part of operating Voicely Translate.

Information may be disclosed:

-   To service providers when necessary to operate the Service.
-   When required by applicable law, legal process, or a valid governmental request.
-   When reasonably necessary to investigate fraud, abuse, security threats, or violations of applicable terms.
-   In connection with a reorganization, transfer, or discontinuation of the Service, subject to applicable legal requirements.

## Data Security

Reasonable technical and organizational measures are used to protect information handled by the Service. These may include authentication secrets, restricted API endpoints, and access controls.

No internet-connected service can guarantee absolute security. Users should not send sensitive information through Voicely Translate unless they are comfortable with that information being processed by the services required to provide transcription and translation.

## Data Retention

Persistent server, configuration (including saved default languages and idle-timeout settings), credit balances, purchase totals, usage totals, transcription/translation usage breakdowns, and transaction-deduplication information may be retained for as long as reasonably necessary to operate the Service, maintain accurate balances, prevent duplicate credits, resolve disputes, comply with legal obligations, and protect against abuse.

Temporary processing data is discarded when it is no longer required for the processing workflow.

Where third-party providers process information, their own retention policies may also apply.

## Your Choices and Requests

You can stop future processing by leaving a voice channel where the Bot is active, asking an authorized server administrator to disconnect the Bot, or removing the Bot from a server where you have permission to do so.

Depending on applicable law, you may have rights regarding personal information associated with you, such as rights to request access, correction, or deletion.

Requests should be sent through the contact method provided by the operator of Voicely Translate. Some information may need to be retained when required for security, fraud prevention, accounting, dispute resolution, or legal compliance.

Messages already posted to Discord may need to be managed through Discord and the relevant Discord server.

## Children's Privacy

Voicely Translate is intended to be used only by individuals permitted to use Discord and the other services required for the Bot. The Service is not intentionally designed to collect personal information from children in violation of applicable law.

## International Processing

Third-party services used by Voicely Translate may process information in countries other than the country where a user is located. Applicable provider policies and legal safeguards govern those processing activities.

## Changes to This Privacy Policy

This Privacy Policy may be updated as the Service changes. The "Last Updated" date at the top will be revised when changes are made.

## Contact

Questions, privacy requests, or concerns about Voicely Translate should be directed to Gozar Productions LLC through the official support server or our email:

Official support server: [https://discord.gozarproductions.com](https://discord.gozarproductions.com)

Email: [contact@gozarproductions.com](mailto:contact@gozarproductions.com)
`,terms:`# Voicely Translate Terms of Service

**Last Updated: August 9, 2026**

These Terms of Service ("Terms") govern your use of the Voicely Translate Discord bot ("Voicely Translate," the "Bot," or the "Service"). By installing, accessing, purchasing credits for, or using Voicely Translate, you agree to these Terms.

## 1\\. The Service

Voicely Translate is a Discord bot that can join voice channels, transcribe speech, identify supported languages, translate transcribed speech into selected languages, and post the resulting text in Discord.

The Service may also provide usage credits, trial access, configurable server settings, and integrations used to process credit purchases.

Voicely Translate relies on third-party services, including Discord, OpenAI, Ko-fi, and infrastructure providers. Availability or functionality may therefore be affected by services outside our control.

## 2\\. Eligibility and Authorization

You must comply with Discord's Terms of Service and all laws and rules applicable to your use of Voicely Translate.

You may only use the Bot in servers and voice channels where you are authorized to do so. Server administrators are responsible for determining whether use of voice transcription and translation is appropriate for their server and for providing any notices or obtaining any consent required by applicable law.

Do not use Voicely Translate to secretly record, monitor, transcribe, or otherwise surveil people where doing so would violate applicable law or the rights of another person.

## 3\\. Transcription and Translation

Voicely Translate uses automated systems to process speech and generate transcriptions and translations.

Automated transcription, language identification, and translation can be inaccurate. The Service may mishear speech, identify the wrong language, omit words, misunderstand context, or produce an incorrect translation.

You should not rely on Voicely Translate for emergency communications, legal advice, medical decisions, safety-critical information, or any other situation where an inaccurate transcription or translation could cause significant harm.

## 4\\. Voice Data

When the Bot is actively being used in a voice channel, audio may be processed as necessary to provide transcription and translation.

The Service is not intended to function as a permanent voice-recording or archival service. Additional information about how data is handled is provided in the Voicely Translate Privacy Policy.

## 5\\. Credits and Paid Usage

Some use of Voicely Translate may require prepaid Voicely Credits.

Unless otherwise stated at the time of purchase:

-   100 Voicely Credits represents $1.00 USD of purchased credit.
-   Credits are consumed according to the Service's usage-cost calculation.
-   The amount of credit consumed can vary depending on transcription and translation usage.
-   Credits are associated with the Discord server to which they are activated, rather than with an individual Discord user.
-   Credits have no cash value and cannot be exchanged for cash.

The Service may apply a usage-cost multiplier above the underlying cost of third-party services. The amount charged in Voicely Credits therefore does not necessarily equal the amount paid by the Service to a third-party provider for a particular request.

Pricing, credit rates, and usage calculations may be changed for future purchases or future usage. Material changes will not retroactively reduce credits that have already been purchased and added to a server solely because the purchase price later changes.

## 6\\. Credit Activation

Credit purchases may require a server-specific activation code, such as a \`VT-XXXXXX\` code generated by the \`/topup\` command.

You are responsible for entering the correct activation code when purchasing credits. Credits are assigned according to the activation code supplied with the purchase.

If an activation code is missing or incorrect, automatic activation may fail. Contact the Service operator if you believe a valid purchase was not properly credited.

## 7\\. Payments and Refunds

Payments for Voicely Credits may be processed by Ko-fi or another disclosed payment provider. Payment processing is also subject to the payment provider's terms and policies.

Except where required by law or otherwise stated at the time of purchase, used credits are non-refundable.

If you experience a duplicate charge, failed credit activation, or another payment problem, contact the Service operator so the transaction can be reviewed.

Chargebacks, payment reversals, fraud, or abuse may result in corresponding credits being removed and access to paid features being restricted.

## 8\\. Trials and Promotional Credits

Voicely Translate may provide free trials, complimentary credits, promotional credits, or unrestricted access to selected servers.

Trial and promotional access may be limited, changed, or discontinued at any time. Free or promotional credits have no cash value.

## 9\\. Acceptable Use

You may not use Voicely Translate to:

-   Violate applicable law or another person's rights.
-   Harass, threaten, stalk, or unlawfully monitor another person.
-   Circumvent access restrictions, credit requirements, rate limits, or security controls.
-   Exploit bugs or vulnerabilities to obtain unpaid service.
-   Interfere with the Bot, its infrastructure, or other users' access to the Service.
-   Use automated requests or other methods intended to create unreasonable load or excessive costs.
-   Misrepresent generated translations or transcriptions as guaranteed to be accurate.
-   Use the Service in a manner prohibited by the terms of an applicable third-party provider.

We may restrict or terminate access when reasonably necessary to prevent abuse, fraud, security problems, excessive disruption, or violations of these Terms.

## 10\\. Availability and Changes

Voicely Translate is provided on an as-available basis.

The Bot may be unavailable because of maintenance, software errors, internet outages, Discord outages, third-party API outages, account limitations, rate limits, or other circumstances.

Features may be added, modified, suspended, or removed. We do not guarantee uninterrupted availability or that every feature will continue to be offered indefinitely.

## 11\\. Third-Party Services

Voicely Translate may interact with third-party services such as Discord, OpenAI, Ko-fi, and Cloudflare.

Your use of those services may also be governed by their own terms and privacy policies. We are not responsible for outages, changes, or actions of third-party services outside our reasonable control.

## 12\\. Disclaimer of Warranties

To the maximum extent permitted by law, Voicely Translate is provided "as is" and "as available," without warranties of any kind, express or implied.

We do not warrant that the Service will be uninterrupted, error-free, completely secure, or that any transcription, translation, language identification, usage calculation, or other generated output will be completely accurate.

## 13\\. Limitation of Liability

To the maximum extent permitted by applicable law, the operator of Voicely Translate will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to use of the Service.

Where liability cannot legally be excluded, liability will be limited to the maximum extent permitted by applicable law.

Nothing in these Terms excludes rights or remedies that cannot lawfully be excluded.

## 14\\. Termination

You may stop using Voicely Translate at any time and may remove the Bot from your Discord server.

We may suspend or terminate access to the Service when reasonably necessary for security, legal compliance, abuse prevention, nonpayment, violation of these Terms, or discontinuation of the Service.

## 15\\. Changes to These Terms

These Terms may be updated as Voicely Translate changes. The "Last Updated" date at the top of this document will be revised when the Terms are updated.

Continued use of the Service after updated Terms take effect constitutes acceptance of the updated Terms to the extent permitted by applicable law.

## 16\\. Contact

Questions about these Terms, billing issues, or Voicely Translate should be directed to Gozar Productions LLC through the official support server or our email:

Official support server: [https://discord.gozarproductions.com](https://discord.gozarproductions.com)

Email: [contact@gozarproductions.com](mailto:contact@gozarproductions.com)
`}};function ae(e,t){return t!==`privacy`&&t!==`terms`?``:ie[e]?.[t]??``}function S(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var C=S();function w(e){C=e}var T={exec:()=>null};function E(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function D(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(O.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var oe=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),O={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:E(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:E(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:E(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:E(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:E(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:E(e=>RegExp(`^ {0,${e}}>`))},se=/^(?:[ \t]*(?:\n|$))+/,k=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ce=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,A=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,le=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,j=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ue=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,de=D(ue).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),fe=D(ue).replace(/bull/g,j).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),pe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,me=/^[^\n]+/,M=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,he=D(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,M).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),ge=D(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,j).getRegex(),N=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,P=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,_e=D(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,P).replace(`tag`,N).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ve=e=>D(pe).replace(`hr`,A).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,N).getRegex(),ye=ve(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),be=ve(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),F={blockquote:D(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,be).getRegex(),code:k,def:he,fences:ce,heading:le,hr:A,html:_e,lheading:de,list:ge,newline:se,paragraph:ye,table:T,text:me},xe=D(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,A).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,N).getRegex(),Se={...F,lheading:fe,table:xe,paragraph:D(pe).replace(`hr`,A).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,xe).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,N).getRegex()},Ce={...F,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,P).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:T,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(pe).replace(`hr`,A).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,de).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},we=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Te=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Ee=/^( {2,}|\\)\n(?!\s*$)/,De=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,I=/[\p{P}\p{S}]/u,L=/[\s\p{P}\p{S}]/u,R=/[^\s\p{P}\p{S}]/u,Oe=D(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,L).getRegex(),ke=/[\p{Pi}\p{Ps}"']/u,Ae=/(?!~)[\p{P}\p{S}]/u,je=/(?!~)[\s\p{P}\p{S}]/u,Me=/(?:[^\s\p{P}\p{S}]|~)/u,Ne=D(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,oe?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),Pe=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Fe=D(Pe,`u`).replace(/punct/g,I).getRegex(),Ie=D(Pe,`u`).replace(/punct/g,Ae).getRegex(),Le=D(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,ke).replace(/punct/g,I).getRegex(),Re=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,ze=D(Re,`gu`).replace(/notPunctSpace/g,R).replace(/punctSpace/g,L).replace(/punct/g,I).getRegex(),Be=D(Re,`gu`).replace(/notPunctSpace/g,Me).replace(/punctSpace/g,je).replace(/punct/g,Ae).getRegex(),Ve=D(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,R).replace(/punctSpace/g,L).replace(/punct/g,I).getRegex(),He=D(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,R).replace(/punctSpace/g,L).replace(/punct/g,I).getRegex(),Ue=D(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,R).replace(/punctSpace/g,L).replace(/punct/g,I).getRegex(),We=D(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,I).getRegex(),Ge=D(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,R).replace(/punctSpace/g,L).replace(/punct/g,I).getRegex(),Ke=D(/\\(punct)/,`gu`).replace(/punct/g,I).getRegex(),qe=D(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Je=D(P).replace(`(?:-->|$)`,`-->`).getRegex(),Ye=D(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Je).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),z=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Xe=D(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,z).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Ze=D(/^!?\[(label)\]\[(ref)\]/).replace(`label`,z).replace(`ref`,M).getRegex(),Qe=D(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,M).getRegex(),$e=D(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Ze).replace(`nolink`,Qe).getRegex(),et=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,B={_backpedal:T,anyPunctuation:Ke,autolink:qe,blockSkip:Ne,br:Ee,code:Te,del:T,delLDelim:T,delRDelim:T,emStrongLDelim:Fe,emStrongRDelimAst:ze,emStrongRDelimUnd:He,escape:we,link:Xe,nolink:Qe,punctuation:Oe,reflink:Ze,reflinkSearch:$e,tag:Ye,text:De,url:T},tt={...B,emStrongLDelim:Le,emStrongRDelimAst:Ve,emStrongRDelimUnd:Ue,link:D(/^!?\[(label)\]\((.*?)\)/).replace(`label`,z).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,z).getRegex()},V={...B,emStrongRDelimAst:Be,emStrongLDelim:Ie,delLDelim:We,delRDelim:Ge,url:D(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,et).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:D(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,et).getRegex()},nt={...V,br:D(Ee).replace(`{2,}`,`*`).getRegex(),text:D(V.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},H={normal:F,gfm:Se,pedantic:Ce},U={normal:B,gfm:V,breaks:nt,pedantic:tt},rt={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},it=e=>rt[e];function W(e,t){if(t){if(O.escapeTest.test(e))return e.replace(O.escapeReplace,it)}else if(O.escapeTestNoEncode.test(e))return e.replace(O.escapeReplaceNoEncode,it);return e}function at(e){try{e=encodeURI(e).replace(O.percentDecode,`%`)}catch{return null}return e}function ot(e,t){let n=e.replace(O.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(O.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(O.slashPipe,`|`);return n}function G(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function st(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&O.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function ct(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function lt(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function ut(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function dt(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var K=class{options;rules;lexer;constructor(e){this.options=e||C}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:st(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=dt(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=G(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:G(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:G(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=G(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s,n=`${n}
${a}`,r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=lt(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=st(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:G(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=ot(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:G(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(ot(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:G(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=G(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=ct(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ut(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return ut(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},q=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||C,this.options.tokenizer=this.options.tokenizer||new K,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:O,block:H.normal,inline:U.normal};this.options.pedantic?(t.block=H.pedantic,t.inline=U.pedantic):this.options.gfm&&(t.block=H.gfm,t.inline=this.options.breaks?U.breaks:U.gfm),this.tokenizer.rules=t}static get rules(){return{block:H,inline:U}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(O.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(O.tabCharGlobal,`    `).replace(O.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);e.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,t=>e.includes(t.slice(t.lastIndexOf(`[`)+1,-1))?`[`+`a`.repeat(t.length-2)+`]`:t))}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},J=class{options;parser;constructor(e){this.options=e||C}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(O.notSpaceStart)?.[0],i=e.replace(O.endingNewline,``)+`
`;return r?`<pre><code class="language-`+W(r)+`">`+(n?i:W(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:W(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${W(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=at(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+W(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=at(e);if(i===null)return W(n);e=i;let a=`<img src="${e}" alt="${W(n)}"`;return t&&(a+=` title="${W(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:W(e.text)}},Y=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},X=class e{options;renderer;textRenderer;constructor(e){this.options=e||C,this.options.renderer=this.options.renderer||new J,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Y}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Z=class{options;block;constructor(e){this.options=e||C}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?q.lex:q.lexInline}provideParser(e=this.block){return e?X.parse:X.parseInline}},Q=new class{defaults=S();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=X;Renderer=J;TextRenderer=Y;Lexer=q;Tokenizer=K;Hooks=Z;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new J(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new K(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Z;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=Z.passThroughHooks.has(n)?e=>{if(this.defaults.async&&Z.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return q.lex(e,t??this.defaults)}parser(e,t){return X.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?q.lex:q.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?X.parse:X.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?q.lex:q.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?X.parse:X.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+W(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return Q.parse(e,t)}$.options=$.setOptions=function(e){return Q.setOptions(e),$.defaults=Q.defaults,w($.defaults),$},$.getDefaults=S,$.defaults=C;function ft(...e){return Q.use(...e),$.defaults=Q.defaults,w($.defaults),$}$.use=ft,$.walkTokens=function(e,t){return Q.walkTokens(e,t)},$.parseInline=Q.parseInline,$.Parser=X,$.parser=X.parse,$.Renderer=J,$.TextRenderer=Y,$.Lexer=q,$.lexer=q.lex,$.Tokenizer=K,$.Hooks=Z,$.parse=$,$.options,$.setOptions,$.walkTokens,$.parseInline,X.parse,q.lex;var pt=_(`<meta name="description"/><link rel="canonical"/>`,1),mt=_(`<p class="lead svelte-1h1p9a2"> </p> <section class="svelte-1h1p9a2"><h2 class="svelte-1h1p9a2">Start with the official guide</h2> <p class="svelte-1h1p9a2">The repository README is maintained with the bot, so it is the best place to find
					instructions that match the current release. Keeping one authoritative copy also avoids
					stale or duplicated documentation.</p> <a class="button primary svelte-1h1p9a2">Read the guide on GitHub ↗</a></section> <section class="svelte-1h1p9a2"><h2 class="svelte-1h1p9a2">Need help?</h2> <p class="svelte-1h1p9a2">If something is not working or you would like to suggest a feature, open an issue in the
					repository. Include the command you used, what you expected, and what happened.</p> <a class="text-link svelte-1h1p9a2">View support issues →</a></section>`,1),ht=_(`<div class="legal-document"></div>`),gt=_(`<main class="svelte-1h1p9a2"><header class="page-hero svelte-1h1p9a2"><div class="wrap"><a class="back svelte-1h1p9a2"> </a> <p class="eyebrow svelte-1h1p9a2"> </p> <h1 class="svelte-1h1p9a2"> </h1></div></header> <article class="content wrap svelte-1h1p9a2"><!></article></main>`);function _t(c,_){t(_,!0);let v=r(()=>_.data.bot),y=r(()=>_.data.section),b={docs:`Documentation`,privacy:`Privacy Policy`,terms:`Terms of Service`},re=r(()=>g(y)===`docs`?`Documentation and support for ${g(v).name}.`:g(y)===`privacy`?`Privacy information for ${g(v).name}.`:`Terms of service for ${g(v).name}.`),x=r(()=>ae(g(v).slug,g(y))),ie=r(()=>g(x)?$.parse(g(x)):``);function S(e){let t=new Set,n=e.querySelectorAll(`.legal-document h1, .legal-document h2, .legal-document h3, .legal-document h4`);for(let e of n){let n=e.textContent?.toLowerCase().normalize(`NFKD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)||`section`,r=n,i=2;for(;t.has(r);)r=`${n}-${i++}`;t.add(r),e.id=r;let a=document.createElement(`a`);for(a.href=`#${r}`;e.firstChild;)a.append(e.firstChild);e.append(a)}location.hash&&requestAnimationFrame(()=>document.getElementById(location.hash.slice(1))?.scrollIntoView())}var C=gt();ee(`1h1p9a2`,t=>{var r=pt(),s=i(r),c=a(s);n(()=>{h(s,`content`,g(re)),h(c,`href`,`https://voicely.gozarproductions.com/${g(v).slug??``}/${g(y)??``}/`)}),o(()=>{e.title=`${b[g(y)]??``} — ${g(v).name??``}`}),l(t,r)});let w;var T=m(C),E=m(T),D=m(E),oe=m(D);s(D);var O=a(D,2),se=m(O,!0);s(O);var k=a(O,2),ce=m(k,!0);s(k),s(E),s(T);var A=a(T,2),le=m(A),j=e=>{var t=mt(),r=i(t),o=m(r);s(r);var c=a(r,2),u=a(m(c),4);s(c);var d=a(c,2),p=a(m(d),4);s(d),n(()=>{f(o,`The latest setup instructions, commands, examples, and troubleshooting notes for ${g(v).name??``} live
				alongside the bot's source code.`),h(u,`href`,`${g(v).repository??``}#readme`),h(p,`href`,`${g(v).repository??``}/issues`)}),l(e,t)},ue=e=>{var t=ht();d(t,()=>g(ie),!0),s(t),l(e,t)};p(le,e=>{g(y)===`docs`?e(j):e(ue,-1)}),s(A),u(A,e=>S?.(e)),s(C),n(()=>{w=te(C,``,w,{"--bot-accent":g(v).accent,"--bot-soft":g(v).accentSoft,"--bot-bg-start":g(v).backgroundStart,"--bot-bg-end":g(v).backgroundEnd}),h(D,`href`,`/${g(v).slug??``}/`),f(oe,`← ${g(v).name??``}`),f(se,g(v).name),f(ce,b[g(y)])}),l(c,C),ne()}export{_t as component,b as universal};